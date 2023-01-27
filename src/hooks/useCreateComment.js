import { useMutation, useQueryClient } from 'react-query';
import axios from '../axios';

const addComment = (comment) => {
  return axios.post('/comment/create', comment);
};

export default function useCreateComment() {
    const queryClient = useQueryClient();
    return useMutation(addComment, {
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        }
    });
}
