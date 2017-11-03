import { createReducer } from '../helper.js'

const initialState = {
  message: null
}

const errorFound = (state, action) => {
  const { message } = action
  console.log(message)
  return {
    ...state,
    message
  }
}



const errorReducer = createReducer(initialState, {
    'ERROR_FOUND': errorFound
})

export default errorReducer
