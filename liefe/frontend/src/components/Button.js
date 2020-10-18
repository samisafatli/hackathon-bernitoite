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

const CustomButton = ({ text, className, link }) => {
    const classes = useStyles();

    return (
        <div style={{ margin: 10 }}>
            {link ?
                <Link to={link}>
                    <Button className={classes.button} fullWidth variant="contained" color="primary">
                        {text}
                    </Button>
                </Link>
                :
                <Button className={classes.button} fullWidth variant="contained" color="primary">
                    {text}
                </Button>
            }

        </div>
    )
}

export default CustomButton