import axios from '../axios';
import { useQuery } from 'react-query';


export default function useSinglePost(postId) {
  return useQuery(['posts', postId], () =>
    axios.get(`/post/${postId}`).then((res) => res.data)
  );
}
