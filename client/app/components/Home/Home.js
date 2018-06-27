import React, { Component } from 'react';
import 'whatwg-fetch';

import Header from './Header';
import SchoolAccount from './SchoolAccount';


import {
  getFromStorage,
  setInStorage 
} from '../../utils/storage';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: ''
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logOut = this.logOut.bind(this);

  }


  componentDidMount() {
    const obj = getFromStorage('the_main_app');

    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            token,
            isLoading: false
          });
        } else {
          this.setState ({
            isLoading:false
          });
        }
      });
    } else {
      this.setState({
        isLoading: false
      });
    }

  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onSignIn () {
    // Grab state
    const {
      signInEmail,
      signInPassword
    } = this.state;

    this.setState({
      isLoading: true
     });

    // Post request to backend
    fetch('/api/account/signin', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      }),
    }).then(res => res.json())
      .then(json => {
        this.setState({
            signInError: json.message,
            isLoading: false
          });
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token
          })
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          })
        }
      });

  }

  onSignUp () {
    // Grab state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
    } = this.state;

     this.setState({
      isLoading: true
     });

    // Post request to backend
    fetch('/api/account/signup', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      }),
    }).then(res => res.json())
      .then(json => {
        this.setState({
            signUpError: json.message,
            isLoading: false
          });
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpFirstName: '',
            signUpLastName: ''
          })
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          })
        }
      });
  }

  logOut () {
    this.setState({
      isLoading: true
    });

    const obj = getFromStorage('the_main_app');

    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            token: '',
            isLoading: false
          });
        } else {
          this.setState ({
            isLoading:false
          });
        }
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }


  render() {
    const {
      isLoading,
      token,
      signInError,
      signUpError,
      signInEmail,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
    } = this.state;

    // STYLES
    var input = {
      textAlign: "center",
      marginTop: "250px",
      padding: "20px",
      boxShadow: "0 4px 10px 4px rgba(19, 35, 47, 0.3)",
    };

    var signInBtn = {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "14px 20px",
      margin: "8px 0",
      border: "none",
      cursor: "pointer",
      width: "100%",
      opacity: "0.9"
    };

    var registerBtn = {
      float: "left",
      width: "50%",
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "14px 20px",
      margin: "8px 0",
      border: "none",
      cursor: "pointer",
      opacity: "0.9"
    };

    var forgotBtn = {
      width: "50%",
      backgroundColor: "#f44336",
      color: "white",
      padding: "14px 20px",
      margin: "8px 0",
      border: "none",
      cursor: "pointer",
      opacity: "0.9"
    };

    var loading = {
      fontSize: "40px",
      marginLeft: "50%",
      marginTop: "40%"
    };

    if (isLoading) {
      return (<div><i className="fa fa-spinner fa-spin" style={loading}></i></div>);
    }

    if (!token) {
      return (

        <div className="row">
          
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-sm-offset-5 col-md-offset-5 col-lg-offset-5 text-center">
              <div className="input-group" style={input}>
                
                  <h2>Sign In</h2>
                  <input
                  className="form-control" 
                  type="email" 
                  placeholder="Email" 
                  value={signInEmail}
                  onChange={this.onTextboxChangeSignInEmail}
                  />
                  <input
                  className="form-control" 
                  type="password" 
                  placeholder="Password" 
                  value={signInPassword}
                  onChange={this.onTextboxChangeSignInPassword}
                  />
                  <button className="btn btn-default" type="button" onClick={this.onSignIn} style={signInBtn}>SIGN IN</button>
                  <button className="btn btn-default" type="button" onClick="" style={registerBtn}>REGISTER</button>
                  <button className="btn btn-default" type="button" onClick="" style={forgotBtn}>FORGOT PASSWORD?</button>

              </div>
          </div>
        </div>
      );

  }

    var background = {
      alignItems: "center",
      justifyContent: "center",
      margin: "0",
      padding: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "#f1f2f6"
    };

    return (
      <div className="background" style={background}>
        <div>
          <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand navbar-center" href="">School Name</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="" onClick={this.logOut}><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
            </ul>
          </div>
        </nav>
          <SchoolAccount/>
        </div>
      </div>
    );
  }
}

export default Home;
