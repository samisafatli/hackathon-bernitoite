import React from 'react';
import { TextField } from '@material-ui/core'

const TextInput = ({ text, textFieldProps }) => (
    <div style={{ margin: 10 }}>
        <TextField label={text} variant="outlined" {...textFieldProps} />
    </div>
)

export default TextInput