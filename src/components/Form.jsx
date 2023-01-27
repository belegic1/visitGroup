import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Button,
  Chip,
  TextField,
  Typography,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120px !important',
  },
}));

const Form = ({ post, handleChange, handleSubmit, tags, setTags }) => {
  const [tag, setTag] = useState('');

  const handleTagsChange = (e) => {
    e.preventDefault();

    if (tag) {
      setTags((oldValues) => [...oldValues, tag]);
      setTag('');
    }
  };
  const changeTag = (e) => {
    setTag(e.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            id="post"
            label="Post"
            multiline
            rows={4}
            variant="outlined"
            name="text"
            fullWidth
            value={post.text}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div
          style={{
            height: '150px',
            border: '1px solid rgba(255,255,255,0.5)',
          }}
        >
          <Typography>Tags..</Typography>
          {tags.map((tag, i) => (
            <Chip
              onClick={() => setTags(tags.filter((t) => t !== tag))}
              key={i}
              label={tag}
              sx={{ margin: '8px' }}
            />
          ))}
        </div>
        <Box display={'flex'} alignItems="center">
          <TextField
            value={tag}
            name="tag"
            onChange={changeTag}
            label="Add tag"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleTagsChange}
            type="button"
          >
            Add tag
          </Button>
        </Box>
        <div>
          <Button
            sx={{ marginTop: 3 }}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
      <div></div>
    </>
  );
};

export default Form;
