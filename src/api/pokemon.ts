// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TAbilities, TCries, THeldItems, TPastTypes, TForms, TTypes, TSprites, TGameIndices, TMoves, TPastAbilities, TSpecies, TStats } from '../api/Index';


// Define an interface for the Pokemon data
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
  
  // Add any other fields you need from the API response
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi