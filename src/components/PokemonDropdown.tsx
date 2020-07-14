import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core/';
import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../context/pokemon/PokemonContext';
import { PokemonAction } from '../context/pokemon/PokemonTypes';
import PokemonService from '../utils/PokemonService';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(2)
  },
}));

export const PokemonDropdown = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(PokemonContext);
  const [selected, setSelected] = useState<string>('');

  const onDropdownChange = (e: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => {
    setSelected(e.target.value as string);
  }

  const onButtonClick = async (e: any) => {
    const res = await PokemonService().getPokemonByName(selected);
    if (res && res.data) {
      dispatch({ type: PokemonAction.UPDATE_POKEMON_SELECTED, payload: res.data });
    }
    console.log(res.data);
  }

  useEffect(() => {
    const loadPokemon = async () => {
      console.log('Loading Pokemon...');
      const res = await PokemonService().getPokemon();
      if (res && res.data) {
        dispatch({ type: PokemonAction.UPDATE_POKEMON_LIST, payload: res.data.results });
      }
    }
    loadPokemon();
  }, [dispatch])

  return (
    <Box display="flex" alignItems="bottom" marginBottom={2}>
      <FormControl
        className={classes.formControl}
        fullWidth
        variant="outlined"
      >
        <InputLabel htmlFor="pokemon-list">Pokemon</InputLabel>
        <Select
          id="pokemon-list"
          onChange={onDropdownChange}
          value={selected}
          label="Pokemon"
        >
          {state.pokemon.map((p: any) => (<MenuItem key={p.name} value={p.name}>{p.name}</MenuItem>))}
        </Select>
      </FormControl>

      <Button variant="outlined" color="primary" onClick={onButtonClick}>
        Search
      </Button>
    </Box>
  )
}
