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
import ProtectedRoute from './components/PrivateRoute';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const userToken = JSON.parse(localStorage.getItem('login'));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Login} />
                <ProtectedRoute
                  path='/user/ram'
                  component={UserRam}
                  token={userToken !== null && userToken.token}
                />
                {/* <Route exact path='/user/ram' component={UserRam} /> */}
                <ProtectedRoute
                  path='/user/shyam'
                  component={UserShayam}
                  token={userToken !== null && userToken.token}
                />
                {/* <Route exact path='/user/shyam' component={UserShayam} /> */}
                {/* <Route
                  exact
                  path='/admin/dashboard'
                  component={Admindashboard}
                /> */}
                <ProtectedRoute
                  exact
                  path='/admin/dashboard'
                  component={Admindashboard}
                  token={userToken !== null && userToken.token}
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
