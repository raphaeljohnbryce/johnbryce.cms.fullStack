import connection from '../db.js';

const getAll = async () => {
    let result
    try {
        result = await connection.promise().query(
            'SELECT * FROM customers'
        )

        return result[0]
    } catch (err) {
        console.log('err');
        console.log(err);
        return err
    }
}

export default {
    getAll
}