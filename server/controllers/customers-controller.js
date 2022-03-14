import express from 'express';

const customersRouter = express.Router();

customersRouter.get('/customers', (req, res) => {
    res.send('customers')
})

export {
    customersRouter
}