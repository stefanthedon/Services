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
	      
		<div className="wrap">
          <div className="instructions">
            <div className="first">Choose Category</div>
          </div>
          <div className="staff">
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">CONSTRUCTION</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">MATERIAL HANDLING</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">POWER SYSTEMS</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">TECHNICAL EQUIPMENT</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">AGRICULTURAL EQUIPMENT</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">OIL & GAS</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">CLEANING SOLUTIONS</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">INDUSTRIAL</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">MEDICAL AND SCIENTIFIC</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">SECURITY SCREENING EQUIPMENT</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">INFRASTRUCTURAL DEVELOPMENT</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">PRINTING</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="text" name="name" required="required"/>
                <label>Email</label>
                <input type="email" name="email" required="required"/>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ContentContainer;