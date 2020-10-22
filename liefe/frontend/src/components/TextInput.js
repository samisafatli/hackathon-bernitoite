import React from 'react';
import { TextField } from '@material-ui/core'

const TextInput = ({ error, errorMessage, text, textFieldProps }) => (
    <div style={{ margin: 10 }}>
        {error
            ? <TextField error={error} helperText={errorMessage} label={text} variant="outlined" {...textFieldProps} />
            : <TextField label={text} variant="outlined" {...textFieldProps} />
        }
    </div>
)

export default TextInput