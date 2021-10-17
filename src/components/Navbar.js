import React from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const userName = JSON.parse(localStorage.getItem('login'));
  console.log('Null Check', userName);
  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Techify</Typography>

          {userName === null ? (
            <Link to='/'>
              <Button
                color='inherit'
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  textDecoration: 'inherit',
                }}
              >
                Login
              </Button>
            </Link>
          ) : (
            <span style={{ float: 'right', marginLeft: '10px' }}>
              {userName.userType.charAt(0).toUpperCase() +
                userName.userType.slice(1)}
            </span>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
