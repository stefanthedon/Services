const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
module.exports = (app) => {
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/account/booking-admin-email', (req, res) => {
	const output = `
		<p>You have a new Booking</p>
		<h3>Booking Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Product: ${req.body.productModel}</li>
			<li>Service: ${req.body.serviceType}</li>
			<li>Service Date: ${req.body.serviceDate}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Booking Information" <don.parminter@gmail.com>', // sender address
	      to: 'donald.lokong@strathmore.edu', // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})

app.post('/api/account/booking-client-email', (req, res) => {
	const output = `
		<p>You have a new Booking</p>
		<h3>Booking Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Product: ${req.body.productModel}</li>
			<li>Service: ${req.body.serviceType}</li>
			<li>Service Date: ${req.body.serviceDate}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Booking Information" <don.parminter@gmail.com>', // sender address
	      to: 'donald.lokong@strathmore.edu', ${req.body.email} // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})

app.post('/api/account/rental-admin-email', (req, res) => {
	const output = `
		<p>You have a new Rental</p>
		<h3>Rental Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Product: ${req.body.productModel}</li>
			<li>Service: ${req.body.rentalDate}</li>
			<li>Service Date: ${req.body.returnDate}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Rental Information" <don.parminter@gmail.com>', // sender address
	      to: 'donald.lokong@strathmore.edu', // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})

app.post('/api/account/rental-client-email', (req, res) => {
	const output = `
		<p>You have a new Rental</p>
		<h3>Rental Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Product: ${req.body.productModel}</li>
			<li>Rental Date: ${req.body.rentalDate}</li>
			<li>Return Date: ${req.body.returnDate}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Rental Information" <don.parminter@gmail.com>', // sender address
	      to: ${req.body.email}, // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})

app.post('/api/account/findspare-admin-email', (req, res) => {
	const output = `
		<p>You have a new Spare</p>
		<h3>Spare Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Product: ${req.body.productModel}</li>
			<li>Spare Part: ${req.body.productSpare}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Spare Information" <don.parminter@gmail.com>', // sender address
	      to: 'donald.lokong@strathmore.edu', // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})

app.post('/api/account/findspare-client-email', (req, res) => {
	const output = `
		<p>You have a new Spare</p>
		<h3>Spare Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Product: ${req.body.productModel}</li>
			<li>Spare Part: ${req.body.productSpare}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Spare Information" <don.parminter@gmail.com>', // sender address
	      to: ${req.body.email}, // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})

app.post('/api/account/signin-admin-email', (req, res) => {
	const output = `
		<p>You have a new Sign Up</p>
		<h3>Sign Up Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Password: ${req.body.signUpPassword}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Sign Up Information" <don.parminter@gmail.com>', // sender address
	      to: 'don.parminter@gmail.com', // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})

app.post('/api/account/signin-client-email', (req, res) => {
	const output = `
		<p>You have a new Sign Up</p>
		<h3>Sign Up Details</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
			<li>Password: ${req.body.signUpPassword}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>
	`;
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport({
	    host: 'smtp.ethereal.email',
	    port: 587,
	    secure: false, // true for 465, false for other ports
	    auth: {
	        user: 'wjadjkjl4xij7hqi@ethereal.email', // generated ethereal user
	        pass: 'y3kFJda6AKAQtd3m7D'  // generated ethereal password
	    },
	    tls:{
	      rejectUnauthorized:false
	    }
	  });

	  // setup email data with unicode symbols
	  let mailOptions = {
	      from: '"Achelis New Sign Up Information" <don.parminter@gmail.com>', // sender address
	      to: ${req.body.email}, // list of receivers
	      subject: 'Achelis Kenya LTD', // Subject line
	      text: 'Hi,', // plain text body
	      html: output // html body
	  };

	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
	      if (error) {
	          return console.log(error);
	      }
	      console.log('Message sent: %s', info.messageId);   
	      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	      res.render('contact', {msg:'Email has been sent'});
	  });
})
}