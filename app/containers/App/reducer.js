import { fromJS } from 'immutable'

import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
  OPEN_CLOSE_DRAWER
} from './constants'

const initialState = fromJS({
  loading: false,
  error: false,
  categories: false,
  drawerIsOpen: false
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return state
        .set('loading', true)
    case LOAD_CATEGORIES_SUCCESS:
      return state
        .setIn(['categories'], action.categories)
        .set('loading', false)
    case LOAD_CATEGORIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case OPEN_CLOSE_DRAWER:
      return state
        .set('drawerIsOpen', !state.get('drawerIsOpen'))
    default:
      return state
  }
}

export default appReducer;
