import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then(res => res.json())
            .then(data => {
                setCustomers(data.data);
            })
    }, []);

    const handleDeleteCustomer = (id) => {
        fetch('http://localhost:5000/api/customers/' + id,
            { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                let tempCustomers = []

                tempCustomers = customers.filter(c => c.id !== id)
                setCustomers(tempCustomers);
            })
    }

    return (
        <div className="App">
            <h1>Customer Management System</h1>
            <ul>
                {customers.map(customer => (
                    <li
                        onClick={() => {
                            handleDeleteCustomer(customer.id)
                        }}
                        key={customer.id}>
                        {customer.firstName} {customer.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
