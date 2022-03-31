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



    return (
        <div className={classes.root}>
            <label >First name:</label>
            <br />
            <input type="text" />
            <br />
            <label >Last name:</label>
            <br />
            <input type="text" />
            <br />
            <label >Phone:</label>
            <br />
            <input type="text" />
            <br />
            <label >Email:</label>
            <br />
            <input type="text" />
            <br />
            <label >Password:</label>
            <br />
            <input type="text" />
            <br />
            <label >Status:</label>
            <br />
            <input type="number" />
            <br />
        </div>
    )
}

export default CreateCustomerForm;