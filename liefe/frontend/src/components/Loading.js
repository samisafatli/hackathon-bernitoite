import React from 'react';
import { useLocation } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './Header'
import CodeCard from './CodeCard'

const Loading = ({ seller }) => {
    const location = useLocation();
    const { chatcode } = location.state || {}

    return (
        <div style={{ marginBottom: 100 }}>
            <Header />
            { seller && <CodeCard chatcode={chatcode} /> }
            <h3 style={{marginBottom: 40, color: "#5C307F"}}>Procurando o entregador ideal para você</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CircularProgress />
            </div>
        </div>
    )
}
export default Loading