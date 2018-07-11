import React from 'react';
import { render } from 'react-dom';

import './styles/styles.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import FindSpare from './components/Home/FindSpare';
import Service from './components/Home/Service';
import Rental from './components/Home/Rental';
import BookService from './components/Home/BookService';




render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/FindSpare" component={FindSpare}/>  
        <Route exact path="/Service" component={Service}/>  
        <Route exact path="/Rental" component={Rental}/>  
        <Route exact path="/BookService" component={BookService}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
