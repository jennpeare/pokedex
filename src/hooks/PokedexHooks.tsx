import axios from 'axios';
import React from 'react';
import { Pokemon } from '../model/pokemon';
import { PokedexResponse } from '../model/response';

const BASE_URL = 'https://pokeapi.co/api/v2';
const initResponse = { data: undefined, error: undefined, loading: true };

export const usePokemonList = (): PokedexResponse<string[]> => {
  const [state, setState] = React.useState<PokedexResponse<string[]>>(
    initResponse
  );

  const fetch = async (): Promise<PokedexResponse<string[]>> => {
    try {
      const pokemonList = await axios.get(`${BASE_URL}/pokemon?limit=151`);
      if (pokemonList?.data) {
        const data = pokemonList.data.results.map(
          (res: { name: string; url: string }) => res.name
        );
        return { data, error: undefined, loading: false };
      }
      return { data: [], error: undefined, loading: false };
    } catch (e) {
      return {
        data: undefined,
        error: new Error('List not found'),
        loading: false,
      };
    }
  };

  React.useEffect(() => {
    setState((state) => ({ ...state, loading: true }));
    fetch().then((state) => setState(state));
  }, []);

  return state;
};

export const usePokemon = (name: string): PokedexResponse<Pokemon> => {
  const [state, setState] = React.useState<PokedexResponse<Pokemon>>(
    initResponse
  );

  const fetch = React.useCallback(async (): Promise<
    PokedexResponse<Pokemon>
  > => {
    try {
      const pokemon = await axios.get(`${BASE_URL}/pokemon/${name}`);
      if (pokemon?.data) {
        const data = {
          id: pokemon.data.id,
          height: pokemon.data.height,
          name: pokemon.data.name,
          sprite: pokemon.data.sprites.front_default,
          types: pokemon.data.types.map(
            (type: { slot: number; type: { name: string; url: string } }) =>
              type.type.name
          ),
          weight: pokemon.data.weight,
        };
        return { data, error: undefined, loading: false };
      }
      return {
        data: undefined,
        error: new Error('Cannot fetch Pokemon'),
        loading: false,
      };
    } catch (e) {
      return {
        data: undefined,
        error: new Error('Cannot fetch Pokemon'),
        loading: false,
      };
    }
  }, [name]);

  React.useEffect(() => {
    setState((state) => ({ ...state, loading: true }));
    if (name) {
      fetch().then((state) => setState(state));
    }
  }, [name, fetch]);

  return state;
};
