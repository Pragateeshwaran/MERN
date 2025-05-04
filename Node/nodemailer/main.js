const nodemailer = require('nodemailer');
 
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pragateeshgamesid@gmail.com',        // your Gmail address
    pass: 'jiwcoyrjisutyktx' // Gmail password or App password (preferred)
  }
});
 
let mailOptions = {
  from: 'pragateeshgamesid@gmail.com', // sender address
  to: 'geniuspekka1808@gmail.com',                // list of receivers
  subject: 'Hello from Node.js',              // Subject line
  text: 'This is a plain text email.',        // plain text body
  html: '<b>This is a bold HTML email.</b>'   // HTML body
};
 
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred:', error);
  }
  console.log('Email sent successfully:', info.response);   
});
