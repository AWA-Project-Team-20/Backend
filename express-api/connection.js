
const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'valer',
    password: 'LMori1011S',
    server: 'localhost',
    database: 'DS',
    port: 5432
})

const client = new Client({
    user: 'valer',
    password: 'LMori1011S',
    server: 'localhost',
    database: 'DS',
    port: 5432
})
client.connect();