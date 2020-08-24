import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container';
import UserShowContainer from './user_show/user_show_container';
import UsersIndexContainer from './user_show/users_index_container';
import NavBarContainer from './navbar/navbar_container';
// import PostsIndexContainer from 

export default () => (
  <div>

    <Switch> 

    {/* Auth route for login */}

    {/* Everything else protected */}
      {/* / should be auth route maybe??? */}

      <AuthRoute exact path='/login' component={LoginContainer} />
      {/* <Route path='/signup' component={SignupContainer} /> */}
      <ProtectedRoute exact path='/users' component={UsersIndexContainer} />
      <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
      {/* <ProtectedRoute exact path='/posts' component={PostsIndexContainer} /> */}
      {/* <ProtectedRoute exact path='/posts/:postId' component={UserShowContainer} /> */}


      {/* Need to redirect to /users if the id is invalid */}
      
      {/* Catch all */}
      <Redirect to="/users" />
    </Switch>
  </div>
)
