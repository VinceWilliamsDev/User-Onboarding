import React from 'react'

export default function Users(props) {
    
    const {users} = props

    return (
        <div>
                <div>
                    Name: {users.name}
                    Email: {users.email}
                    Password: {users.password}
                    Terms: {JSON.stringify(users.terms)}
                </div>

        </div>
    )
}