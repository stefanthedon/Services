import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import css from '../../styles/MyAccount.css';


class MyAccount extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};

    	
	}


	render() {

    return (
      <div className="row">
		<nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <Link to="/">
              <ul className="nav navbar-nav navbar-left">
                  <li><span className="glyphicon glyphicon-home">HOME</span></li>  
              </ul>
            </Link>
            <div className="navbar-header">
              <div className="navbar-brand navbar-brand-centered">ACHELIS KENYA LTD</div>
            </div>
          </div>
        </nav>
	      <div className="account container">
			<div className="account-avatar">
				<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
			</div>
			<div className="account-details">
				<h2>Account Details</h2>
				<hr/>
				<span>Name:</span>
				<hr/>
				<span>Email:</span>
				<hr/>
				<span>Telephone:</span>
				<hr/>
				
			</div>
	      </div>
      </div>
    );
  }
}

export default MyAccount;