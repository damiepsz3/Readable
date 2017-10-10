import * as BlogAPI from '../utils/BlogAPI.js'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    return BlogAPI.getPosts()
      .then(resp => dispatch(receivePosts(resp)))
  }
}

const shouldFetchPosts = (state) => {
  const posts = state.posts
  if(!posts.items.length && !posts.isFetching) {
    return true
  } else {
    return false
  }
}

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts())
  }
}
