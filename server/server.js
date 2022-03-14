import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aa123456',
    database: 'cms'
})

connection.query(
    'SELECT * FROM customers',
    (err, results) => {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
        }
    }
)