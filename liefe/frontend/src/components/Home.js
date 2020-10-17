import React from 'react';
import { Button } from '@material-ui/core'


const Home = () => (
    <div>
        <Button fullWidth variant="contained" color="primary">
            Nova Entrega
        </Button>
        <Button fullWidth variant="contained" color="primary">
            Acompanhar entrega
        </Button>
        <Button fullWidth variant="contained" color="primary">
            Entregar
        </Button>
    </div>
)
export default Home