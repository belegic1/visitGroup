import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Form from './Form';
import useCreatePost from '../hooks/useCreatePost';
import useUsers from '../hooks/useUser';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
export default function CreateForm() {
  const image = 'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  const [post, setPost] = useState({
    text: '',
  });
  const [tags, setTags] = useState([]);
  const { isError, isSuccess, mutate, error } = useCreatePost();
  const navigate = useNavigate()

  const handleChange = (key, value) => {
    setPost((prevValues) => ({ ...prevValues, [key]: value }));
  };

  const ownerId = '60d0fe4f5311236168a109ca';

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({
      text: post.text,
      image: post.image || image,
      likes: 0,
      tags: tags,
      owner: ownerId,
    });
  };
  if (isError) {
    alert(error.message)
  }
  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    }
  }, [isSuccess])

  return (
    <Form
      post={post}
      tags={tags}
      setTags={setTags}
      handleChange={handleChange}
      handleSubmit={onSubmit}
    />
  );
}
