const AWS = require('aws-sdk')

// AWS Configuration
const AWS_BUCKET = process.env.AWS_BUCKET
const AWS_KEY = process.env.AWS_KEY
const AWS_SECRET = process.env.AWS_SECRET

// Setup client
const client = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: AWS_BUCKET },
  accessKeyId: AWS_KEY,
  secretAccessKey: AWS_SECRET
})

const upload = async (file) => {
  return new Promise((resolve, reject) => {
    const fileName = file.originalname
    const data = file.buffer

    client.upload({
      Key: fileName,
      Body: data,
      ACL: 'public-read'
    }, function (error, response) {
      if (error) {
        console.error(error)
        return reject(`AWS Upload Error: Failed to upload image with error: ${error}`)
      } else {
        return resolve(response)
      }
    })
  })
}

const remove = async (fileName) => {
  return new Promise((resolve, reject) => {
    client.deleteObject({
      Key: fileName
    }, function (error, response) {
      if (error) {
        console.error(error)
        throw new Error(`AWS Delete Error: Failed to delete image ${fileName} with error: ${error}`)
      } else {
        return resolve(response)
      }
    })
  })
}

module.exports = {
  upload,
  remove
}
