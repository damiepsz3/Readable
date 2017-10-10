import * as BlogAPI from '../utils/BlogAPI.js'


export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_COMMENTS = 'GET_COMMENTS'
export const SET_FETCHING_INFO = 'SET_FETCHING_INFO'

export const FetchingInfo = {
  FETCHING: true,
  FETCHED: false
}

export const receiveCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => dispatch => (
  BlogAPI
    .getCategories()
    .then(categories => dispatch(receiveCategories(categories)))

)

export const receiveComments = (comments) => {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export const fetchComments = () => dispatch => (
  BlogAPI
    .getCategories()
    .then(comments => dispatch(receiveComments(comments)))
)
