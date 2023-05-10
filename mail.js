const http= require('http');
const { Console } = require('console');
http.createServer((req,res)=>{

    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    

}).listen(8081);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lexialeya89@gmail.com',
    pass: 'Ap789QWPd'
  }
});

var mailOptions = {
  from: 'lexialeya89@gmail.com',
  to: 'imrankkp15@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});