import React, {useEffect, useState} from 'react';
import Header from './Header'
import {getDeliveryByEmail} from '../client/liefeClient'

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
            <ul>
                {
                    deliveries.map(d => <div>{d._id}</div>)
                }
            </ul>
        </div>
    )
}

export default Profile