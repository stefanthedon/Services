import React, { Component } from 'react';
import 'whatwg-fetch';
import css from '../../styles/Home.css';
import Header from './Header';
import ServiceAccount from './ServiceAccount';


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
      userId: '',
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpTelephone: '',
      signUpEmail: '',
      signUpPassword: ''
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    this.onTextboxChangeSignUpTelephone = this.onTextboxChangeSignUpTelephone.bind(this);

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

    // ASSIGN USER DETAILS
    const {
      userId
    } = this.state;
    fetch('/api/account/user/' + userId)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            firstName: json.firstName,
            lastName: json.lastName,
            telephone: json.telephone,
            email: json.email
          });
        } else {
          this.setState ({
            isLoading:false
          });
        }
      });

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

  onTextboxChangeSignUpTelephone(event) {
    this.setState({
      signUpTelephone: event.target.value,
    });
  }

  onSignIn () {
    // Grab state
    const {
      signInEmail,
      signInPassword,
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
            // signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token,
            userId: json.userId
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
      signUpTelephone,
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
        telephone: signUpTelephone,
        password:   signUpPassword
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
            signUpLastName: '',
            signUpTelephone: ''
          })
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          })
        }
      });

      // EMAIL
        fetch('/api/account/signin-admin-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: signUpFirstName,
          lastName: signUpLastName,
          email: signUpEmail,
          telephone: signUpTelephone,
          password:   signUpPassword
        }),
      }).then(res => res.json())

        // CLIENT
      fetch('/api/account/signin-client-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: signUpFirstName,
          lastName: signUpLastName,
          email: signUpEmail,
          telephone: signUpTelephone,
          password:   signUpPassword
        }),
      }).then(res => res.json())
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
      userId,
      firstName,
      lastName,
      telephone,
      email,      
      signInError,
      signUpError,
      signInEmail,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpTelephone
    } = this.state;

    // STYLES

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

        <div className="row text-center">
          
            <div id="signIn" className="col-sm-offset-3 col-md-offset-3 col-lg-offset-4 col-xl-offset-4">
              <div className="sign-in input-group">
                
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
                <p className="signUpError">{signInError}</p>
                  <button className="btn btn-default" type="button" onClick={this.onSignIn} style={signInBtn}>SIGN IN</button>

              </div>
          </div>

          <div id="signIn" className="col-sm-offset-3 col-md-offset-3 col-lg-offset-4 col-xl-offset-4">
              <div className="input-group">
                 
                <h2>Sign Up</h2>
                <input
                className="form-control" 
                type="text" 
                placeholder="First Name"
                value={signUpFirstName}
                onChange={this.onTextboxChangeSignUpFirstName}
                />
                <input
                className="form-control" 
                type="text" 
                placeholder="Last Name"
                value={signUpLastName}
                onChange={this.onTextboxChangeSignUpLastName}
                />
                <input
                className="form-control" 
                type="email" 
                placeholder="Email"
                value={signUpEmail}
                onChange={this.onTextboxChangeSignUpEmail}
                />
                <input
                className="form-control" 
                type="text" 
                placeholder="Phone Number"
                value={signUpTelephone}
                onChange={this.onTextboxChangeSignUpTelephone}
                />
                <input
                className="form-control" 
                type="password" 
                placeholder="Password"
                value={signUpPassword}
                onChange={this.onTextboxChangeSignUpPassword}
                />
                <p className="signUpError">{signUpError}</p>
                <button className="btn btn-default" type="button" onClick={this.onSignUp} style={signInBtn}>Sign Up</button>
              </div>
            </div>

        </div>
      );

  }

    return (
        <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand navbar-brand-centered">ACHELIS KENYA LTD</div>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="" onClick={this.logOut}><span className="glyphicon glyphicon-log-out"></span><span className="logout">Logout</span></a></li>
            </ul>
          </div>
        </nav>
          <ServiceAccount token={token}/>
        </div>
    );
  }
}

export default Home;
