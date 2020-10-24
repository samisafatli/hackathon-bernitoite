import React, { useEffect, useState } from 'react';
import Header from './Header'
import { getDeliveryByEmail } from '../client/liefeClient'
import DeliveryList from './DeliveryList'

const Profile = () => {
    const email = window.localStorage.getItem("user")
    const username = window.localStorage.getItem("username")
    const [deliveries, setDeliveries] = useState([])

    useEffect(() => {
        const fetchDeliveries = async () => {
            const deliveries = await getDeliveryByEmail(email) || []
            console.log("devlies", deliveries)
            setDeliveries(deliveries)
        }

        fetchDeliveries()
    }, [])

    return (
        <div style={{ marginTop: 500 }}>
            <Header />
            <div style={{margin: 40}}>
                <h3>Usuário: {username}</h3>
                <div>Email: {email}</div>
            </div>
            <DeliveryList profile />

        </div>
    )
}

export default Profile