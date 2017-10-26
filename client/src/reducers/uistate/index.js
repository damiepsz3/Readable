import { combineReducers } from 'redux'
import sortBy from './sortReducer'
import error from './errorReducer'
import modal from './modalReducer'

export default combineReducers({
  sortBy,
  error,
  modal
})
