const lib = require('../lib/images')

const get = async (req, res, next) => {
  try {
    const images = await lib.get()
    return res.status(200).json(images)
  } catch (error) {
    console.error(`GET Images Error: ${error}`)
    return res.status(500).json({ error: 'GET Images Error: Failed to get images.' })
  }
}

const upload = async (req, res, next) => {
  try {
    if (!req.file || !req.body.text) {
      return res.status(400).json({ error: 'POST Image Error: Malformed request, requires file and text.' })
    }

    const file = req.file
    const text = req.body.text
    const image = await lib.upload(file, text)

    return res.status(200).json(image)
  } catch (error) {
    console.error(`POST Image Error: ${error}`)
    return res.status(500).json({ error: 'POST Images Error: Failed to upload image.' })
  }
}

const remove = async (req, res, next) => {
  try {
    const id = req.params.id
    await lib.remove(id)

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(`DELETE Image Error: ${error}`)
    return res.status(500).json({ error: 'DELETE Image Error: Failed to delete image.' })
  }
}

module.exports = {
  get,
  upload,
  remove
}
