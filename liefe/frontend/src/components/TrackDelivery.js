import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Header from './Header'
import TextInput from './TextInput'
import CustomButton from './Button'
const TrackDelivery = () => {
    const [code, setCode] = useState()
    let history = useHistory();

    const handleClick = () => {
        if(code){
            history.push(`/chat/${code}`)
        }
    }

    useEffect(() => {
    }, [])
    return (
        <div>
            <Header />
            <TextInput text="Código de entrega" textFieldProps={{ onChange: e => setCode(e.target.value) }} />
            <CustomButton text="Confirmar" onClick={handleClick} />
        </div>
    )
}

export default TrackDelivery