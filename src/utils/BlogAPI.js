import { normalize, schema } from 'normalizr'

const postSchema = new schema.Entity('post');
const commentSchema = new schema.Entity('comment')
const categorySchema = new schema.Entity('category')

const api = "http://localhost:5001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

//categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories.map(cat => normalize(cat, categorySchema)))

export const getCatPost = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

//posts
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const post = (title, body, author, category) => {
  const id = 1
  fetch(`${api}/posts`, {
    method: 'POST',
    headers:{
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, title, body, author, category })
  }).then(res => res.json())
}

export const postDetail = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
  .then(res => res.json())

export const postVote = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers:{
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const postEdit = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers:{
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json())

export const postDelete = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: { ...headers }
  })

export const postComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
  .then(res => res.json())

//comments
export const comment = (body, author, parentId) =>
  // add id as UUID and get timestamp
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body, author, parentId })
  }).then(res => res.json())

export const comDetail = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
  .then(res => res.json())

export const comVote = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const comEdit = (id, timestamp, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  }).then(res => res.json())

export const comDelete = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: { ...headers }
  }).then(res => res.json())
