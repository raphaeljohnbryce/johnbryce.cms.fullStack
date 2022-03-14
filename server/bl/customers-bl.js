import customersDal from '../dal/customers-dal.js';

const getAll = async() => {
    return await customersDal.getAll()
}

export {
    getAll
}