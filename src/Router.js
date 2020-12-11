import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Search from './components/Search'
import Signup from './components/SignUp'
import {connect} from 'react-redux'

const checkAuth = () => {
    const token = localStorage.getItem('token');
  return token;
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          checkAuth() ? <Component {...props} /> : <Redirect to="/Login" />
        }
      />
    );
  };

const Router = (props) => {
    return (
        <div>
        {props.loggedIn}
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/SignUp" component={Signup} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Search" component={Search} />
            <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
        </Switch>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('state :', state);
    return {
      loggedIn: state.loggedIn,
    };
  };
  export default connect(mapStateToProps, null)(Router);