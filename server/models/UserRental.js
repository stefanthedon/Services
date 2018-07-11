const mongoose = require('mongoose');
const UserRentalSchema = new mongoose.Schema({
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
  rentalDate: {
    type: String,
    default: ''
  },
  returnDate: {
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


module.exports = mongoose.model('UserRental', UserRentalSchema);
