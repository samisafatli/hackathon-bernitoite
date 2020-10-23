import React, { useState, useEffect } from 'react';
import CodeCard from './CodeCard'
import Header from './Header'
import DeliveryCard from './DeliveryCard'
import { getDeliveryByEmail } from '../client/liefeClient'

const DeliveryList = () => {

    const email = window.localStorage.getItem("user")
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
        <div>
            <Header />
            {deliveries.map(d => (
                <DeliveryCard delivery={d} key={d._id}/>

            ))}
        </div>
    )
}

export default DeliveryList