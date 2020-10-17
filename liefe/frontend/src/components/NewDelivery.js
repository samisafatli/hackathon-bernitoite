import React from 'react';
import { TextField, Button } from '@material-ui/core'


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
        <Button fullWidth variant="contained" color="primary">
            Buscar entregador
        </Button>
    </div>
)

export default NewDelivery