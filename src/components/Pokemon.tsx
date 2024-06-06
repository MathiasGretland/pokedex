//import pokemonQuery
import { TableCell, TableRow, } from '@material-ui/core'
import { IPokemon } from '../api/pokemon'
import { useState } from 'react'
import Popup from './Popup'
import { Typography } from '@mui/material'
import { PokemonType, getTypeIcon } from '../utils/IconUtil'

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
        <TableCell><Typography fontFamily={"Pokemon"}>{data.id}</ Typography></TableCell>
        <TableCell style={checkedWeight ? {} : { visibility: `hidden`, display: `none` }}><Typography fontFamily={"Pokemon"}>{data.weight}</ Typography></TableCell>
        <TableCell style={checkedHeight ? {} : { visibility: `hidden`, display: `none` }}><Typography fontFamily={"Pokemon"}>{data.height}</ Typography></TableCell>
        <TableCell style={checkedTypes ? {} : { visibility: `hidden`, display: `none` }}>{data.types.map((t, i) => <img src={getTypeIcon(t.type.name as PokemonType)} alt="None" style={{marginRight: "2px"}} />)}</TableCell>
      </TableRow>
      <Popup open={open} setOpen={setOpen} data={data} />
    </>
  )
}

export default Pokemon