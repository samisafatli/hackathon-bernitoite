import React, { useState } from 'react';
import GoogleMaps from './GoogleMaps'
import CustomButton from './Button'
import Header from './Header'
import DataList from './DataList'

const NewDelivery = () => {

    const [destiny, setDestiny] = useState(null)
    const [origin, setOrigin] = useState(null)
    
    // console.log(origin, destiny)

    return (
        <div>
            <Header/>
            <GoogleMaps label="Endereço de origem" setData={setOrigin}/>
            <GoogleMaps label="Endereço de destino" setData={setDestiny}/>
            <DataList />
            <CustomButton link="/sellerLoading" text="Buscar entregador" />
        </div>
    )
}

export default NewDelivery