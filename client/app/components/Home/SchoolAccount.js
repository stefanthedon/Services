import React, { Component } from 'react';
import 'whatwg-fetch';

import Home from './Home';
import Header from './Header';
import ContentContainer from './ContentContainer';

class SchoolAccount extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};


	}

	render () {

		return (
			<div>
				<ContentContainer/>
			</div>
		);
	}
}

export default SchoolAccount;