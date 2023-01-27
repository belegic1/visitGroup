import axios from '../axios';
import { useQuery } from 'react-query';

export default function useComments(commentId) {
  return useQuery('comments', () =>
    axios.get(`/post/${commentId}/comment`).then((res) => res.data)
  );
}
