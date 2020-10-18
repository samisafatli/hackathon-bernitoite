import React from 'react';
import Header from './Header'
import TextInput from './TextInput'
import CustomButton from './Button'
const TrackDelivery = () => {
    return (
        <div>
            <Header />
            <TextInput text="Código de entrega" />
            <CustomButton text="Confirmar" link="/buyerLoading"/>
        </div>
    )
}

export default TrackDelivery