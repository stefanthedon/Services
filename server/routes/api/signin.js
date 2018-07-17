const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
  // app.get('/api/counters', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });

  // app.post('/api/counters', function (req, res, next) {
  //   const counter = new Counter();

  //   counter.save()
  //     .then(() => res.json(counter))
  //     .catch((err) => next(err));
  // });

  /*
   * Sign Up
   */

   app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      telephone,
      password
    } = body;

    let {
      email
    } = body;

    if (!firstName) {
      return res.send({
        success: false,
        message: 'Error: First name cannot be blank'
      });
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: 'Error: Last name cannot be blank'
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank'
      });
    }

    email = email.toLowerCase();
    
    // Steps: 
    // 1. Verify email doesn't exist
    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
        success: false,
        message: 'Error: Server error'
      });
      } else if (previousUsers.length > 0) {
        return res.send({
        success: false,
        message: 'Error: Account already exists'
      });
      }
    // 2. Save
    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.telephone = telephone;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });   
      }
      return res.send({
          success: true,
          message: 'Signed up'
        });

    })
    });

   });


   app.post('/api/account/signin', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;

    let {
      email
    } = body;

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank'
      });
    }

    email = email.toLowerCase();

    User.find({
      email: email
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid Credentials'
        });
      }
      //User Session
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
          success: false,
          message: 'Error: Server error'
        });
        }
        return res.send({
          success: true,
          message: 'Valid sign in',
          token: doc._id
        });
      })

    });

  });

  app.get('/api/account/verify', (req, res, next) => {
    //Get Token
    const { query } = req;
    const { token } = query;
    //?token=test

    //Verify the Token is one of a kind
    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      
      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      } else {
          return res.send({
            success: true,
            message: 'Good'
          });
      }
    
    });
  });


  app.get('/api/account/accountDetails/:id', (req, res, next) => {
    User.findById(req.params.id)
      .then(userFound => {
        if (!userFound) {
          return res.status(404).end();
        }
        return res.status(200).json(userFound);
    });

  });

  app.get('/api/account/accountDetails', (req, res, next) => {
    //Get Token
    const { query } = req;
    const { token } = query;
    const userId = '';
    const { body } = req;
    const {
      firstName,
      lastName,
      telephone,
      password
    } = body;

    let {
      email
    } = body;

    //Verify the Token is one of a kind
    // UserSession.find({
    //   _id: token,
    //   isDeleted: false
    // }, (err, sessions) => {
    //   if(err) {
    //     return res.send({
    //       success: false,
    //       message: 'Error: Server error'
    //     });
    //   }
      
    //   if (sessions.length != 1) {
    //     return res.send({
    //       success: false,
    //       message: 'Error: Invalid'
    //     });
    //   } else {
    //       return res.send({
    //         success: true,
    //         message: 'Good'
    //       });
    //   }

    User.find({}, function (err, User) {
      if(err) {
        res.send('Something is wrong!!!');
        next();
      }
      res.json(User);
    });


      // res.json(UserSession);
      // userId: res.json(UserSession);

      // });

      // User.find({
      //   _id: userId,
      //   isDeleted: false
      // }, (err, user) => {
      //   if(err) {
      //     return res.send({
      //       success: false,
      //       message: 'Error: Server error'
      //     });
      //   }
      // return res.send({
      //   success: true,
      //   message: 'Good',
      //   firstName: firstName,
      //   lastName: lastName,
      //   email: email,
      //   password: password,
      //   telephone: telephone
      // });

      // });
    
    
  });

  app.get('/api/account/logout', (req, res, next) => {
    //Get Token
    const { query } = req;
    const { token } = query;
    //?token=test

    //Verify the Token is one of a kind
    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: {
        isDeleted:true
      }
    }, null, (err, sessions) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      
      return res.send({
            success: true,
            message: 'Good'
      });
    
    });
  });

};