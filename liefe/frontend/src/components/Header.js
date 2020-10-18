import React from 'react';
import Logo from '../images/LogoOrange.png'


const Header = () => (
    <header style={{ height: 80, width: "100%", backgroundColor: "#FF6e00", position: "fixed", top: 0, left: 0 }}>
        <img src={Logo} style={{ width: 100, marginTop: 25 }} alt="Logo" />
    </header>
)

export default Header