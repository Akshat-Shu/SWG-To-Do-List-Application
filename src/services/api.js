import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default API;
export const fetchTasks = () => API.get('/tasks');
export const createTask = (taskData) => API.post('/tasks', taskData);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);