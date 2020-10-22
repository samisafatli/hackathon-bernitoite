import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Header from './Header'
import CustomButton from './Button'
import TextInput from './TextInput'

import { saveUser } from '../client/liefeClient'

const RegisterForm = () => {
    const [username, setUsername] = useState(null)
    const [usernameError, setUsernameError] = useState(null)
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const [submit, setSubmit] = useState(null)
    let history = useHistory();


    const handleSubmit = async (event) => {
        if (!username) setUsernameError("Username precisa ser preenchido");
        else setUsernameError(false);

        if (!email) setEmailError("Email precisa ser preenchido");
        else setEmailError(false);

        if (!password) setPasswordError("Senha precisa ser preenchida");
        else setPasswordError(false);

        if (!username || !email || !password) {
            event.preventDefault();
            return;
        }

        const userData = {
            "username": username,
            "email": email,
            "password": password
        }

        try {
            await saveUser(userData);
            alert("Usurário cadastrado com sucesso");
            setSubmit(true);
        } catch (err) {
            alert(err);
            setSubmit(false);
        }
        event.preventDefault();
    }

    useEffect(() => {
        if(submit){
            history.push('/')
        }
    },[submit])

    return (
        <div>
            <Header title="Crie sua conta:"/>
            <TextInput error={usernameError} errorMessage={usernameError} text="Username" textFieldProps={{ onChange: e => setUsername(e.target.value) }} />
            <TextInput error={emailError} errorMessage={emailError} text="Email" textFieldProps={{ onChange: e => setEmail(e.target.value) }} />
            <TextInput error={passwordError} errorMessage={passwordError} text="Senha" textFieldProps={{ type: "password", onChange: e => setPassword(e.target.value) }} />
            <CustomButton text="Criar conta" onClick={handleSubmit} />
        </div>
    )
}

export default RegisterForm


// "#5C307F(roxo)"
// "#BEC100(verde)"
// "#FF8100(laranja)"