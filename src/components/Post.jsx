import React from 'react';
import { Card, CardMedia,  Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Content from './CardContent';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

export default function MediaCard({
  text,
  owner,
  id,
  image,
  publishDate,
  tags,
}) {
  const { firstName, lastName, title } = owner;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title="image" />
      <Content
        firstName={firstName}
        lastName={lastName}
        text={text}
        publishDate={publishDate}
        tags={tags}
        title={title}
      />
      <Button component={Link} to={`/${id}/edit`} variant='contained'>Edit this post</Button>
    </Card>
  );
}
