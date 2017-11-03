import { fromJS } from 'immutable'

import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
} from './constants'

function homeReducer(state = fromJS({}), action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return state
        .set('categories', action.categories)
      break;
    default:

  }
}

export default homeReducer
