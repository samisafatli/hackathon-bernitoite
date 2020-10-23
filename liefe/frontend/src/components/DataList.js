import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import categories from "../data/categories"

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
    width: "100%"
  },
}));



export default function NativeSelects(props) {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    props.setData(event.target.value)
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ padding: "0 10px" }}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Categoria</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="Categoria"
          value={category}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
          displayEmpty
        >
          {
            categories.map((category, idx) => (
              <MenuItem key={idx} value={category.value}>{category.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}
