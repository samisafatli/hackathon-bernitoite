import React from 'react';
import Header from './Header'
import DeliveryList from './DeliveryList'

const Profile = () => {
    const email = window.localStorage.getItem("user")
    const username = window.localStorage.getItem("username")

    return (
        <div>
            <Header />
            <div style={{ position: "fixed", width: "100%", top: 80, left: 0, zIndex: 1, backgroundColor: "rgb(255, 110, 0)", padding: 10}}>
                <h3>Usuário: {username}</h3>
                <div>Email: {email}</div>
            </div>
            <div style={{marginTop: 400}}>
                <DeliveryList profile />
            </div>

        </div>
    )
}

export default Profile