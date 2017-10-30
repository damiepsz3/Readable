import { combineReducers } from 'redux'
import entities from './entities'
import uiState from './uistate'
import forms from './forms'

export default combineReducers({
  entities,
  uiState,
  forms
})
