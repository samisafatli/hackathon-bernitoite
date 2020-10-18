import React from 'react';
import CustomButton from './Button'
import Header from './Header'

const Home = () => {

    return (
        <div>
            <Header/>
            <CustomButton link="newDelivery" text="Nova Entrega" />
            <CustomButton text="Acompanhar entrega" />
            <CustomButton text="Entregar" />
        </div>
    )
}
export default Home