import React from 'react'

export default function Users(props) {
    
    const {users} = props

    return (
        <div style={{border: '2px black solid'}}>
            {users.map( user => {
                return (
                <div key={user.id} style={{border: '2px black solid'}}>
                    Name: {user.username}&nbsp;
                    Email: {user.email}&nbsp;
                    Password: {user.password}&nbsp;
                    Terms: {JSON.stringify(user.terms)}&nbsp;
                </div>
                )
            })}
        </div>
    )
}