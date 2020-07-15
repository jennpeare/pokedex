import { PokemonState, PokemonActionType, PokemonAction } from './PokemonTypes';

// define dispatch methods
export const PokemonReducers = (
  state: PokemonState,
  action: PokemonActionType
) => {
  const { type, payload } = action;

  switch (type) {
    case PokemonAction.UPDATE_POKEMON_SELECTED:
      return {
        ...state,
        selectedPokemon: payload,
      };
    default:
      return state;
  }
};
