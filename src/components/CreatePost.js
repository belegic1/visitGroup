import React from 'react';
import { makeStyles } from '@mui/styles';
import {TextField, Select, MenuItem, FormControl, InputLabel }from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CreateForm() {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
        />
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="post"
          label="Post"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={gender}
            onChange={handleChange}
            label="Gender"
          >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
            <MenuItem value={'other'}>Other</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
