import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ManageMainBoard from './managedrink/managemainboard';

export default class extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
          <Route path="/" component={ManageMainBoard} />
      </Router>
    )
  }
}
