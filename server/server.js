import  express from "express";
import { customersRouter } from "./controllers/customers-controller.js";

const app = express();

app.use(express.json())

app.use('/api', customersRouter)

app.listen(5000, () => {
    console.log('Server started on port 5000');
})