import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
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

export function loadPosts() {
  return {
    type: LOAD_POSTS
  }
}

export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts
  }
}

export function postsLoadingError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error
  }
}

export function loadComments() {
  return {
    type: LOAD_COMMENTS
  }
}

export function commentsLoaded(comments) {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    comments
  }
}

export function commentsLoadingError(err) {
  return {
    type: LOAD_COMMENTS_ERROR,
    error
  }
}
