import {
  Box,
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core/';
import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/pokemon/PokemonContext';
import { PokemonAction } from '../context/pokemon/PokemonTypes';
import { usePokemonList } from '../hooks/PokedexHooks';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(2),
  },
}));

export const PokemonDropdown = () => {
  const classes = useStyles();
  const { dispatch } = useContext(PokemonContext);
  const { data: pokemonList, loading: isListLoading } = usePokemonList();
  const [selected, setSelected] = useState<string>('');

  const onSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch({
      type: PokemonAction.UPDATE_POKEMON_SELECTED,
      payload: selected,
    });
  };

  return (
    <Box display="flex" alignItems="bottom" marginBottom={2}>
      <FormControl className={classes.formControl} fullWidth variant="outlined">
        <InputLabel htmlFor="pokemon-list">Pokemon</InputLabel>
        <Select
          id="pokemon-list"
          onChange={(e) => setSelected(e.target.value as string)}
          value={selected}
          label="Pokemon"
        >
          {!isListLoading &&
            pokemonList?.map((pokemon) => (
              <MenuItem key={pokemon} value={pokemon}>
                {pokemon}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <Button variant="outlined" color="primary" onClick={onSearch}>
        Search
      </Button>
    </Box>
  );
};
