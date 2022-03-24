import express from 'express';
import { addCustomer, getAll, deleteCustomer } from '../bl/customers-bl.js';

const customersRouter = express.Router();

customersRouter.get('/customers', async (_, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
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

customersRouter.delete('/customers/:id', async (req, res) => {
    let result = await deleteCustomer(req.params.id);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    customersRouter
}