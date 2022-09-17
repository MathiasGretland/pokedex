import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { TableContainer } from "@mui/material";
import React, {useState} from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import Loading from "./Loading";
import { Pokemon } from "./Pokemon";

const Pokedex = ({pokemons}) => {
    return(
      <TableContainer component={Paper}>
        <Table className="pokedex">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Picture</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Types</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon, index) => (
            <Pokemon key={index} name={pokemon} /> //You need a key for every child (pokemon), for that we can easily use an index counter
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default Pokedex