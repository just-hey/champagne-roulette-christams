const database = require('./client')

const main = async () => {
  // Setup database
  await database.setup()

  // Create admin table
  await database.query('CREATE TABLE admin (id SERIAL PRIMARY KEY, username TEXT NOT NULL, password TEXT NOT NULL)')
  console.log('- created table admin')

  // Create image table
  await database.query('CREATE TABLE image (id SERIAL PRIMARY KEY, aws_key TEXT NOT NULL UNIQUE, url TEXT NOT NULL UNIQUE, text TEXT NOT NULL)')
  console.log('- crated table image')

  console.log('Successfully migrated database.')
  process.exit()
}

main().catch((error) => { console.error(error) })
