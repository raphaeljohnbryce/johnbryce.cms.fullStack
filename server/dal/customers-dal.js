import connection from '../db.js';

const getAll = async () => {
    let result = await connection.promise().query(
        'SELECT * FROM customers'
    )


    console.log(result)
    return result[0]
}

export default {
    getAll
}