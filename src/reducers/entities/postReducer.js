import { createReducer, updateObject, updateItemInArray } from '../helper.js'
import { normalize, schema } from 'normalizr'

const postSchema = new schema.Entity('post')
const postListSchema = new schema.Array(postSchema)

const initialState = {
  isFetching: false,
  byId: {},
  allIds: []
}

const receivePosts = (state, action) => {
  const normalizedPosts = normalize(action.posts, postListSchema)
  return {
    ...state,
    isFetching: action.fetching,
    byId: normalizedPosts.entities.post,
    allIds: normalizedPosts.result
  }
}

const requestPosts = (state, action) => {
  return {
    ...state,
    isFetching: action.fetching
  }
}

const receiveComments = (state, action) => {
  const parentId = action.parentId
  const comments = action.comments
  return {
    ...state,
    byId: {
     ...state.byId,
     [parentId]: {
       ...state.byId[parentId],
       'comments': comments.map(com => com.id)
     },
   }
  }
}

const postReducer = createReducer(initialState, {
  'REQUEST_POSTS': requestPosts,
  'RECEIVE_POSTS': receivePosts,
  'RECEIVE_COMMENT': receiveComments,
});

export default postReducer
