import { createReducer } from '../helper.js'

const initialState = {
  body: '',
  author: '',
  id: '',
  timestamp: '',
  parentId: '',
  deleted: false
}

const formComment = createReducer(initialState, {

});

export default formComment
