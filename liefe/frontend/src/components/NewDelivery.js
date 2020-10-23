import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import GoogleMaps from './GoogleMaps'
import CustomButton from './Button'
import Header from './Header'
import DataList from './DataList'
import { saveDelivery } from '../client/liefeClient'

const NewDelivery = () => {

    const [destiny, setDestiny] = useState(null)
    const [origin, setOrigin] = useState(null)
    const [category, setCategory] = useState(null)
    
    const [chatcode, setChatCode] = useState(null)
    let history = useHistory()

    const handleSubmit = async () => {
        const email = window.localStorage.getItem("user")
        const deliveryData = {
            origin,
            destiny,
            email,
            categoryIdx: category,
        }
        const data = await saveDelivery(deliveryData)
        setChatCode(data.payload._id)
    }

    useEffect(() => {
        if(chatcode){
            console.log(chatcode)
            history.push({
                pathname: '/sellerLoading',
                state: { chatcode: chatcode }
            })
        }
    },[chatcode, history])

    return (
        <div>
            <Header/>
            <GoogleMaps label="Endereço de origem" setData={setOrigin}/>
            <GoogleMaps label="Endereço de destino" setData={setDestiny}/>
            <DataList setData={setCategory} />
            <CustomButton text="Buscar entregador" onClick={handleSubmit} />
        </div>
    )
}

export default NewDelivery