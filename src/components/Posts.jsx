import { CircularProgress, Grid } from '@mui/material';
import React from 'react'
import usePosts from '../hooks/usePosts';
import PostCard from './Card';

const Posts = () => {
    const { isLoading, error, data } = usePosts();
    

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