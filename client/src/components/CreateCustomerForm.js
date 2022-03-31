import { makeStyles } from '@mui/styles'
import { useState } from 'react'

const useStyle = makeStyles({
    root: {
        width: '60vw',
        background: '#eae8e8',
    }
})

const CreateCustomerForm = (props) => {
    const classes = useStyle()
    const { addCustomerToList } = props

    const [newCustomer, setNewCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        statusId: null
    })

    const handleInputChange = (e, name) => {
        let inputValue = e.target.value
        let tempNewCustomer = {
            ...newCustomer,
            [name]: inputValue
        }

        setNewCustomer(tempNewCustomer)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (formValidation()) {
            createCustomer()
        } else {
            alert('Form fields not valid.')
        }
    }

    const isEmptyString = str => {
        return !!(str || false)
    }

    const formValidation = () => {
        return (
            isEmptyString(newCustomer.firstName) &&
            isEmptyString(newCustomer.lastName) &&
            isEmptyString(newCustomer.phone) &&
            isEmptyString(newCustomer.email) &&
            isEmptyString(newCustomer.password))
    }

    const createCustomer = () => {
        // preper body data
        let body = {
            ...newCustomer
        }
        // post request
        fetch('http://localhost:5000/api/customers',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    addCustomerToList(data.data)
                } else {
                    alert('Server error: failed to create new customer.')
                }
                console.log('data')
                console.log(data)
            })
            .catch(err => {
                console.log('err')
                console.log(err)
            })
    }

    return (
        <form className={classes.root}>
            <h3>Create new customer</h3>
            <label >First name:</label>
            <br />
            <input
                required
                type="text"
                onChange={(e) => handleInputChange(e, 'firstName')}
                value={newCustomer.firstName}
            />
            <br />
            <label >Last name:</label>
            <br />
            <input type="text"
                required
                onChange={(e) => handleInputChange(e, 'lastName')}
                value={newCustomer.lastName}
            />
            <br />
            <label >Phone:</label>
            <br />
            <input type="text"
                required
                onChange={(e) => handleInputChange(e, 'phone')}
                value={newCustomer.phone}
            />
            <br />
            <label >Email:</label>
            <br />
            <input type="email"
                required
                onChange={(e) => handleInputChange(e, 'email')}
                value={newCustomer.email}
            />
            <br />
            <label >Password:</label>
            <br />
            <input type="password"
                onChange={(e) => handleInputChange(e, 'password')}
                required
                value={newCustomer.password}
            />
            <br />
            <label >Status:</label>
            <br />
            <input type="number"
                onChange={(e) => handleInputChange(e, 'statusId')}
                value={newCustomer.statusId || 0}
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Create</button>
        </form>
    )
}

export default CreateCustomerForm;