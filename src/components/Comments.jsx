import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {TextField, Button, List, ListItem, ListItemAvatar, Avatar, Typography, CircularProgress }from '@mui/material';
import useComments from '../hooks/useComments';
import axios from '../axios';
import useCreateComment from '../hooks/useCreateComment';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    width: '100%',
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
}));

function Comments({postId}) {
    const classes = useStyles();
    const {isLoading, error, data} = useComments(postId)
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
    const ownerId = '60d0fe4f5311236168a109ca';
    const {mutate} = useCreateComment()

  const handleSubmit = (event) => {
    event.preventDefault();
      mutate({ message: comment, owner: ownerId, post: postId });
    };
    

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Username"
        className={classes.textField}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
          <TextField
              required
        label="Comment"
        multiline
        rows={4}
        className={classes.textField}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
          </Button>
          
          {isLoading ? <CircularProgress /> : error ? <div>Error</div> :
              
              <List className={classes.list}>
        {data?.data?.map((comment) => (
          <ListItem className={classes.listItem} key={comment.id}>
            <ListItemAvatar>
              <Avatar src={comment.owner.picture} />
            </ListItemAvatar>
            <Typography>
              {comment.owner.firstName} / {comment.publishDate.split("T")[0]}
              <br />
              {comment.message}
            </Typography>
          </ListItem>
        ))}
      </List>}
    </form>
  );
}

export default Comments;
