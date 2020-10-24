import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#FF8100",
        fontWeight: 700,
    },
}));

const CustomButton = ({ text, link, onClick, fullWidth }) => {
    const classes = useStyles();

    return (
        <div style={fullWidth ? { margin: 10, width: "100%" } : { margin: 10 }}>
            {link ?
                <Link to={link}>
                    <Button onClick={onClick} className={classes.button} fullWidth variant="contained" color="primary">
                        {text}
                    </Button>
                </Link>
                :
                <Button onClick={onClick} className={classes.button} fullWidth variant="contained" color="primary">
                    {text}
                </Button>
            }

        </div>
    )
}

export default CustomButton