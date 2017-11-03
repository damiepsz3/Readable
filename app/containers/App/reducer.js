import { fromJS } from 'immutable'

import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  error: false,
  categories: false,
  posts: false,
  comments: false
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return state
        .set('loading', true)
    case LOAD_CATEGORIES_SUCCESS:
      return state
        .setIn(['categories'], action.categories)
        .set('loading', false)
    case LOAD_CATEGORIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case LOAD_POSTS:
      return state
        .set('loading', true)
    case LOAD_POSTS_SUCCESS:
      return state
        .setIn(['posts'], action.posts)
        .set('loading', false)
    case LOAD_POSTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case LOAD_COMMENTS:
      return state
        .set('loading', true)
    case LOAD_COMMENTS_SUCCESS:
      return state
        .setIn(['comments'], [...action.comments, ...state.getIn(['comments'])])
        .set('loading', false)
    case LOAD_COMMENTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default appReducer;
