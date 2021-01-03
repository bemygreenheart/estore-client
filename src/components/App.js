import React from 'react';
import {Router, Route} from 'react-router-dom';

import history from '../history';
import "../styles/App.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

class App extends React.Component{

  render(){
    return (
      <div className="main">
        <Router history = {history}>
          <Route path="/" exact component={AboutPage}></Route>
          {/* <Route path="/items/:id" component={List}></Route>
          <Route path="/items/" component={List}></Route>
          <Route path="/auth/login"></Route>
          <Route path="/auth/logout"></Route> */}
        </Router>
      </div>
    );
  }
}

export default App;