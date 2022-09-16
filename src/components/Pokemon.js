//import pokemonQuery
import { useGetPokemonByNameQuery } from '../services/pokemon'

export const Pokemon = ({ name, pollingInterval, }) => {

    const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name, { pollingInterval, })
    
    return (
      <>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>
              {data.species.name} {isFetching ? '...' : ''}
            </h3>
            <img src={data.sprites.front_default} alt={data.species.name} />
            <h1>{data.id}</h1>
          </>
        ) : null}
      </>
    )
  }

  //Pokemon burde basically ha en pokedex klasse som man kan designe rundt