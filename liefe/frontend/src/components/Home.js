import React from 'react';
import CustomButton from './Button'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#FF8100",
        fontWeight: 700,
        height: 50,
        marginBottom: 20
    },
}));


const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <CustomButton className={classes.button} link="newDelivery" text="Nova Entrega" />
            <CustomButton className={classes.button} text="Acompanhar entrega" />
            <CustomButton className={classes.button} text="Entregar" />
        </div>
    )
}
export default Home