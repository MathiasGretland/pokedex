import React, { useState } from "react";

import PokedexTable from './PokedexTable'
//Import icons
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import Box from "@mui/material/Box";
import { Checkbox, Typography } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { useGetMultiplePokemonsByNameQuery } from "../api/pokemon";

const Pokedex = () => {

  //useState for checkboxes
  const [checkedPicture, setCheckedPicture] = useState(true)
  const [checkedWeight, setCheckedWeight] = useState(true)
  const [checkedHeight, setCheckedHeight] = useState(true)
  const [checkedTypes, setCheckedTypes] = useState(true)

  const pokemons = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'articuno', 'zapdos', 'moltres', 'dragonite', 'mewtwo', 'mew', 'clefairy']

  // Fetch the pokemons
  const { data: pokemonData, error, isLoading } = useGetMultiplePokemonsByNameQuery(pokemons);

  console.log("DATA", pokemonData)

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
    <Box sx={{ padding: "0rem 1rem 0rem 1rem", maxWidth: "63vw", margin: "0 auto"}}>
      <Box sx={{maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row"}}>
        <Typography variant="h1" fontSize={"3rem"} fontFamily={"Pokemon"}>POKEDEX</Typography>
        <CatchingPokemonTwoToneIcon fontSize="large" />

        <Box sx={{marginLeft: 3}}>
          <Typography variant="h3" fontSize={"18px"} fontWeight={"fontWeightBold"} fontFamily={"Pokemon"}>Hide column?</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontFamily={"Pokemon"}>Picture<Checkbox onChange={pictureHandler} size="small"/></Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontFamily={"Pokemon"}>Weight<Checkbox onChange={weightHandler} size="small"/></Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontFamily={"Pokemon"}>Height<Checkbox onChange={heightHandler} size="small"/></Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="body2" fontFamily={"Pokemon"}>Types<Checkbox onChange={typesHandler} size="small"/></Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <PokedexTable pokemonData={pokemonData} isLoading={isLoading} error={error} checkedPicture={checkedPicture} checkedWeight={checkedWeight} checkedHeight={checkedHeight} checkedTypes={checkedTypes} />
    </Box>
    )
}

export default Pokedex