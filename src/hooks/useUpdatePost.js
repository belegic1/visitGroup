import { useMutation } from 'react-query';
import axios from '../axios';

const addPost = (id, post) => {
  return axios.put(`/post/${id}`, post);
};

export default function useUpdatePost(id, post) {
  return useMutation(addPost);
}
