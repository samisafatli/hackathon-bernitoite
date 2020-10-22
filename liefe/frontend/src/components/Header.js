import React, { useState } from 'react';
import Logo from '../images/LogoOrange.png'
import { getUserByEmail } from '../client/liefeClient'


const Header = ({title = "carregando..."}) => {

    const [user, setUser] = useState(null)

    const onLoad = async () => {
        const email = window.localStorage.getItem("user")
        const userData = await getUserByEmail(email);
        setUser(userData.username)
    }

    return (
    <header onLoad={onLoad} style={{ height: 80, width: "100%", backgroundColor: "#FF6e00", position: "fixed", top: 0, left: 0 }}>
        <div style={{ width: "auto", height: "100%", display:"flex", alignItems: "center", marginRight: "10px" }}>
            <div style={{ flex: 1 }}>
                <img src={Logo} style={{ width: 100 }} alt="Logo" />
            </div>
            <span style={{color: "#5C307F", fontWeight: 700}}>{user || title}</span>
        </div>
    </header>
    )
}

export default Header