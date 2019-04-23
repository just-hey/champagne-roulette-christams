const { Pool } = require('pg')

// Database configuration
const PG_USER = process.env.POSTGRES_USER || 'postgres'
const PG_PASS = process.env.POSTGRES_PASS || ''
const PG_HOST = process.env.POSTGRES_HOST || '127.0.0.1'
const PG_PORT = process.env.POSTGRES_PORT || '5432'
const PG_DB = 'juno'

const client = new Pool({
  user: PG_USER,
  password: PG_PASS,
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DB
})

// Connect to instance
const setup = async () => {
  try {
    await client.connect()
    console.log(`Successfully connected to ${PG_DB} postgres at ${PG_HOST}:${PG_PORT}.`)
  } catch (error) {
    console.error(`Database Error: Failed to setup DB connection with error: ${error}`)
    process.exit()
  }
}

const query = async (text, params) => {
  const results = await client.query(text, params)
  return results.rows
}

module.exports = {
  setup,
  query
}
