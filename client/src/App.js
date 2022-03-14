import './App.css';
import {useEffect, useState} from 'react';

function App() {

  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }, []);

  return (
    <div className="App">
      <h1>Customer Management System</h1>
    </div>
  );
}

export default App;
