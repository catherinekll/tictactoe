
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './navbar';
import Home from './home/Home';
import Games from './games/Games';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);