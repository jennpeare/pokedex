// general context types
export type PokemonContextType = {
  state: PokemonState,
  dispatch: React.Dispatch<any>
}

export type PokemonProviderType = {
  children: React.ReactNode,
}

// pokemon types
export type PokemonActionType = {
  type: PokemonAction,
  payload: any,
}

export enum PokemonAction {
  UPDATE_POKEMON_LIST = 'UPDATE_POKEMON_LIST',
  UPDATE_POKEMON_SELECTED = 'UPDATE_POKEMON_SELECTED',
}

export type PokemonState = {
  pokemon: any[],
  isLoading: boolean,
  selectedPokemon: any,
}