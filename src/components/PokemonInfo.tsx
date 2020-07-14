import { Box, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { PokemonContext } from '../context/pokemon/PokemonContext';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 200,
    alignContent: 'center',
  },
  cardMedia: {
    width: 100,
    marginRight: theme.spacing(1)
  },
  placeholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
}));

export const PokemonInfo = () => {
  const classes = useStyles();
  const { state } = useContext(PokemonContext);

  //GET /api/v2/pokemon-species

  const renderCard = () => {
    if (state.selectedPokemon && Object.keys(state.selectedPokemon).length > 0) {
      return (
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Box display="flex">
              <CardMedia
                className={classes.cardMedia}
                image={state.selectedPokemon.sprites.front_default}
              />
              <Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {state.selectedPokemon.name.toUpperCase()}
                </Typography>
                <Typography color="textSecondary" style={{ marginBottom: 12 }}>
                  {state.selectedPokemon.types.map((type: any, index: number) => {
                    if (index === state.selectedPokemon.types.length - 1) {
                      return (<span key={type.type.name}>{type.type.name}</span>)
                    }
                    return <span key={type.type.name}>{type.type.name} &middot; </span>
                  })}
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card variant="outlined" className={classes.card}>
        <CardContent className={classes.placeholder}>
          <Typography variant="body2" color="textSecondary" component="p">
            Please select a Pokemon
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return renderCard();
}
