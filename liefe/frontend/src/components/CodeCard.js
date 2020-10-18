import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const CodeCard = () => {
    const [chatId, setChatId] = useState("")

    useEffect(() => {
        setChatId(uuidv4().substring(10))
    },[])
return(
    <Link to={`/chat/${chatId}`}>
        <div style={{ marginBottom: 80, width: "100%" }}>
            <Card>
                <CardContent>
                    <div>Código para acompanhar entrega</div>
                    <h3 style={{ color: "#5C307F" }}>{chatId}</h3>
                </CardContent>

            </Card>
        </div>
    </Link>
)
}

export default CodeCard