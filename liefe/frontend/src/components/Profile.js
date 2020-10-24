import React, {useEffect, useState} from 'react';
import Header from './Header'
import {getDeliveryByEmail} from '../client/liefeClient'
import DeliveryList from './DeliveryList'

const Profile = () => {
    const email = window.localStorage.getItem("user")
    const [deliveries, setDeliveries] = useState([])

    useEffect( () => {
        const  fetchDeliveries = async () => {
            const deliveries = await getDeliveryByEmail(email) || []
            console.log("devlies", deliveries)
            setDeliveries(deliveries)
        }

        fetchDeliveries()
    }, [])

    return (
        <div>
            <Header />
            <DeliveryList />
        </div>
    )
}

export default Profile