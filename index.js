const path=require('path')
const http=require('http')
const express=require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const router = express.Router();
const dotenv=require('dotenv')
dotenv.config()

const app=express()

const port=process.env.PORT || 3000
const publicDirectoryPath=path.join(__dirname,'./public')

app.use(express.static(publicDirectoryPath))

app.use(bodyParser.urlencoded({ extended: true }),);
app.get('/contact', (req, res) => {
   
    console.log(req.query);
    

     
    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
            pass: process.env.PASS
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: process.env.FROM, // This is ignored by Gmail
      to: process.env.TO,
      subject: 'New message from My Portfolio',
      text: `Name: ${req.query.name} ,\nEmail: ${req.query.email},\nMessage: ${req.query.message}`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        return  console.log('error');
        
      }
      else {
         console.log('mail sent');
         res.redirect('/');
        
      }
    })
    return console.log("SDfs");
    
  })
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
    
})