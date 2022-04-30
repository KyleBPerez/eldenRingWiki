const { Client } = require('pg')
const DB_NAME = 'elden_ring_wiki_users'

const CONNECTION_STRING =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`

let client = new Client(CONNECTION_STRING)

module.exports = client
