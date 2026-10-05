import axios from 'axios'

const API_URL = 'https://todo-management-api-0sl7.onrender.com/todos'

export const getTodos = () => {
  return axios.get(API_URL)
}

export const getTodo = (id) => {
  return axios.get(`${API_URL}/${id}`)
}

export const addTodo = (todo) => {
  return axios.post(API_URL, todo)
}

export const updateTodo = (id, todo) => {
  return axios.put(`${API_URL}/${id}`, todo)
}

export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}