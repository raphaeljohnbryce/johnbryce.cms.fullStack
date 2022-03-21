import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
      .then(res => res.json())
      .then(data => {
        setCustomers(data);
      })
  }, []);

  return (
    <div className="App">
      <h1>Customer Management System</h1>
      <h1>eilon king and sara king</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
