import React from 'react';
import GoogleMaps from './GoogleMaps'
import CustomButton from './Button'
import Header from './Header'
import DataList from './DataList'

const NewDelivery = () => (
    <div>
        <Header/>
        <GoogleMaps label="Endereço de origem" />
        <GoogleMaps label="Endereço de destino" />
        <DataList />
        <CustomButton link="/sellerLoading" text="Buscar entregador" />
    </div>
)

export default NewDelivery