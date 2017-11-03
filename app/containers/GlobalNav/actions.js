import {
  OPEN_CLOSE_DRAWER,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function openCloseDrawer() {
  return {
    type: OPEN_CLOSE_DRAWER,
  };
}
