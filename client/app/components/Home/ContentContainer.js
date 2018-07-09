import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from '../../styles/ServiceAccount.css';

import 'whatwg-fetch';
// import css from './ContentContainer.css';

import Home from './Home';
// import ContentContainerRouter from '../../routes/ContentContainerRouter';
// import ProductList from './ProductList';



// export default class ContentContainer extends Component<{}> {
class ContentContainer extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};



	}



	render() {
		var container = {
			maxWidth: "480px",
			backgroundColor: "#fff",
			marginTop: "5%",
			marginBottom: "10%",
			padding: "20px",
		  	// border: "2px solid #000",
		  	borderRadius: "10px",
    		boxShadow: "0 4px 10px 4px rgba(19, 35, 47, 0.3)",
		};

		var cardStyle1 = {
			float: "left",
		  	// background: "#eee",
		  	padding: "10px",
		  	margin: "10px",
		  	height: "150px",
		  	width: "150px",
		  	borderRadius: "10px"
		};
		var cardStyle2 = {
			float: "right",
		  	// background: "#eee",
		  	padding: "10px",
		  	margin: "10px",
		  	height: "150px",
		  	width: "150px",
		  	borderRadius: "10px"
		};

		var icon = {
			fontSize: "2.5em",
			padding: "20px"
		};

		

    return (
      <div className="row">
	      <div className="col-md-6 col-xs-12 col-sm-8 col-lg-4 col-xl-4 col-sm-offset-2 col-md-offset-5 col-lg-offset-5 col-xl-offset-5" style={container}>     	
	      	<div>
		      	<button className="btn btn-default btn-lg btn-block btn-huge" style={cardStyle1}>
		      		<span className="glyphicon glyphicon-user" aria-hidden="true" style={icon}></span><br/>
		      		<span>MY PROFILE</span>
		      	</button>
	      	</div>
	      	<div>
		      	<button className="btn btn-default btn-lg btn-block btn-huge" style={cardStyle2}>
		      		<span className="glyphicon glyphicon-comment" aria-hidden="true" style={icon}></span><br/>
		      		<span>MESSAGES</span>
		      	</button>
	      	</div>
	      	<div>
	      		<Link to="/FindProduct">
		      	<button className="btn btn-default btn-lg btn-block btn-huge" style={cardStyle1}>
		      		<span className="glyphicon glyphicon-list-alt" aria-hidden="true" style={icon}></span><br/>
		      		<span>FIND SPARE</span><br/>
		      		<span>PARTS</span>
		      	</button>
		      	</Link>
	      	</div>
	      	<div>
	      		<Link to="/FindProduct2">
		      	<button className="btn btn-default btn-lg btn-block btn-huge" style={cardStyle2}>
		      		<span className="glyphicon glyphicon-usd" aria-hidden="true" style={icon}></span><br/>
		      		<span>BOOK</span><br/>
		      		<span>SERVICE</span>
		      	</button>
		      	</Link>
	      	</div>
	      	<div>
		      	<button className="btn btn-default btn-lg btn-block btn-huge" style={cardStyle1}>
		      		<span className="glyphicon glyphicon-stats" aria-hidden="true" style={icon}></span><br/>
		      		<span>CUSTOMER</span><br/>
		      		<span>SUPPORT</span>
		      	</button>
	      	</div>
	      	<div>
		      	<button className="btn btn-default btn-lg btn-block btn-huge" style={cardStyle2}>
		      		<span className="glyphicon glyphicon-globe" aria-hidden="true" style={icon}></span><br/>
		      		<span>DESKTOP</span><br/>
		      		<span>VERSION</span>
		      	</button>
	      	</div>
	      </div>
      </div>
    );
  }
}

export default ContentContainer;