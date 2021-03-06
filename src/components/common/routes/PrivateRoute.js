import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import { withAuthState } from 'components/hoc/auth';

/**
 * Component to authenticate routes.
 */
class PrivateRoute extends Component {
  render() {
    let { isLoggedIn } = this.props;

    return isLoggedIn ? <Route {...this.props} /> : <Redirect to={routes.LOGIN} />;
  }
}

export default withAuthState(PrivateRoute);
