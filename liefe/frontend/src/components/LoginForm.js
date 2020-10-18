import React from 'react';
import logo from '../images/Logo.png'

import CustomButton from './Button'
import TextInput from './TextInput'

const LoginForm = () => {

    return (
    <div style={{marginBottom: 40}}>
        <header style={{marginBottom: 40}}>
            <img src={logo}  style={{width: 150}} alt="Logo"/>
            <h3 style={{ margin: 10, color: "#5C307F" }}>
                Acesse sua conta
            </h3>
        </header>
        <TextInput text="Email" />
        <TextInput text="Senha" />
        <CustomButton text="Entre" link="/home" />
        <CustomButton text="Cadastro" />
    </div>
    )
}

export default LoginForm


// "#5C307F(roxo)"
// "#BEC100(verde)"
// "#FF8100(laranja)"