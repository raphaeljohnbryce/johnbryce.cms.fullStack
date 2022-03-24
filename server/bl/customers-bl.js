import customersDal from '../dal/customers-dal.js';

const getAll = async () => {
    return await customersDal.getAll()
}

const addCustomer = async (body) => {
    return await customersDal.addCustomer(
        body.email, body.firstName, body.lastName, body.phone, body.password, body.statusId)
}

export {
    getAll,
    addCustomer
}