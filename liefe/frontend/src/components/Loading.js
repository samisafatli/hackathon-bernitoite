import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './Header'
import CodeCard from './CodeCard'

const Loading = ({ seller }) => (

    <div style={{ marginBottom: 100 }}>
        <Header />
        { seller && <CodeCard /> }
        <h3 style={{marginBottom: 40, color: "#5C307F"}}>Procurando o entregador ideal para você</h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress />
        </div>
    </div>
)
export default Loading