import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Header from './Header'
import TextInput from './TextInput'
import CustomButton from './Button'
const TrackDelivery = () => {
    // const [code, setCode] = useState()
    let history = useHistory();

    const handleClick = () => {
        // if(code){
        history.push(`/chat/09584b5cdd90c367af5`)
        // }
    }

    useEffect(() => {
    }, [])
    return (
        <div>
            <Header />
            <TextInput text="Código de entrega" />
            <CustomButton text="Confirmar" onClick={handleClick} />
        </div>
    )
}

export default TrackDelivery