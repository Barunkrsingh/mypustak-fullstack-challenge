import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getPosts = () => axios.get(`${API}/posts`);

export const createPost = (data: { title: string; body: string }) =>
  axios.post(`${API}/posts`, data);

export const deletePost = (id: number) =>
  axios.delete(`${API}/posts/${id}`);