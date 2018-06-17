import { hot } from 'react-hot-loader';
import * as React from 'react';

import './styles/theme.sass';

import Home from './pages/Home';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="page-container">
        <Home />
      </div>
    );
  }
}
export default hot(module)(App);
