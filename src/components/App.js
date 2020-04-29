import React, { Component } from 'react';
import Router from './Router';

import { catchErrorsWithScope } from 'utils/sentryDSN';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    catchErrorsWithScope(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>We're sorry — something went wrong.</p>
          <p>Our team has been notified.</p>
        </div>
      );
    }
    return <Router />;
  }
}

export default App;
