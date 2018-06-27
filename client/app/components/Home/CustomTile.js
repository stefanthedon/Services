import React, { Component } from 'react';
import 'whatwg-fetch';

import TileOverlay from './TileOverlay';

// export default class CustomTile extends Component<{}> {
class CustomTile extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};


	}

	render() {
	    return (
	        <View>
	            <ImageOverlay
	                icon={this.props.icon}
	                paragraph={this.props.paragraph}
	            />
	        </View>
	    );
  }

}

export default CustomTile;