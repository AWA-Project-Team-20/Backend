var sql = require("pg");

var connect = function () {
    var conn = new sql.connectionPool({
        user: 'pg_datavase_owner',
        password: 'LMori1011S',
        server: 'localhost',
        database: 'DS',
        port: 5432
    });

    return conn;
};

modules.exports = connect;