import React, { Fragment, useState } from 'react';
import {
  Button,
  Modal,
  Paper,
  Grid,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import { useForm } from 'react-hook-form';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddTask = ({ url }) => {
  // console.log('ADD TASK URL', url);
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userName = JSON.parse(localStorage.getItem('login'));
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    const postObj = {
      title: data.title,
      desc: data.desc,
    };

    const sendDataToAPI = await axios.post(url, postObj, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (sendDataToAPI.status === 200) {
      setOpen(false);
      history.push(`/user/${userName.userType}`);
    }
  };

  return (
    <>
      <Button
        variant='contained'
        color='secondary'
        onClick={handleOpen}
        style={{ marginTop: '10px' }}
      >
        Add Task
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Fragment>
          <Paper>
            <Box px={3} py={2}>
              <Typography variant='h6' align='center' margin='dense'>
                Add Task
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id='title'
                    name='title'
                    label='Title'
                    fullWidth
                    margin='dense'
                    {...register('title')}
                    error={errors.title ? true : false}
                  />
                  <Typography variant='inherit' color='textSecondary'>
                    {errors.title?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id='desc'
                    name='desc'
                    label='Description'
                    fullWidth
                    margin='dense'
                    {...register('desc')}
                    error={errors.desc ? true : false}
                  />
                  <Typography variant='inherit' color='textSecondary'>
                    {errors.desc?.message}
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={3}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Fragment>
      </Modal>
    </>
  );
};

export default AddTask;
