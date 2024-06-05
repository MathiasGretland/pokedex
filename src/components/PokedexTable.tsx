import React from "react";

import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { TableContainer } from "@mui/material";
import Pokemon from "./Pokemon";
import { IPokemon } from "../api/pokemon";
import Loading from "./Loading";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface PokedexProps {
  pokemonData: IPokemon[] | undefined
  checkedPicture: boolean;
  checkedWeight: boolean;
  checkedHeight: boolean;
  checkedTypes: boolean;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
}

//const PokedexTable = ({ pokemons, checkedPicture, checkedWeight, checkedHeight, checkedTypes }) => {
const PokedexTable = (props: PokedexProps) => {  
  const { pokemonData, checkedHeight, checkedPicture, checkedTypes, checkedWeight, isLoading, error } = props;

  if (isLoading) {
    return <Loading />
  }
  if (!pokemonData) {
    return <>Couldn't find the pokemon your looking for. Are you sure its spelled right?</>
  }

  return (
    <>
    {error &&
      <>Oh no, there was an error</>
    }
    <TableContainer component={Paper}>
      <Table>
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
          {pokemonData?.map((pokemon, index) => (
            <Pokemon key={index} data={pokemon} checkedPicture={checkedPicture} checkedWeight={checkedWeight} checkedHeight={checkedHeight} checkedTypes={checkedTypes} /> //You need a key for every child (pokemon), for that we can easily use an index counter
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  )
}

export default PokedexTable