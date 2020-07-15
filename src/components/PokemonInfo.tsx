import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { PokemonContext } from '../context/pokemon/PokemonContext';
import { usePokemon } from '../hooks/PokedexHooks';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 200,
    alignContent: 'center',
  },
  cardMedia: {
    width: 100,
    marginRight: theme.spacing(1),
  },
  placeholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));

export const PokemonInfo = () => {
  const classes = useStyles();
  const { state } = useContext(PokemonContext);
  const { data: pokemon, loading } = usePokemon(state.selectedPokemon);

  const renderContent = () => {
    if (!state.selectedPokemon) {
      return (
        <CardContent className={classes.placeholder}>
          <Typography variant="body2" color="textSecondary" component="p">
            Please select a Pokemon
          </Typography>
        </CardContent>
      );
    }

    if (loading) {
      return (
        <CardContent className={classes.placeholder}>
          <CircularProgress />
        </CardContent>
      );
    } else if (!loading && pokemon) {
      return (
        <CardContent>
          <Box display="flex">
            <CardMedia className={classes.cardMedia} image={pokemon.sprite} />
            <Box>
              <Typography gutterBottom variant="h5" component="h2">
                {pokemon.name.toUpperCase()}
              </Typography>
              <Typography color="textSecondary" style={{ marginBottom: 12 }}>
                {pokemon.types.map((type, index) => {
                  if (index === pokemon.types.length - 1) {
                    return <span key={type}>{type}</span>;
                  }
                  return <span key={type}>{type} &middot; </span>;
                })}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="textPrimary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      );
    }
  };

  return (
    <Card variant="outlined" className={classes.card}>
      {renderContent()}
    </Card>
  );
};
