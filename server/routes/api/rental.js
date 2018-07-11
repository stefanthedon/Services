const UserRental = require('../../models/UserRental');

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

   app.post('/api/account/rental', (req, res, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      telephone,
      productModel,
      rentalDate,
      returnDate
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
    if (!rentalDate) {
      return res.send({
        success: false,
        message: 'Error: rentalDate cannot be blank'
      });
    }
    if (!returnDate) {
      return res.send({
        success: false,
        message: 'Error: returnDate cannot be blank'
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
    const newUserRental = new UserRental();

    newUserRental.email = email;
    newUserRental.firstName = firstName;
    newUserRental.lastName = lastName;
    newUserRental.telephone = telephone;
    newUserRental.productModel = productModel;
    newUserRental.rentalDate = rentalDate;
    newUserRental.returnDate = returnDate;
    newUserRental.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });   
      }
      return res.send({
          success: true,
          message: 'Rental details saved'
        });

    })
    });

}