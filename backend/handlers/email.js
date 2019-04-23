const lib = require('../lib/email')

const send = async (req, res, next) => {
  try {
    if (!req.body.emailAddress || !req.body.message) {
      return res.status(400).json({ error: 'POST Email Error: Malformed request, requires emailAddress and message.' })
    }

    const emailAddress = req.body.emailAddress
    const message = req.body.message
    await lib.send(emailAddress, message)
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(`POST Email Error: ${error}`)
    return res.status(500).json({ error: 'POST Email Error: Failed to send email.' })
  }
}

module.exports = {
  send
}
