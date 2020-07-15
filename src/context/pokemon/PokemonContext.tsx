import React, { createContext, FunctionComponent, useReducer } from 'react';
import {
  PokemonState,
  PokemonContextType,
  PokemonProviderType,
} from './PokemonTypes';
import { PokemonReducers } from './PokemonReducer';

// initial context state
const initState: PokemonState = {
  selectedPokemon: '',
};

const initContext = { state: initState, dispatch: () => null };
export const PokemonContext = createContext<PokemonContextType>(initContext);

// wrapper for context provider
export const PokemonProvider: FunctionComponent<PokemonProviderType> = (
  props
) => {
  const { children } = props;

  // get state and dispatch from reducer to pass through provider
  const [state, dispatch] = useReducer(PokemonReducers, initState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
