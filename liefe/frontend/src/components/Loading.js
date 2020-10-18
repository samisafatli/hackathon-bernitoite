import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, CardContent } from '@material-ui/core';

import { Link } from "react-router-dom";
import Header from './Header'

const Loading = () => (

    <div style={{ marginBottom: 100 }}>
        <Header />
        <Link to="/chat">
            <div style={{marginBottom: 80, width: "100%"}}>
                <Card>
                    <CardContent>
                        <div>Código para acompanhar entrega</div>
                        <h3 style={{ color: "#5C307F" }}>46070D4BF9</h3>
                    </CardContent>

                </Card>
            </div>
        </Link>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress />
        </div>
    </div>
)
export default Loading