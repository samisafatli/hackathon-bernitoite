import React from 'react';
import { Button } from '@material-ui/core'
import {
    Link
} from "react-router-dom";

const Home = () => (
    <div>
        <Link to="/newDelivery">
            <Button fullWidth variant="contained" color="primary">
                    Nova Entrega
            </Button>
        </Link>
        <Button fullWidth variant="contained" color="primary">
            Acompanhar entrega
        </Button>
        <Button fullWidth variant="contained" color="primary">
            Entregar
        </Button>
    </div>
)
export default Home