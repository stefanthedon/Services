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
import ProductList from './components/Home/ProductList';
import BookService from './components/Home/BookService';




render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ProductList" component={ProductList}/>
        <Route exact path="/BookService" component={BookService}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
