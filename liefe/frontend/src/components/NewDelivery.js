import React from 'react';
import TextInput from './TextInput'
import CustomButton from './Button'
import Header from './Header'
import DataList from './DataList'

const categoryList = [
    { name:"Imóveis", id:1 },
    { name:"Autos e peças", id:2 },
    { name:"Para a sua casa", id:3 },
    { name:"Eletrônicos e celulares", id: 4 },
    { name:"Música e Hobbies", id: 5 },
    { name:"Esportes e lazer", id: 6 },
    { name:"Artigos infantis", id: 7 },
    { name:"animais de estimação", id: 8 },
    { name:"moda e beleza", id: 9 },
    { name:"agro industria", id: 10 },
    { name: "comércio e escritório", id: 11 },
]

const NewDelivery = () => (
    <div>
        <Header/>
        <TextInput text="Endereço de origem" />
        <TextInput text="Endereço de destino" />
        <DataList data={categoryList}/>
        <CustomButton link="/sellerLoading" text="Buscar entregador" />
    </div>
)

export default NewDelivery