import React from 'react'
import useSinglePost from '../hooks/useSinglePost'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import Post from "./Post"
import Comments from './Comments'

const PostDetail = () => {
    const {id} = useParams()
    const post = useSinglePost(id)
  return (
    <Box width="100%">
      {post.isLoading ? (
        <CircularProgress />
      ) : post.error ? (
        <div>Error</div>
      ) : (
        <>
          <Post {...post.data} />
          <Comments postId={id} />
        </>
      )}
    </Box>
  );
}

export default PostDetail




