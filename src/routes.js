import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

export default function(ensureAuthenticated) {
  return(
    <Route>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />

      <Route path="/" component={App} onEnter={ensureAuthenticated}>
        <IndexRedirect to="index" />

        <Route path="index" component={Index} />
      </Route>
    </Route>
  );
}
