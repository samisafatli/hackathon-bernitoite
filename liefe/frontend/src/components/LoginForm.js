import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import logo from '../images/Logo.png'

import CustomButton from './Button'
import TextInput from './TextInput'
import useLogin from './useLogin'

const LoginForm = () => {
    const [user, login] = useLogin()
    let history = useHistory();

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleLogin = () => {
        if (!user) {
            login(email, password)
        }
    }

    useEffect(() => {
        if(user){
            history.push('/home')
        }
    },[user])

    return (
        <div style={{ marginBottom: 40 }}>
            <header style={{ marginBottom: 40 }}>
                <img src={logo} style={{ width: 150 }} alt="Logo" />
                <h3 style={{ margin: 10, color: "#5C307F" }}>
                    Acesse sua conta
            </h3>
            </header>
            <TextInput text="Email" textFieldProps={{ onChange: e => setEmail(e.target.value) }} />
            <TextInput text="Senha" textFieldProps={{ type: "password", onChange: e => setPassword(e.target.value) }} />
            <CustomButton text="Entre" onClick={handleLogin} />
            <CustomButton text="Cadastro" />
        </div>
    )
}

export default LoginForm


// "#5C307F(roxo)"
// "#BEC100(verde)"
// "#FF8100(laranja)"