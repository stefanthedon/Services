const UserFindSpare = require('../../models/UserFindSpare');

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

   app.post('/api/account/findspare', (req, res, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      telephone,
      productModel,
      productSpare
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
    if (!productSpare) {
      return res.send({
        success: false,
        message: 'Error: productSpare cannot be blank'
      });
    }
    if (!productModel) {
      return res.send({
        success: false,
        message: 'Error: productModel cannot be blank'
      });
    }

    email = email.toLowerCase();
    
    // Steps: 
    // 1. Verify email doesn't exist
    
    // 2. Save
    const newUserFindSpare = new UserFindSpare();

    newUserFindSpare.email = email;
    newUserFindSpare.firstName = firstName;
    newUserFindSpare.lastName = lastName;
    newUserFindSpare.telephone = telephone;
    newUserFindSpare.productModel = productModel;
    newUserFindSpare.productSpare = productSpare;
    newUserFindSpare.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });   
      }
      return res.send({
          success: true,
          message: 'Spare part details saved'
        });

    })
    });

}