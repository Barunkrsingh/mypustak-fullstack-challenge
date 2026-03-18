import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const getPosts = () => axios.get(`${API}/posts`);

export const createPost = (data: { title: string; body: string }) =>
  axios.post(`${API}/posts`, data);

export const deletePost = (id: number) =>
  axios.delete(`${API}/posts/${id}`);