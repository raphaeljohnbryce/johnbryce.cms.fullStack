import connection from './db.js';

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