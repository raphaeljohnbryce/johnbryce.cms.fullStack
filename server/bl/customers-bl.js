import customersDal from '../dal/customers-dal.js';

const getAll = async () => {
    return await customersDal.getAll()
}

const addCustomer = async () => {
    return await "add customer"
}

export {
    getAll,
    addCustomer
}