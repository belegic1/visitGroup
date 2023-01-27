import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { CircularProgress,
} from '@mui/material';
import useSinglePost from '../hooks/useSinglePost';
import { useParams } from 'react-router-dom';
import Form from './Form';
import useCreatePost from '../hooks/useCreatePost';
import { useNavigate } from 'react-router-dom';
import useUpdatePost from '../hooks/useUpdatePost';


export default function EditForm() {
   const image =  'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
    const { id } = useParams();
    const { isLoading, error, data } = useSinglePost(id)
    const navigate = useNavigate()
    const {mutate,isError, error: editError,  isSuccess} = useUpdatePost()
  const [post, setPost] = React.useState({
    text: data?.text || '',
  });
     const [tags, setTags] = React.useState(data?.tags ||[]);

  const handleChange = (key, value) => {
    setPost((prevValues) => ({ ...prevValues, [key]: value }));
    };

    
    const onSubmit = (e) => {
       e.preventDefault();
        const newData = {
          text: post.text,
          image: post.image || image,
          owner: data.owner.id,
        };
         mutate(id,newData);
    };
    

  useEffect(() => {
      if (isSuccess) {
        navigate(`/${id}`)
    }
  }, [isSuccess]);
  

    return isLoading ? (
      <CircularProgress />
    ) : error ? (
      <div>Error</div>
    ) : (
                <Form handleChange={handleChange} tags={tags}
                    setTags={setTags}
                    post={post} handleSubmit={onSubmit} />
    );
}
