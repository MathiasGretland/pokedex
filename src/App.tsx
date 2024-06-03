import React, { useState } from "react";
//import styles
//import "./styles/app.scss"
//import components
import Pokedex from './components/Pokedex'
//Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import { Checkbox, Typography } from "@mui/material";
import Grid from "@material-ui/core/Grid";
 
function App() {

  //useState for checkboxes
  const [checkedPicture, setCheckedPicture] = useState(true)
  const [checkedWeight, setCheckedWeight] = useState(true)
  const [checkedHeight, setCheckedHeight] = useState(true)
  const [checkedTypes, setCheckedTypes] = useState(true)

  const pokemons = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'articuno', 'zapdos', 'moltres', 'dragonite', 'mewtwo', 'mew', 'clefairy']

  //Handlers for checkboxes
  const pictureHandler = () => {
    setCheckedPicture(!checkedPicture)
  }

  const weightHandler = () => {
    setCheckedWeight(!checkedWeight)
  }

  const heightHandler = () => {
    setCheckedHeight(!checkedHeight)
  }

  const typesHandler = () => {
    setCheckedTypes(!checkedTypes)
  }

  return (
    <Box sx={{ padding: "0rem 1rem 0rem 1rem", maxWidth: "1200px", margin: "0 auto"}}>
      <Box sx={{maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row"}}>
        <Typography variant="h1" fontSize={"3rem"}>POKEDEX</Typography>
        <FontAwesomeIcon icon={faGamepad} size="3x" />

        <Box sx={{marginLeft: 3}}>
          <Typography variant="h3" fontSize={"18px"} fontWeight={"fontWeightBold"}>Hide column?</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Typography variant="body2">Picture<Checkbox onChange={pictureHandler} size="small"/></Typography>
            </Grid>
            <Grid item xs={6} md={2}>
            <Typography variant="body2">Weight<Checkbox onChange={weightHandler} size="small"/></Typography>
            </Grid>
            <Grid item xs={6} md={2}>
            <Typography variant="body2">Height<Checkbox onChange={heightHandler} size="small"/></Typography>
            </Grid>
            <Grid item xs={6} md={2}>
            <Typography variant="body2">Types<Checkbox onChange={typesHandler} size="small"/></Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Pokedex pokemons={pokemons} checkedPicture={checkedPicture} checkedWeight={checkedWeight} checkedHeight={checkedHeight} checkedTypes={checkedTypes} />
    </Box>
  )
}

export default App;