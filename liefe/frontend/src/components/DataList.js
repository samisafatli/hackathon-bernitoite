import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  margin:{
    marginLeft: theme.spacing(2)
  }
}));

const categories = [
  { name: "" },
  { name: "Autos e peças" },
  { name: "Para a sua casa" },
  { name: "Eletrônicos e celulares" },
  { name: "Música e Hobbies" },
  { name: "Esportes e lazer" },
  { name: "Artigos infantis" },
  { name: "animais de estimação" },
  { name: "moda e beleza" },
  { name: "comércio e escritório" }
]

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = useState({
    category: "",
  })

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.margin } htmlFor="category-native-simple">Categoria do produto</InputLabel>
        <Select
          autoWidth
          native
          value={state.category}
          onChange={handleChange}
          inputProps={{
            name: 'category',
            id: 'category-native-simple',
          }}
          variant="outlined"
        >
          {categories.map(category => (
            <option value={category.name}>{category.name}</option>
          ))
          }
        </Select>
      </FormControl>
    </div>
  )
}
