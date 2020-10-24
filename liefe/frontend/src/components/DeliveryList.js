import React, { useState, useEffect } from 'react';
import Header from './Header'
import DeliveryCard from './DeliveryCard'
import { getDeliveryByEmail, deleteDeliveryById } from '../client/liefeClient'

const DeliveryList = ({profile, destiny, origin}) => {

    const email = window.localStorage.getItem("user")
    const [deliveries, setDeliveries] = useState([])
    const [hasDeliveries, setHasDeliveries] = useState(true)

    const handleDelete = async (id) => {
        await deleteDeliveryById(id)
        const newDeliveries = deliveries.filter(d => d._id !== id)
        console.log(newDeliveries)
        setDeliveries(newDeliveries)
    }

    useEffect(() => {
        const fetchDeliveries = async () => {
            const deliveries = await getDeliveryByEmail(email) || []
            if(destiny && origin){
                const filteredDeliveries = deliveries.filter(d => d.origin.place_id === origin && d.destiny.place_id === destiny)
                setDeliveries(filteredDeliveries)
            }
            else{
                setDeliveries(deliveries)
            }
            if(!deliveries.length){
                setHasDeliveries(false)
            }
        }
        if(!deliveries.length && hasDeliveries){
            fetchDeliveries()
        }

    }, [deliveries])
    return (
        <div>
            {deliveries.map(d => (
                <DeliveryCard profile handleDelete={handleDelete} delivery={d} key={d._id} />
            ))}
        </div>
    )
}

export default DeliveryList