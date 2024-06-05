//import pokemonQuery
import { TableCell, TableRow, } from '@material-ui/core'
import { IPokemon, useGetPokemonByNameQuery } from '../api/pokemon'
import Loading from './Loading'
import { useState } from 'react'
import Popup from './Popup'
import { Typography } from '@mui/material'

interface PokedexProps {
  data: IPokemon;
  checkedPicture: boolean;
  checkedWeight: boolean;
  checkedHeight: boolean;
  checkedTypes: boolean;
}

const Pokemon = (props: PokedexProps) => {
  const { data, checkedPicture, checkedWeight, checkedHeight, checkedTypes } = props;

  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow key={data.species.name} onClick={() => setOpen(true)} >
        <TableCell><Typography fontFamily={"Pokemon"}>{data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)}</Typography> </TableCell>
        <TableCell style={checkedPicture ? {} : { visibility: `hidden`, display: `none` }}><img src={data.sprites.front_default} alt={data.species.name} /></TableCell>
        <TableCell>{data.id}</TableCell>
        <TableCell style={checkedWeight ? {} : { visibility: `hidden`, display: `none` }}>{data.weight}</TableCell>
        <TableCell style={checkedHeight ? {} : { visibility: `hidden`, display: `none` }}>{data.height}</TableCell>
        <TableCell style={checkedTypes ? {} : { visibility: `hidden`, display: `none` }}>{data.types.map((t, i) => data.types.length - 1 === i ? t.type.name : t.type.name + ", ")}</TableCell>
      </TableRow>
      <Popup open={open} setOpen={setOpen} data={data} />
    </>
  )
}

export default Pokemon