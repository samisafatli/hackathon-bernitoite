import React, { useEffect, useState } from 'react';
import Header from './Header'
import DeliveryList from './DeliveryList'
import GoogleMaps from './GoogleMaps'
import CustomButton from './Button'

const DeliveryPage = () => {
    const [destiny, setDestiny] = useState(null)
    const [origin, setOrigin] = useState(null)
    const [update, setUpdate] = useState(null)
    const handleSubmit = async () => {
        setUpdate(true)
    }

    useEffect(() => {

    },[update])

    return (
        <div style={{width: "100%"}}>
            <Header />
            <div style={{position: "fixed", top: 80, left: 0, width: "100%", zIndex: 1, backgroundColor: "rgb(255, 110, 0)"}}>
                <GoogleMaps label="Endereço de origem" setData={setOrigin} />
                <GoogleMaps label="Endereço de destino" setData={setDestiny} />
                <CustomButton text="Buscar entregas" onClick={handleSubmit} />

            </div>
            <div style={{marginTop: 400}}>
            { destiny && origin && update && <DeliveryList all destiny={destiny} origin={origin}/>}

            </div>

        </div>
    )
}

export default DeliveryPage