import React from 'react';
import { TextField } from '@material-ui/core'

const TextInput = ({ text }) => (
    <div style={{ margin: 10 }}>
        <TextField label={text} variant="outlined" />
    </div>
)

export default TextInput