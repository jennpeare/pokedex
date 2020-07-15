// general context types
export type PokemonContextType = {
  state: PokemonState;
  dispatch: React.Dispatch<PokemonActionType>;
};

export type PokemonProviderType = {
  children: React.ReactNode;
};

// pokemon types
export type PokemonActionType = {
  type: PokemonAction.UPDATE_POKEMON_SELECTED;
  payload: string;
};

export enum PokemonAction {
  UPDATE_POKEMON_SELECTED = 'UPDATE_POKEMON_SELECTED',
}

export type PokemonState = {
  selectedPokemon: string;
};
