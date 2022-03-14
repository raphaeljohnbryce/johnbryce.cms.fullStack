import express from 'express';
import { getAll } from '../bl/customers-bl.js';

const customersRouter = express.Router();

customersRouter.get('/customers', (req, res) => {
    let result = getAll();

    res.send(result)
})

export {
    customersRouter
}