const authenticate = (req, res, next) => {
  try {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
      return res.status(400).json({ message: 'Authentication Error: Malformed request, missing basic auth authorization header.' })
    }

    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      return next()
    } else {
      return res.status(401).json({ error: 'Authentication Error: Failed to authenticate user.' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Authentication Error: Failed to check credentials, please try again.' })
  }
}

module.exports = {
  authenticate
}
