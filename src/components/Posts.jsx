import { CircularProgress, Grid } from '@mui/material';
import React from 'react'
import usePosts from '../hooks/usePosts';
import PostCard from './Card';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Posts = () => {
    const { isLoading, error, data } = usePosts();
    
    console.log({data})

    return (
        isLoading ? <CircularProgress /> :
            error? <div>error</div>:
    <Grid container spacing={4}>
      {data.data.map((post) => (
        <PostCard key={post.id} { ...post} />
      ))}
    </Grid>
  );
}

export default Posts