import { combineReducers } from 'redux'
import { postReducer } from './postReducer.js'
import {
  GET_CATEGORIES,
  GET_COMMENTS,
  SET_FETCHING_INFO,
} from '../actions'




const initialState = {
  appState: {
    visibility: {},
    isFetching: false
  },
  domainData: {
    posts:[],
    categories: [],
    comments: []
  }
}

export default combineReducers({
  post: postReducer
})

//
//
//
//
//
//
//
//
//
//
//
// const blogApp = (state = initialState, action) => {
//   switch(action.type) {
//     case SET_FETCHING_INFO:
//       return Object.assign({}, state, {
//         fetchingInfo: action.fetching
//       })
//     default:
//       return state
//   }
// }
//
//
// const categories = (state = [], action) => {
//   switch (action.type) {
//     case GET_CATEGORIES:
//       const { categories } = action
//       return [
//         ...state,
//         ...action.categories
//       ]
//     default:
//       return state
//   }
// }
//
// const posts = (state = {}, action) => {
//   switch (action.type) {
//     case REQUEST_POSTS:
//       return {
//         ...state,
//       }
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         isFetching: false,
//         items: action.posts
//       }
//     default:
//       return state
//   }
// }
//
// const comments = (state = {}, action) => {
//   switch (action.type) {
//     case GET_COMMENTS:
//       const { comments } = action
//       return {
//         ...comments
//       }
//     default:
//       return state
//   }
// }
//
// export default combineReducers({
//   blogApp,
//   categories,
//   posts,
//   // comments
// });
