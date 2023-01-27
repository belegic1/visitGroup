import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {  Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Content from './CardContent';


export default function PostCard({ id, image, owner, publishDate, tags, text }) {
  const {firstName,lastName, title} = owner
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        component={Link}
        to={`/${id}`}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={image}
          alt="random"
        />
        <Content
          firstName={firstName}
          lastName={lastName}
          text={text}
          publishDate={publishDate}
          tags={tags}
          title={title}
        />
      </Card>
    </Grid>
  );
}
