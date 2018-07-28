import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from '../../styles/ContentContainer.css';

import 'whatwg-fetch';


class ContentContainer extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};



	}
	


	render() {
	const token = this.props;
	console.log(this.props);
    return (
      <div className="row">
	      <div className="content-container">    	
	      	<div>
	      		<Link to="/MyAccount">
		      	<button className="btn btn-default btn-lg btn-block btn-huge">
		      		<span className="glyphicon glyphicon-user" aria-hidden="true"></span><br/>
		      		<span className="name">MY PROFILE</span>
		      	</button>
		      	</Link>
	      	</div>
	      	<div>
	      		<Link to="/Messages">
		      	<button className="btn btn-default btn-lg btn-block btn-huge">
		      		<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span><br/>
		      		<span className="name">MESSAGES</span>
		      	</button>
		      	</Link>
	      	</div>
	      	<div>
	      		<Link to="/FindSpare">
		      	<button className="btn btn-default btn-lg btn-block btn-huge">
		      		<span className="glyphicon glyphicon-cog" aria-hidden="true"></span><br/>
		      		<span className="name">BUY SPARE</span><br/>
		      		<span className="name">PARTS</span>
		      	</button>
		      	</Link>
	      	</div>
	      	<div>
	      		<Link to="/Service">
		      	<button className="btn btn-default btn-lg btn-block btn-huge">
		      		<span className="glyphicon glyphicon-heart" aria-hidden="true"></span><br/>
		      		<span className="name">BOOK</span><br/>
		      		<span className="name">SERVICE</span>
		      	</button>
		      	</Link>
	      	</div>
	      	<div>
	      		<Link to="/Rental">
		      	<button className="btn btn-default btn-lg btn-block btn-huge">
		      		<span className="glyphicon glyphicon-usd" aria-hidden="true"></span><br/>
		      		<span className="name">LEASING</span><br/>
		      		<span className="name">&amp; RENTAL</span>
		      	</button>
		      	</Link>
	      	</div>
	      	<div>
		      	<button className="btn btn-default btn-lg btn-block btn-huge">
		      		<span className="glyphicon glyphicon-headphones" aria-hidden="true"></span><br/>
		      		<span className="name">CUSTOMER</span><br/>
		      		<span className="name">SUPPORT</span>
		      	</button>
	      	</div>
	      </div>
      </div>
    );
  }
}

export default ContentContainer;