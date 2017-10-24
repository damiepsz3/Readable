import { createReducer } from '../helper.js'
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

const receivePost = (state, action) => {
  const normalizedPost = normalize(action.post, postSchema)
  return {
    ...state,
    isFetching: action.fetching,
    byId: {
      ...state.byId,
      ...normalizedPost.entities.post
    },
    allIds: state.allIds.concat(normalizedPost.result)
  }
}

const requestPost = (state, action) => {
  return {
    ...state,
    isFetching: action.fetching
  }
}

const receiveComments = (state, action) => {
  const { parentId, comments } = action
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

const updateVote = (state, action) => {
  const { id, option } = action
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        voteScore: option === 'upVote' ? state.byId[id].voteScore + 1 : state.byId[id].voteScore - 1
      }
    }
  }
}

const deletePost = (state, action) => {
  const { id } = action
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        deleted: true
      }
    }
  }
}

const postReducer = createReducer(initialState, {
  'REQUEST_POSTS': requestPosts,
  'RECEIVE_POSTS': receivePosts,
  'RECEIVE_COMMENT': receiveComments,
  'POST_VOTE': updateVote,
  'REQUEST_POST': requestPost,
  'RECEIVE_POST': receivePost,
  'DELETE_POST': deletePost
});

export default postReducer
