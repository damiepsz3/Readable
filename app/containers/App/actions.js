import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR
} from './constants'

export function loadCategories() {
  return {
    type: LOAD_CATEGORIES
  }
}

export function categoriesLoaded(categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories
  }
}

export function categoriesLoadingError(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    error
  }
}
