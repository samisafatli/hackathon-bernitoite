import React from 'react';
import { TextField, Button } from '@material-ui/core'
import {
    Link
  } from "react-router-dom";
const LoginForm = () => (
    <div>
        <div>
            Acesse sua conta
        </div>
        <div>
            <TextField label="Email" variant="outlined" />
        </div>
        <div>
            <TextField label="Senha" variant="outlined" />
        </div>
        <Link to="/home">
            <Button fullWidth variant="contained" color="primary">
                Entre
            </Button>
        </Link>
        <Button fullWidth variant="contained" color="primary">
            Cadastrar
        </Button>
    </div>
)

export default LoginForm