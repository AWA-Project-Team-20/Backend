const Pool = require("pg").Pool;

const pool = new Pool({
    user: "",
    password: "",
    database: "DS",
    host: "localhost",
    port: 5432
});

module.exports = pool;