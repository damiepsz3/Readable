import { createReducer, updateObject, updateItemInArray } from '../helper.js'


const initialState = {
  isFetching: false,
  items: []
}

const receivePosts = (postState, action) => {
  return {
    ...postState,
    isFetching: action.fetching, //review
    items: [
      ...action.posts
      ]
  }
}

const requestPosts = (postState, action) => {
  return {
    ...postState,
    isFetching: action.fetching
  }
}

const postReducer = createReducer(initialState, {
  'REQUEST_POSTS': requestPosts,
  'RECEIVE_POSTS': receivePosts
});

export default postReducer
