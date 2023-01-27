import axios from '../axios';
import { useQuery } from 'react-query';

// const fetchPost = (postId) => axios.get(`/post/${postId}`).then((res) => res.data)

export default function useSinglePost(postId) {
  return useQuery(['posts', postId], () =>
    axios.get(`/post/${postId}`).then((res) => res.data)
  );
}
