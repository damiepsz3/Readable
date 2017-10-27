import { createReducer } from '../helper.js'

const initialState = {
  isOpen: false
}

const isOpenSwitch = (state, action) => {
  const { open } = action
  return {
    ...state,
    isOpen: open
  }
}



const modalReducer = createReducer(initialState, {
    'MODAL_SWITCH': isOpenSwitch,
    'POST_SUCCESS': isOpenSwitch
})

export default modalReducer
