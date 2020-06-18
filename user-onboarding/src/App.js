import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import Users from './Users'

function App() {

  const [ users, setUsers ] = useState([])
  console.log(users)

  return (
    <div className="App">
      <Form setUsers={users, setUsers}/>
      {/* <Users users={users}/> */}
    </div>
  );
}

export default App;
