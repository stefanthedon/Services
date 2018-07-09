const mongoose = require('mongoose');
const UserBookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  telephone: {
    type: String,
    default: ''
  },
  productModel: {
    type: String,
    default: ''
  },
  serviceDate: {
    type: String,
    default: ''
  },
  serviceType: {
    type: String,
    default: ''
  },
  timeStamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
	type: Boolean,
	default: false
  }
});


module.exports = mongoose.model('UserBooking', UserBookingSchema);
