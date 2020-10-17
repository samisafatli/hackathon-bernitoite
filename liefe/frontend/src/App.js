import React from 'react';
import './App.css';
import { TextField, Button } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <div>
        <div>
          Acesse sua conta
        </div>
        <div>
          <TextField label="Email" variant="outlined" />
        </div>
        <div>
          <TextField label="Senha" variant="outlined" />
        </div>
        <Button fullWidth variant="contained" color="primary">
          Entre
        </Button>
        <Button fullWidth variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>
    </div>
  );
}

export default App;
