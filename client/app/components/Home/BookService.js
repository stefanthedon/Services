import React, { Component } from 'react';
import 'whatwg-fetch';
// import css from './ContentContainer.css';

import Home from './Home';



// export default class ContentContainer extends Component<{}> {
class ContentContainer extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
      
    	};

    	
	}

	


	render() {
		
    return (
      <div>
	      <div className="row">
	      	<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-sm-offset-2 col-md-offset-2 col-lg-offset-4 col-xl-offset-4">
	      		<div className="form-group text-center">
	      			<h4>Please Select your Brand below</h4>
	      			<select className="selectpicker form-control" title="Select Brand...">
					  <optgroup label="CONSTRUCTION">
					    <option>Case</option>
					    <option>New Holland</option>
					    <option>Bomag</option>
					    <option>Fiori</option>
					    <option>Triman</option>
					  </optgroup>
					  <optgroup label="MATERIAL HANDLING">
					    <option>Hyster</option>
					    <option>Utilev</option>
					    <option>Manitou</option>
					    <option>Zoomlion</option>
					    <option>Zeigler</option>
					  </optgroup>
					  <optgroup label="POWER SYSTEMS">
					    <option>Pramac</option>
					  </optgroup>
					  <optgroup label="TECHNICAL EQUIPMENT">
					    <option>GH Cranes & Components</option>
					    <option>Deutz Engine</option>
					    <option>Fayat-Mathieu</option>
					    <option>Link-Misr</option>
					  </optgroup>
					  <optgroup label="AGRICULTURAL EQUIPMENT">
					    <option>Deutz Fahr</option>
					    <option>Solo Spayers</option>
					    <option>PETKUS Technologies GmbH</option>
					  </optgroup>
					  <optgroup label="OIL & GAS">
					    <option>Bornemann Pumps</option>
					  </optgroup>
					  <optgroup label="CLEANING SOLUTIONS">
					    <option>Karcher</option>
					  </optgroup>
					  <optgroup label="INDUSTRIAL">
					    <option>Christian Pfeiffer (CP)</option>
					    <option>Qmax</option>
					  </optgroup>
					  <optgroup label="MEDICAL AND SCIENTIFIC">
					    <option>Zeiss</option>
					    <option>Thermo-Scientific</option>
					    <option>Matachana</option>
					    <option>Alsa Apparecchi</option>
					    <option>Dr Mach</option>
					    <option>Laerdal</option>
					    <option>Sartorius</option>
					  </optgroup>
					  <optgroup label="SECURITY SCREENING EQUIPMENT">
					    <option>Smiths Detection</option>
					    <option>Glosec</option>
					  </optgroup>
					  <optgroup label="INFRASTRUCTURAL DEVELOPMENT">
					    <option>Smiths Heimann GmbH</option>
					    <option>Vanderlande Industries B.V</option>
					  </optgroup>
					  <optgroup label="PRINTING">
					    <option>Heidelberg</option>
					    <option>Polar</option>
					  </optgroup>
					</select>

	      		</div>

				<div className="text-center">
					<p>This ranges from compaction technology which specializes in specialty products for road rehabilitation, soil stabilization and land fill compaction needs. </p>
				</div>

	      	</div>
	      </div>
      </div>
    );
  }
}

export default ContentContainer;