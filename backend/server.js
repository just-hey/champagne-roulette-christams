const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const app = express()

// Configuration Setup
const port = 3000

// Imports
const database = require('./database/client')
const handlers = require('./handlers/index')

// Middleware setup
const middleware = require('./middleware/index')
const auth = middleware.auth

// Multer setup for file uploads
const Multer = require('multer')
const multer = Multer()

const main = async () => {
  // Setup database connection
  await database.setup()

  // Image routes
  const images = handlers.images
  router.route('/images').get(images.get)
  router.route('/images').post(auth.authenticate, multer.single(''), images.upload)
  router.route('/images/:id').delete(auth.authenticate, images.remove)

  // Email routes
  const email = handlers.email
  router.route('/email').post(email.send)

  // Final Express setup
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
  })
  app.use(bodyParser.json())
  app.use('/', router)
  app.listen(port, () => { console.log('Listening on port: ' + port) })
}

main().catch((error) => { console.error(error) })
