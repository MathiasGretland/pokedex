//import pokemonQuery
import {  TableCell, TableRow,} from '@material-ui/core'
import { useGetPokemonByNameQuery } from '../services/pokemon'
import Loading from './Loading'
import { useState } from 'react'
import Popup from './Popup'

export const Pokemon = ({ name, checkedPicture, checkedWeight, checkedHeight, checkedTypes }) => {

    const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name)
    const [open, setOpen] = useState(false)
    if (isLoading || !data) {
      return <Loading />
    }

    return (
      <>
        {error && 
          <>Oh no, there was an error</>
        }
        <TableRow key={data.species.name} onClick={() => setOpen(true)} >
          <TableCell>{data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)}</TableCell>
          <TableCell style={checkedPicture ? {} : {visibility: `hidden`, display: `none`}}><img src={data.sprites.front_default} alt={data.species.name} /></TableCell>
          <TableCell>{data.id}</TableCell>
          <TableCell style={checkedWeight ? {} : {visibility: `hidden`, display: `none`}}>{data.weight}</TableCell>
          <TableCell style={checkedHeight ? {} : {visibility: `hidden`, display: `none`}}>{data.height}</TableCell>
          <TableCell style={checkedTypes ? {} : {visibility: `hidden`, display: `none`}}>{data.types.map((t, i) => data.types.length - 1 === i ? t.type.name : t.type.name + ", ")}</TableCell>
        </TableRow>
        <Popup open={open} setOpen={setOpen} data={data} />
      </>
    )
  }