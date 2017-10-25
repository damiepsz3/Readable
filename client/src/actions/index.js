import * as BlogAPI from '../utils/BlogAPI.js'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const REQUEST_COMMENT = 'REQUEST_COMMENT'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const POST_VOTE = 'POST_VOTE'
export const COMMENT_VOTE = 'COMMENT_VOTE'
export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const SELECT_SORT = 'SELECT_SORT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ERROR_FOUND = 'ERROR_FOUND'


const requestComments = () => {
  return {
    type: REQUEST_COMMENT,
    fetching: true
  }
}

const receiveComments = (comments, parentId) => {
  return {
    type: RECEIVE_COMMENT,
    fetching: false,
    comments,
    parentId
  }
}


const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES,
    fetching: true
  }
}

const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    fetching: false,
    categories
  }
}

const requestPosts = () => {
  return {
    type: REQUEST_POSTS,
    fetching: true
  }
}

const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    fetching: false,
    posts
  }
}

const postVote = (id, option) => {
  return {
    type: POST_VOTE,
    id,
    option
  }
}

const commentVote = (id, option) => {
  return {
    type: COMMENT_VOTE,
    id,
    option
  }
}

const requestPost = () => {
  return {
    type: REQUEST_POST,
    fetching: true
  }
}

const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    fetching: false,
    found: true,
    post
  }
}

export const selectSort = (value) => {
  return {
    type: SELECT_SORT,
    value
  }
}

const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

const deleteComment = (id, parentId) => {
  return {
    type: DELETE_COMMENT,
    id,
    parentId
  }
}

const errorFound = (message) => {
  return {
    type: ERROR_FOUND,
    message
  }
}

export const deletePostCall = (id) => dispatch => {
  return BlogAPI.postDelete(id)
    .then(resp => dispatch(deletePost(id)))
}

export const deleteCommentCall = (id, parentId) => dispatch => {
  return BlogAPI.comDelete(id)
    .then(resp => dispatch(deleteComment(id, parentId)))
}

const fetchCategories = () => {
  return dispatch => {
    dispatch(requestCategories())
    return BlogAPI.getCategories()
      .then(resp => dispatch(receiveCategories(resp)))
  }
}

const fetchPostComment = () => {
  return (dispatch, getState) => {
    dispatch(requestPosts())
    return BlogAPI.getPosts()
      .then(resp => dispatch(receivePosts(resp)))
      .then(action => action.posts.map(post => {
        dispatch(requestComments())
        return BlogAPI.postComments(post.id)
          .then(resp => dispatch(receiveComments(resp, post.id)))
        })
      )}
}


export const fetchPost = (id) => (dispatch, getState) => {
  if(!getState().entities.posts.byId.hasOwnProperty(id)) {
    dispatch(requestPost())
    return BlogAPI.postDetail(id)
      .then(function(response) {
          if (response.error) {
            throw Error(response.statusText);
          }
          return response;
        }
      )
      .then(resp => dispatch(receivePost(resp)))
      .catch(message => dispatch(errorFound(message)))
  }
}

export const fetchComments = (postId) => (dispatch, getState) => {
  if(shouldFetchComment(postId,getState)){
    dispatch(requestComments())
    return BlogAPI.postComments(postId)
      .then(resp => dispatch(receiveComments(resp, postId)))
  }
}

export const firstCall = () => (dispatch, getState) => {
  const postsLength = Object.keys(getState().entities.posts.byId).length
  const categoryLength = Object.keys(getState().entities.categories.byId).length
  if(postsLength < 2) {
    dispatch(fetchPostComment())
  }
  if(categoryLength < 2) {
    dispatch(fetchCategories())
  }
}

export const voteIssuing = (id, option) => (dispatch) => {
  return BlogAPI.postVote(id, option)
    .then(resp => dispatch(postVote(id, option)))
}

export const voteComment = (id, option) => (dispatch) => {
  return BlogAPI.comVote(id, option)
    .then(resp => dispatch(commentVote(id, option)))
}

const shouldFetchComment = (postId, getState) => {
  const comments = getState().entities.comments.byId
  return !Object.keys(comments).map(comId => comments[comId].parentId).includes(postId)
}
