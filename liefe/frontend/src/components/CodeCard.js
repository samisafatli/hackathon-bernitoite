import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from '@material-ui/core';

const CodeCard = () => (
    <Link to="/chat">
        <div style={{ marginBottom: 80, width: "100%" }}>
            <Card>
                <CardContent>
                    <div>Código para acompanhar entrega</div>
                    <h3 style={{ color: "#5C307F" }}>46070D4BF9</h3>
                </CardContent>

            </Card>
        </div>
    </Link>
)

export default CodeCard