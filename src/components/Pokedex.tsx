import React from "react";

import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { TableContainer } from "@mui/material";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, checkedPicture, checkedWeight, checkedHeight, checkedTypes }) => {
  return (
    <TableContainer component={Paper}>
      <Table className="pokedex">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell style={checkedPicture ? {} : { visibility: `hidden`, display: `none` }} >Picture</TableCell>
            <TableCell>Id</TableCell>
            <TableCell style={checkedWeight ? {} : { visibility: `hidden`, display: `none` }} >Weight</TableCell>
            <TableCell style={checkedHeight ? {} : { visibility: `hidden`, display: `none` }} >Height</TableCell>
            <TableCell style={checkedTypes ? {} : { visibility: `hidden`, display: `none` }} >Types</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon, index) => (
            <Pokemon key={index} name={pokemon} checkedPicture={checkedPicture} checkedWeight={checkedWeight} checkedHeight={checkedHeight} checkedTypes={checkedTypes} /> //You need a key for every child (pokemon), for that we can easily use an index counter
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Pokedex