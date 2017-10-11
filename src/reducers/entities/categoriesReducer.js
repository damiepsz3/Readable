  import { createReducer, updateObject, updateItemInArray } from '../helper.js'


const initialState = {
  isFetching: false,
  items: []
}

const receiveCategories = (postState, action) => {
  console.log(action)
  return {
    ...postState,
    isFetching: action.fetching, //review
    items: [
      ...action.categories
    ]
  }
}

const requestCategories = (postState, action) => {
  return {
    ...postState,
    isFetching: action.fetching
  }
}

const categoriesReducer = createReducer(initialState, {
  'RECEIVE_CATEGORIES': receiveCategories,
  'REQUEST_CATEGORIES': requestCategories
});

export default categoriesReducer
