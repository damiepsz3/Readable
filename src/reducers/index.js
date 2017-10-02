import { combineReducers } from 'redux'
import {
  GET_POSTS,
  GET_CATEGORIES,
  GET_COMMENTS
} from '../actions'

const categories = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const { categories } = action
      return {
        ...categories
      }
    default:
      return state

  }
}

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
    const { posts } = action
      return {
        ...posts
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
  categories,
  posts,
  comments
});
