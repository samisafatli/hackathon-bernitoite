import React from 'react';
import TextInput from './TextInput'
import CustomButton from './Button'
import Header from './Header'

const NewDelivery = () => (
    <div>
        <Header/>
        <TextInput text="Endereço de origem" />
        <TextInput text="Endereço de destino" />
        <TextInput text="Categoria do produto" />
        <CustomButton link="/loading" text="Buscar entregador" />
    </div>
)

export default NewDelivery