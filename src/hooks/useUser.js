import axios from '../axios';
import { useQuery } from 'react-query';

export default function useUsers() {
  return useQuery('users', () => axios.get('/user').then((res) => res.data));
}
