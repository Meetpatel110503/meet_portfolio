const functions = require("firebase-functions")
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ravipatel90329@gmail.com",
    pass: "Ravi@2909",
  },
})

exports.sendEmail = functions.database
  .ref("/portfolio/{pushId}")
  .onCreate((snapshot, context) => {
    const mailOptions = {
      from: "ravipatel90329@gmail.com",
      to: "ravipatel90329@gmail.com",
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:\n\nName: ${
        snapshot.val().name
      }\nEmail: ${snapshot.val().email}\nMessage: ${snapshot.val().message}`,
    }

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error.toString())
      }
      return console.log("Sent: " + info.response)
    })
  })
