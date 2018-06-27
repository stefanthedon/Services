import React, { Component } from 'react';
import 'whatwg-fetch';

import Home from './Home';

// export default class ImageOverlay extends Component<{}> {

class TileOverlay extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};


	}

	render() {
    
    let icon = this.props.icon ?
    <Text style={styles.overlayIcon}>{this.props.icon}</Text>
    : null;

    let paragraph = this.props.paragraph ?
    <Text style={styles.overlayParagraph}>{this.props.paragraph}</Text>
    : null;

    return (
        <View>
            {icon}
            {paragraph}
        </View>
    );
  }
}

export default TileOverlay;