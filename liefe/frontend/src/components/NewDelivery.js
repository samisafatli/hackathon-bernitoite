import React from 'react';
import { TextField, Button } from '@material-ui/core'

import {
    Link
} from "react-router-dom";


const NewDelivery = () => (
    <div>
        <div>
            <TextField label="Endereço de origem" variant="outlined" />
        </div>
        <div>
            <TextField label="Endereço de destino" variant="outlined" />
        </div>
        <div>
            <TextField label="Categoria do produto" variant="outlined" />
        </div>
        <Link to="/loading">

            <Button fullWidth variant="contained" color="primary">
                Buscar entregador
        </Button>
        </Link>
    </div>
)

export default NewDelivery