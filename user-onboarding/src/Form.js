import React, { useState } from 'react'
import axios from 'axios'

// We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

export default function Form(props) {
    
    const {users, setUsers} = props

    //initial form values
    const initialFormValues = {
        username: '',
        email: '',
        password: '',
        terms: false,
    }

    //form state
    const [ formValues, setFormValues ] = useState(initialFormValues)

    console.log(formValues)
    //track state changes to formValues
    const onChange = event => {
        const name = event.target.name
        const value = event.target.value

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onCheckboxChange = event => {
        const name = event.target.name
        const checked = event.target.checked

        setFormValues({
            ...formValues,
            [name]: checked
        })
    }

    //onSubmit send formValues to the api
    const onSubmit = event => {
        event.preventDefault()
    
        axios.post('https://reqres.in/api/users', formValues)
            .then(res => {
                console.log(res)
                setUsers(team => [...team, res.data])
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }


    return (
        <form onSubmit={onSubmit}> 
            <div>
                <h2>Onboard Your New User</h2>
            </div>
            <div>
                <h4>User Information</h4>
                {/* inputs  */}
                <label>Name&nbsp;
                    <input
                        value={formValues.username}
                        name='username'
                        type='text'
                        onChange={onChange}
                    />
                </label>

                <label>Email&nbsp;
                    <input 
                        value={formValues.email}
                        name='email'
                        type='text'
                        onChange={onChange}
                    />
                </label>

                <label>Password&nbsp;
                    <input 
                        value={formValues.password}
                        name='password'
                        type='text'
                        onChange={onChange}
                    />
                </label>

                <label>Accept Terms of Service?&nbsp;
                    <input 
                        name='terms'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={formValues.terms === true}
                    />
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
)
}