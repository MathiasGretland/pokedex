// Need to use the React-specific entry point to import createApi
import { FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TAbilities, TCries, THeldItems, TPastTypes, TForms, TTypes, TSprites, TGameIndices, TMoves, TPastAbilities, TSpecies, TStats } from '../api/Index';

// interface for: /pokemon/{name} 
export interface IPokemon {
  abilities: TAbilities[];
  base_experience: number;
  cries: TCries;
  forms: TForms[]
  game_indices: TGameIndices[];
  height: number;
  held_items?: THeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: TMoves[];
  name: string;
  order: number;
  past_abilities: TPastAbilities[];
  past_types?: TPastTypes[];
  species: TSpecies;
  sprites: TSprites;
  stats: TStats[];
  types: TTypes[];
  weight: number;
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    // Fetch multiple pokemons
    getMultiplePokemonsByName: builder.query<IPokemon[], string[]>({
      async queryFn(names, _queryApi, _extraOptions, baseQuery) {
        try {
          const results = await Promise.all(
            names.map(async (name) => {
              const result = await baseQuery(`pokemon/${name}`);
              if (result.error) throw result.error;
              return result.data as IPokemon;
            })
          );
          return { data: results };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetMultiplePokemonsByNameQuery } = pokemonApi