import  express from "express";
import { customersRouter } from "./controllers/customers-controller.js";

const app = express();

app.use(express.json())

app.use('/api', customersRouter)

app.listen(5000, () => {
    console.log('Server started on port 5000');
})



























// import connection from './db.js';

// connection.query(
//     'SELECT * FROM customers',
//     (err, results) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(results)
//         }
//     }
// )