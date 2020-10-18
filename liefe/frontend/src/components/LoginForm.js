import React from 'react';
import logo from '../images/Logo.png'
import { makeStyles } from '@material-ui/core/styles'

import CustomButton from './Button'
import TextInput from './TextInput'

const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: "#FF8100",
      fontWeight: 700,
    },
  }));

const LoginForm = () => {
    const classes = useStyles();

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
        <CustomButton text="Entre" className={classes.button} link="/home" />
        <CustomButton text="Cadastro" className={classes.button} />
    </div>
    )
}

export default LoginForm


// "#5C307F(roxo)"
// "#BEC100(verde)"
// "#FF8100(laranja)"