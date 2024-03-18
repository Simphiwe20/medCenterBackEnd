const nodemailer = require("nodemailer");
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())

const PORT = 3000

app.use(cors())

app.use(routes)

// const moongose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/medi-center')
    .then((res) => console.log('Connection is successfully'))
    .catch((err) => console.log('MongoDB ran into an error'))

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})

// app.use(routes)

const sendFeedback = (req) => {
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourEmail',
            pass: 'passcode'
        }
    })

    let details = {
        from: 'gsimphiwe212@gmail.com',
        to: `${req.body.Patient_email}`,
        subject: 'Appointment Feedback',
        text: `Hey ${req.body.Patient_name}, Doctor won't be able to see you. Can i schedule for Tommorrow` 
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log('It has an error', err)
        } else {
            console.log('Messege send successfully')
        }
    })
}

const sendPassword = (req) => {
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourEmail',
            pass: 'passcode'
        }
    })

    let details = {
        from: 'gsimphiwe212@gmail.com',
        to: `${req.body.email}`,
        subject: 'Account',
        text: `Hey ${req.body.fullName}, your user account has been successfully created and your password is ${req.body.password}. Use your email address and this password to log in. `
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log('It has an error', err)
        } else {
            console.log('Messege send successfully')
        }
    })
}

const sendApprove = (req) => {
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourEmail',
            pass: 'passcode'
        }
    })

    let details = {
        from: 'gsimphiwe212@gmail.com',
        to: `${req.body.Patient_email}`,
        subject: 'Account',
        text: `Hey ${req.body.fullName}, your appointment has been approved by a doctor.`
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log('It has an error', err)
        } else {
            console.log('Messege send successfully')
        }
    })
}

app.post('/sendFeedback', (req, res) => {
    if(req) {
        sendFeedback(req)
        res.send('Post was successfully')
    }
})

app.post('/sendPassword', (req, res) => {
    if(req) {
        sendPassword(req)
        res.send('Password Sent successfully')
        console.log(req.body)
    }
})

app.post('/approvedFeedBack', (req, res) => {
    if(req) {
        sendApprove(req)
        res.send('Password Sent successfully')
        console.log(req.body)
    }
})
