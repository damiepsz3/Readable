import { createReducer } from '../helper.js'
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

const commentVote = (state, action) => {
  const { option, id } = action
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

const deleteComment = (state, action) => {
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

const commentsReducer = createReducer(initialState, {
  'REQUEST_COMMENT': requestComments,
  'RECEIVE_COMMENT': receiveComments,
  'COMMENT_VOTE': commentVote,
  'DELETE_COMMENT': deleteComment
});

export default commentsReducer
