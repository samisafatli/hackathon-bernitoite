import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Logo from '../images/LogoOrange.png'
import Avatar from '@material-ui/core/Avatar';

import { getUserByEmail } from '../client/liefeClient'


const Header = ({title = "carregando...", shouldLogin = true}) => {

    const [user, setUser] = useState(null)
    const [label, setLabel] = useState(title)

    let history = useHistory()

    const onLoad = async () => {
        if (!shouldLogin) return;

        try {
            const username = window.localStorage.getItem("username")
            setLabel(username)
            setUser(true)
        } catch (error) {
            goToHome();
        }
    }

    const logout = () => {
        window.localStorage.removeItem("user")
        goToHome();
    }

    const goToProfile = () => {
        history.push({
            pathname: '/profile'
        })
    }
    const goToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    return (
    <header onLoad={onLoad} style={{ height: 80, width: "100%", backgroundColor: "#FF6e00", position: "fixed", top: 0, left: 0 }}>
        <div style={{ width: "auto", height: "100%", display:"flex", alignItems: "center", marginRight: "10px" }}>
            <div style={{ flex: 1 }} onClick={goToHome}>
                <img src={Logo} style={{ width: 100 }} alt="Logo" />
            </div>
            <div style={{ flexDirection: "column", display: "flex", alignItems: "flex-end" }}>
                {/* <span style={{color: "#5C307F", fontWeight: 700}}>{label}</span> */}
                <div onClick={goToProfile}><Avatar>{label[0].toUpperCase()}</Avatar></div>
                {/* {user && <span style={{color: "#5C307F", fontWeight: 700}} onClick={logout}> sair</span>} */}
            </div>
        </div>
    </header>
    )
}

export default Header