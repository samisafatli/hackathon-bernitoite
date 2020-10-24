import React, { useState, useEffect } from 'react';
import Header from './Header'
import DeliveryCard from './DeliveryCard'
import { getDeliveryByEmail, deleteDeliveryById, getDeliveryAll } from '../client/liefeClient'

const DeliveryList = ({profile, destiny, origin, all}) => {

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
            let deliveries = []
            if(!all){
                deliveries = await getDeliveryByEmail(email) || []
            } else {
                deliveries = await getDeliveryAll() || []
            }
            
            if(destiny && origin){
                const filteredDeliveries = deliveries.filter(d => d.origin.place_id === origin .place_id && d.destiny.place_id === destiny.place_id)
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
                <DeliveryCard profile={profile} handleDelete={handleDelete} delivery={d} key={d._id} />
            ))}
        </div>
    )
}

export default DeliveryList