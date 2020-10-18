import React from 'react';
import Logo from '../images/LogoOrange.png'


const Header = () => {
    const user = window.localStorage.getItem("username")

    return (
    <header style={{ height: 80, width: "100%", backgroundColor: "#FF6e00", position: "fixed", top: 0, left: 0 }}>
        <img src={Logo} style={{ width: 100, marginTop: 25 }} alt="Logo" />
        <span style={{marginLeft: 160, color: "#5C307F", fontWeight: 700}}>{user}</span>
    </header>
    )
}

export default Header