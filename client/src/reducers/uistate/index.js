import { combineReducers } from 'redux'
import sortBy from './sortReducer'
import error from './errorReducer'

export default combineReducers({
  sortBy,
  error
})
