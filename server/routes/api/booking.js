const UserBooking = require('../../models/UserBooking');

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

   app.post('/api/account/booking', (req, res, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      telephone,
      productModel,
      serviceDate,
      serviceType
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
    if (!serviceType) {
      return res.send({
        success: false,
        message: 'Error: serviceType cannot be blank'
      });
    }
    if (!serviceDate) {
      return res.send({
        success: false,
        message: 'Error: serviceDate cannot be blank'
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
    const newUserBooking = new UserBooking();

    newUserBooking.email = email;
    newUserBooking.firstName = firstName;
    newUserBooking.lastName = lastName;
    newUserBooking.telephone = telephone;
    newUserBooking.productModel = productModel;
    newUserBooking.serviceType = serviceType;
    newUserBooking.serviceDate = serviceDate;
    newUserBooking.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });   
      }
      return res.send({
          success: true,
          message: 'Booking saved'
        });

    })
    });

}