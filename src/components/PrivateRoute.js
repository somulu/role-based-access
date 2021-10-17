import { Route, Redirect } from 'react-router-dom';
const ProtectedRoute = ({ token, component: Component, ...rest }) => {
  //   console.log('Private Route', rest, token, Component);
  //   const userToken = JSON.parse(localStorage.getItem('login'));
  return (
    <Route
      {...rest}
      render={
        (props) =>
          token ? <Component {...props} /> : <Redirect to={{ pathName: '/' }} />
        // token ? console.log('Props', props) : ''
      }
    />
  );
};
export default ProtectedRoute;
