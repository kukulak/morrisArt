import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ColectionPage from './pages/collectionpage/collectionpage.component';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/lukayotl' component={ColectionPage} />
      </Switch>
    </div>
  );
}

export default App;
