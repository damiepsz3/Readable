import { createReducer, updateObject, updateItemInArray } from './helper'


const addPosts = (postsState, action) => {
  console.log('test')
  const newPosts = postsState.concat({
    ...action.posts
  })
}

export const postReducer = createReducer([], {
  'REQUEST_POSTS': addPosts,
  'RECEIVE_POSTS': addPosts
})
