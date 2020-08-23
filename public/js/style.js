
function myFunction() {
    var nodemailer=require('nodemailer')
    var nameValue = document.getElementById("name").value;
    var emailValue= document.getElementById("email").value;
    var message=   document.getElementById("message").value;
    console.log(nameValue);
    
  const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "Instamini17@gmail.com",
            pass: "pzmatpcprmruoqyg"
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'MY PORTFOLIO', // This is ignored by Gmail
      to: 'shivanshu5417jaiswal@gmail.com',
      subject: 'New message from contact form at tylerkrys.ca',
      text: `${nameValue} (${emailValue}) says: ${message}`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        console.log("ERROR");
         // Show a page indicating failure
      }
      else {
        console.log("SUCCESS");
         // Show a page indicating success
      }
    })
    
  }