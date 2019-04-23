const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const send = async (emailAddress, message) => {
  const email = {
    to: 'dharrisdnv@gmail.com',
    from: emailAddress,
    subject: `Portfolio message from ${emailAddress}`,
    text: message
  }
  return await sendgrid.send(email)
}

module.exports = {
  send
}
