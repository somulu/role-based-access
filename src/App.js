import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Admindashboard from './components/Admindashboard';
import UserRam from './components/UserRam';
import UserShayam from './components/UserShayam';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/user/ram' component={UserRam} />
                <Route exact path='/user/shayam' component={UserShayam} />
                <Route
                  exact
                  path='/admin/dashboard'
                  component={Admindashboard}
                />
              </Switch>
            </Router>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
