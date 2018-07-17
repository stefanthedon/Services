import React, { Component } from 'react';
import 'whatwg-fetch';
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