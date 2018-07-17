import React, { Component } from 'react';
import 'whatwg-fetch';
import css from '../../styles/Messages.css';



class Messages extends Component {

  constructor(props) {
      super(props);

      this.state = {
      
      };

      
  }

  


  render() {

    return (
      <div className="row">
        <div className="container table-responsive">
          <h2>Messages</h2>
          <table className="table table-condensed table-hover">
            <thead>
              <tr>
                <th className="span1"><input type="checkbox" /></th>
                <th className="span2">All</th>
                <th className="span2"></th>
                <th className="span9"></th>
                <th className="span2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /> <a href="#"><i className="icon-star-empty"></i></a></td>
                <td><strong>Achelis</strong></td>
                <td><span className="label pull-right">Admin</span></td>
                <td><strong>Message body</strong></td>
                <td><strong>11:23 PM</strong></td>
              </tr>
              <tr>
                <td><input type="checkbox" /> <a href="#"><i className="icon-star-empty"></i></a></td>
                <td>My Account</td>
                <td><span className="label pull-right">Notifications</span></td>
                <td>Message body</td>
                <td>July 14</td>
              </tr>
              <tr>
                <td><input type="checkbox" /> <a href="#"><i className="icon-star"></i></a></td>
                <td><strong>Rental</strong></td>
                <td><span className="label pull-right">Notifications</span></td>
                <td><strong>Message</strong></td>
                <td><strong>July 13</strong></td>
              </tr>
              <tr>
                <td><input type="checkbox" /> <a href="#"><i className="icon-star"></i></a></td>
                <td><strong>Booking</strong></td>
                <td><span className="label pull-right">Notifications</span></td>
                <td><strong>Message</strong></td>
                <td><strong>July 11</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Messages;