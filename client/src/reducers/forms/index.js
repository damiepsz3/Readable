import { combineReducers } from 'redux'
import comment from './formComment.js'
import post from './formPost.js'


export default combineReducers({
  post,
  comment
})
