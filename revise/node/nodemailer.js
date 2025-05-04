const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: "pragateeshgamesid@gmail.com",
        pass: "eawgkjwe"
    } 

})

const mail = {
    from: "pragateeshgamesid@gmail.com",
    to: "geniuspekka1808@gmail.com",
    subject: 'node',
    text: 'hi'
}

transport.sendMail(mail, (err, info)=>{
    
})