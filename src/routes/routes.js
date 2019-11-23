const nodemailer = require('nodemailer')
const { Router } = require('express')
const router = Router()

router.post('/send-email', async (req, res) => {
    const { name, email, phone, message} = req.body

    contentHTML = `
        <h1>User Information</h1>
        <ul>
          <li>Username: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
        </ul>

        <p>${message}</p>
    `


const transporter = nodemailer.createTransport({
    host: 'put here a host',
    port: 'put here a port',
    secure: false,
    auth: {
        user: ' put here a user',
        pass: 'put here a pass'
    },
    tls: {
        rejectUnauthorized: false
    }
})

const info = await transporter.sendMail({
    from: 'put here your email',
    to: 'put here a receptor',
    subject: 'put here a subject',
    html: contentHTML
})

console.log('i dont have money, so i cant hire a server hosting. :(')

console.log('Message sent', info.messageId)

  res.redirect('/success.html')
})

module.exports = router