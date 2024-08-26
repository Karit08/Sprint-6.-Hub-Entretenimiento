const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT),
    options:{
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true
    },
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool =>{
        console.log('Conexion a sql server ');
        return pool;
    })
    .catch(err => console.log("Conexion fallida",err));

module.exports = {
    sql,
    poolPromise
}
