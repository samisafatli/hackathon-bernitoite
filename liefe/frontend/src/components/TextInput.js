import React from 'react';
import { TextField } from '@material-ui/core'

const TextInput = ({ error, errorMessage, text, textFieldProps, value, placeholder }) => (
    <div style={{ margin: 10 }}>
        {error
            ? <TextField placeholder={placeholder} value={value} error={error} helperText={errorMessage} label={text} variant="outlined" {...textFieldProps} />
            : <TextField placeholder={placeholder} value={value} label={text} variant="outlined" {...textFieldProps} />
        }
    </div>
)

export default TextInput