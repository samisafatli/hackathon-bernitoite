import React from 'react';

import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";


const CustomButton = ({ text, className, link }) => (
    <div style={{ margin: 10 }}>
        {link ?
            <Link to={link}>
                <Button className={className} fullWidth variant="contained" color="primary">
                    {text}
                </Button>
            </Link>
            :
            <Button className={className} fullWidth variant="contained" color="primary">
                {text}
            </Button>
        }

    </div>
)

export default CustomButton