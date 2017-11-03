import { call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { LOAD_POSTS, LOAD_COMMENTS } from 'containers/App/constants';
import { postsLoaded, postsLoadingError, commentsLoaded, commentsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectPosts } from 'containers/App/selectors'

export function* getPosts() {

  const requestURL = `http://localhost:5001/posts`;
  try {
    const response = yield call(request, requestURL)
    yield put(postsLoaded(response))
  } catch (err) {
    yield put(postsLoadingError(err))
  }
}

export function* getComments() {
  let posts = yield select(makeSelectPosts())
  for(let post of posts) {
    const requestURL = `http://localhost:5001/posts/${post.id}/comments`
    try {
      const response = yield call(request, requestURL)
      yield put(commentsLoaded(response))
    } catch (err) {
      yield put(commentsLoadingError(err))
    }
  }
}


export default function* postsData() {
  yield call(getPosts)
  yield fork(getComments)
}
