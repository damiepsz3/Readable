import * as BlogAPI from '../utils/BlogAPI.js'
import { createShouldFetch } from './helper.js'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES,
    fetching: true
  }
}

const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    fetching: false,
    categories
  }
}

const fetchCategories = () => {
  return dispatch => {
    dispatch(requestCategories())
    return BlogAPI.getCategories()
      .then(resp => dispatch(receiveCategories(resp)))
  }
}

const shouldFetchCategories = createShouldFetch('entities', 'categories')


export const fetchCategoriesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchCategories(getState())) {
    return dispatch(fetchCategories())
  }
}
