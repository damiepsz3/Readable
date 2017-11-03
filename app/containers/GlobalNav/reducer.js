import { fromJS } from 'immutable';

import {
  OPEN_CLOSE_DRAWER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  drawerToggle: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CLOSE_DRAWER:
      return state
        .set('drawerToggle', !state.get('drawerToggle'));
    default:
      return state;
  }
}

export default globalReducer;
