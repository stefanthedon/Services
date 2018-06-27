import React, { Component } from 'react';
import 'whatwg-fetch';

import Home from './Home';

class Header extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};

    	

	}

	render () {
		return (
			<div>
				<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="">School Name</a>
				    </div>
				    <ul className="nav navbar-nav navbar-right">
				      <li><a href=""><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
				    </ul>
				  </div>
				</nav>
			</div>
		);
	}
}

export default Header;