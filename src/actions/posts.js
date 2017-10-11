import * as BlogAPI from '../utils/BlogAPI.js'
import { createShouldFetch } from './helper.js'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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

const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    return BlogAPI.getPosts()
      .then(resp => dispatch(receivePosts(resp)))
  }
}

const shouldFetchPosts = createShouldFetch('entities', 'posts')


export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts())
  }
}
