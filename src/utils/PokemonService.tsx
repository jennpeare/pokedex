import axios from 'axios';

const PokemonService = () => {
  const baseUrl: string = 'https://pokeapi.co/api/v2';

  return {
    getPokemon: () => axios.get(`${baseUrl}/pokemon`),
    getPokemonByName: (name: string) => axios.get(`${baseUrl}/pokemon/${name}`),
    getBerries: () => axios.get(`${baseUrl}/berry`),
  }
}

export default PokemonService;