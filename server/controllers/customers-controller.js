import express from 'express';
import { addCustomer, getAll } from '../bl/customers-bl.js';

const customersRouter = express.Router();

customersRouter.get('/customers', async (_, res) => {
    let result = await getAll();

    res.send(result)
})

customersRouter.post('/customers', async (req, res) => {
    let result = await addCustomer();
    const body = { req }
    console.log(req.body)

    res.send(result)
})

export {
    customersRouter
}