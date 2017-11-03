import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CATEGORIES } from 'containers/App/constants';
import { categoriesLoaded, categoriesLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getCategories() {
  // Select username from store
  const requestURL = `http://localhost:5001/categories`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(categoriesLoaded(response.categories))
  } catch (err) {
    yield put(categoriesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* categoriesData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_CATEGORIES, getCategories);
}
