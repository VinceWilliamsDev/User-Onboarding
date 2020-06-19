import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import Users from './Users'
import axios from 'axios'
import formSchema from './formSchema'

function App() {

  //initial form values
  const initialFormValues = {
    username: '',
    email: '',
    password: '',
    terms: false,
  }

  //initial error messages
  const initialErrorMessages = {
    email: "",
    username: "",
    password: "",
    terms: ""
  }
  
  // state
  const [errors, setErrors] = useState(initialErrorMessages);
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ users, setUsers ] = useState([])
  console.log(users)

  //get initial user data
  // useEffect(() => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res => {
  //       const data = res.data.data
  //       setUsers(users => [data, ...users])
  //     })
  //     .catch(err => console.log(err))      
  // }, [])

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
            setUsers(users => [res.data, ...users])
            // axios.get('https://reqres.in/api/users')
            // .then(res => {
            //   const data = res.data.data
            //   setUsers(data)
            // })
            // .catch(err => console.log(err))
          })
          .catch(err => {
              console.log(err)
          })
          .finally(() => {
              setFormValues(initialFormValues)
          })
  }


  return (
    <div className="App">
      <Form 
      onSubmit={onSubmit} 
      onChange={onChange}
      onCheckboxChange={onCheckboxChange}
      formValues={formValues}
      />
      <Users users={users}/>
    </div>
  );
}

export default App;

