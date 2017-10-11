import { createReducer, updateObject, updateItemInArray } from '../helper.js'
import { normalize, schema } from 'normalizr'

const commentSchema = new schema.Entity('comment')
const commentListSchema = new schema.Array(commentSchema)

const initialState = {
  isFetching: false,
  byId: {},
  allIds: []
}

const receiveComments = (state, action) => {
  const normalizedComment = normalize(action.comments, commentListSchema)
  return {
    ...state,
    isFetching: action.fetching,
    byId: {
      ...state.byId,
      ...normalizedComment.entities.comment
    },
    allIds: normalizedComment.result
  }
}

const requestComments = (state, action) => {
  return {
    ...state,
    isFetching: action.fetching
  }
}

const commentsReducer = createReducer(initialState, {
  'REQUEST_COMMENT': requestComments,
  'RECEIVE_COMMENT': receiveComments
});

export default commentsReducer
