import express from 'express';
import { addCustomer, getAll } from '../bl/customers-bl.js';

const customersRouter = express.Router();

customersRouter.get('/customers', async (_, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    }

    res.send(result)
})

customersRouter.post('/customers', async (req, res) => {
    let result = await addCustomer(req.body);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }

        res.send(result)
    }

})

export {
    customersRouter
}