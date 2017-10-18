import { createReducer } from '../helper.js'

const initialState = {
  options: [
    { value: 'DATE_LH', label: 'Date: Low to High' },
    { value: 'DATE_HL', label: 'Date: High to Low' },
    { value: 'SCORE_LH', label: 'Score: Low to High'},
    { value: 'SCORE_LH', label: 'Score: High to Low'}
  ],
  selected: 'NO_SORT'
}

const selectSort = (action, state) => {
  return {
    ...state,
    select: action.value
  }
}

const sortReducer = createReducer(initialState, {
    'SELECT_SORT': selectSort
})

export default sortReducer
