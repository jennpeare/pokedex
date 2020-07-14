import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { PokemonDropdown } from './PokemonDropdown';
import { PokemonInfo } from './PokemonInfo';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  },
}));

export const Pokemon = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <PokemonDropdown />
      <PokemonInfo />
    </Paper>
  )
}
