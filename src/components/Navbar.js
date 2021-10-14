import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Link to='/login'>
            <Button
              color='inherit'
              style={{ textAlign: 'center', marginBottom: '10px' }}
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
