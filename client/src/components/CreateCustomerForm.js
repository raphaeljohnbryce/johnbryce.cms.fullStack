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

    return (
        <div className={classes.root}>
            <h3>Create new customer</h3>
            <label >First name:</label>
            <br />
            <input
                type="text"
                onChange={(e) => handleInputChange(e, 'firstName')}
                value={newCustomer.firstName}
            />
            <br />
            <label >Last name:</label>
            <br />
            <input type="text"
                onChange={(e) => handleInputChange(e, 'lastName')}
                value={newCustomer.lastName}
            />
            <br />
            <label >Phone:</label>
            <br />
            <input type="text"
                onChange={(e) => handleInputChange(e, 'phone')}
                value={newCustomer.phone}
            />
            <br />
            <label >Email:</label>
            <br />
            <input type="text"
                onChange={(e) => handleInputChange(e, 'email')}
                value={newCustomer.email}
            />
            <br />
            <label >Password:</label>
            <br />
            <input type="text"
                onChange={(e) => handleInputChange(e, 'password')}
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
            <button>Create</button>
        </div>
    )
}

export default CreateCustomerForm;