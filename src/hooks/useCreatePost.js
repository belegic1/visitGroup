import { useMutation } from "react-query";
import axios from "../axios";

const addPost = (post) => {
    return axios.post('/post/create', post);
}

export default function useCreatePost(post) {
  return useMutation(addPost);
}