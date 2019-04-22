const database = require('../database/client')
const aws = require('./aws')

const get = async () => {
  return database.query('SELECT * FROM image;')
}

const upload = async (image, text) => {
  const awsUpload = await aws.upload(image)
  const awsKey = awsUpload.Key
  const url = awsUpload.Location
  return database.query(`INSERT INTO image (aws_key, url, text) VALUES ('${awsKey}', '${url}', '${text}') RETURNING *;`)
}

const remove = async (imageID) => {
  const query = await database.query(`SELECT * FROM image WHERE id=${imageID};`)

  if (!query.length) {
    return
  }

  const image = query[0]
  const awsKey = image.aws_key
  await aws.remove(awsKey)

  return database.query(`DELETE FROM image WHERE id=${imageID};`)
}

module.exports = {
  get,
  upload,
  remove
}
