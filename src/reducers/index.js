import { combineReducers } from 'redux'
import {
  GET_CATEGORIES,
  GET_COMMENTS,
  SET_FETCHING_INFO,
  FetchingInfo
} from '../actions'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/posts'

const { FETCHING } = FetchingInfo

const blogApp = (state = FETCHING, action) => {
  switch(action.type) {
    case SET_FETCHING_INFO:
      return Object.assign({}, state, {
        fetchingInfo: action.fetching
      })
    default:
      return state
  }
}


const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const { categories } = action
      return [
        ...state,
        ...action.categories
      ]
    default:
      return state
  }
}

const posts = (
  state = {
    isFetching: false,
    items: []
  }, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }
    default:
      return state
  }
}

const comments = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      const { comments } = action
      return {
        ...comments
      }
    default:
      return state
  }
}

export default combineReducers({
  blogApp,
  categories,
  posts,
  // comments
});
