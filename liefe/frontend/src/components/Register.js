import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import logo from '../images/Logo.png'

import CustomButton from './Button'
import TextInput from './TextInput'

const RegisterForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const handleSubmit = (event) => {    
        const userData = {
            "email": email,
            "passasword": password
        }

        console.log(userData);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        fetch('http://localhost:5001/user', {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            body: JSON.stringify(userData)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }

    return (
        <div style={{ marginBottom: 40 }}>
            <header style={{ marginBottom: 40 }}>
                <img src={logo} style={{ width: 150 }} alt="Logo" />
                <h3 style={{ margin: 10, color: "#5C307F" }}>
                    Crie sua conta
                </h3>
            </header>
            <TextInput error={emailError} errorMessage="Endereço de email inválido" text="Email" textFieldProps={{ onChange: e => setEmail(e.target.value) }} />
            <TextInput error={passwordError} errorMessage="Senha inválida" text="Senha" textFieldProps={{ type: "password", onChange: e => setPassword(e.target.value) }} />
            <CustomButton text="Criar conta" onClick={handleSubmit} />
        </div>
    )
}

export default RegisterForm


// "#5C307F(roxo)"
// "#BEC100(verde)"
// "#FF8100(laranja)"