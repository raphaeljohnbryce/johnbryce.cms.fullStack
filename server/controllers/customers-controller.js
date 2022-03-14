import express from 'express';
import { getAll } from '../bl/customers-bl.js';

const customersRouter = express.Router();

customersRouter.get('/customers', async(req, res) => {
    let result = await getAll();

    res.send(result)
})

export {
    customersRouter
}