import React from 'react';
import CustomButton from './Button'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../images/LogoOrange.png'

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#FF6e00",
        fontWeight: 700,
        height: 50,
        marginBottom: 20
    },
}));


const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <header style={{ height: 80, width: "100%", backgroundColor: "#FF6e00", position: "fixed", top: 0, left: 0 }}>
                <img src={Logo} style={{ width: 100, marginTop: 25 }} alt="Logo" />
            </header>
            <CustomButton className={classes.button} link="newDelivery" text="Nova Entrega" />
            <CustomButton className={classes.button} text="Acompanhar entrega" />
            <CustomButton className={classes.button} text="Entregar" />
        </div>
    )
}
export default Home