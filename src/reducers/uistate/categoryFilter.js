import { createReducer } from '../helper.js'

const initialState = {
  name: 'SHOW_ALL',
  path: ' '
}

const changeCategory = (state, action) => {
  const { name, path } = action;
  return {
    ...state,
    name,
    path
  }
}

const categoryFilter = createReducer(initialState, {
  'CHANGE_CATEGORY': changeCategory
})

export default categoryFilter
