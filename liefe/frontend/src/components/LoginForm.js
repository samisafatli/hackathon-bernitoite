import React from 'react';
import { TextField, Button } from '@material-ui/core'

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
        <Button fullWidth variant="contained" color="primary">
            Entre
        </Button>
        <Button fullWidth variant="contained" color="primary">
            Cadastrar
        </Button>
    </div>
)

export default LoginForm