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
import FindProduct from './components/Home/FindProduct';
import FindProduct2 from './components/Home/FindProduct2';
import BookService from './components/Home/BookService';




render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/FindProduct" component={FindProduct}/>  
        <Route exact path="/FindProduct2" component={FindProduct2}/>  
        <Route exact path="/BookService" component={BookService}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
