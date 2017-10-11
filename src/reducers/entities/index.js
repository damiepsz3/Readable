import { combineReducers } from 'redux'
import postReducer from './postReducer.js'
import categoriesReducer from './categoriesReducer.js'


export default combineReducers({
  posts: postReducer,
  categories: categoriesReducer
})
