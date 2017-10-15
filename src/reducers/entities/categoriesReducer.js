import { createReducer } from '../helper.js'
import { normalize, schema } from 'normalizr'

const categoriesSchema = new schema.Entity('categories', {}, {idAttribute: 'name'})
const categoriesListSchema = new schema.Array(categoriesSchema)

const initialState = {
  isFetching: false,
  byId: {
    showAll: {
      name:'show all',
      path: null
    }
  },
  allIds: []
}

const receiveCategories = (state, action) => {
  const normalizedCategories = normalize(action.categories, categoriesListSchema)
  return {
    ...state,
    isFetching: action.fetching,
    byId: {...state.byId, ...normalizedCategories.entities.categories},
    allIds: normalizedCategories.result
  }
}

const requestCategories = (state, action) => {
  return {
    ...state,
    isFetching: action.fetching
  }
}

const categoriesReducer = createReducer(initialState, {
  'RECEIVE_CATEGORIES': receiveCategories,
  'REQUEST_CATEGORIES': requestCategories
});

export default categoriesReducer
