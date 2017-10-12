import * as BlogAPI from '../utils/BlogAPI.js'
import { createShouldFetch } from './helper.js'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const REQUEST_COMMENT = 'REQUEST_COMMENT'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const POST_VOTE = 'POST_VOTE'

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



export const firstCall = () => (dispatch, getState) => {
  if(createShouldFetch('entities','posts')(getState())) {
    dispatch(fetchPostComment())
  }
  if(createShouldFetch('entities','categories')(getState())) {
     dispatch(fetchCategories())
  }
}

export const voteIssuing = (id, option) => (dispatch) => {
  return BlogAPI.postVote(id, option)
    .then(resp => dispatch(postVote(id, option)))
}
