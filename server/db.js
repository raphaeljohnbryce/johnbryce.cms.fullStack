import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cms',
    password: 'Aa123456!'
})

export default connection;