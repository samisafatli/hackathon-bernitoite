import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from '@material-ui/core';

const CodeCard = ({ chatcode }) => {

    return(
        <Link to={`/chat/${chatcode}`}>
            <div style={{ marginBottom: 80, width: "100%" }}>
                <Card>
                    <CardContent>
                        <div>Código para acompanhar entrega</div>
                        <h3 style={{ color: "#5C307F" }}>{chatcode}</h3>
                    </CardContent>

                </Card>
            </div>
        </Link>
    )
}

export default CodeCard