import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';

import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import NotFound from '../containers/Login';

import { isEmpty } from '../helpers/utils';

const Routes = props => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/auth" />} />
    <Route exact path="/auth" component={Login} />
    <ProtectedRoute
      exact
      path="/dashboard"
      component={Dashboard}
      isAllowed={props.user}
    />
    <Route component={NotFound} />
  </Switch>
);

const ProtectedRoute = ({ isAllowed, ...props }) =>
  !isEmpty(isAllowed) ? <Route {...props} /> : <Redirect to="/auth" />;

export default withRouter(
  compose(
    connect(
      store => ({
        user: store.UserReducer.user,
      }),
      {
        ...actions,
      }
    )
  )(Routes)
);
