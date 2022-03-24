import connection from '../db.js';

const getAll = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM customers'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

const addCustomer = async (email, firstName, lastName, phone, password, statusId) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO customers (email, firstName, lastName, phone, password, statusId)
            VALUES
            ('${email}','${firstName}','${lastName}', '${phone}','${password}', ${statusId});`
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

const deleteCustomer = async (id) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `DELETE FROM customers WHERE id = ${id};`
        )

        result.success = true

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

export default {
    getAll,
    addCustomer,
    deleteCustomer
}