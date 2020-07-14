import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Pokemon } from './Pokemon'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    paddingBottom: theme.spacing(1)
  }
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Typography variant='h4' className={classes.header}>Pokedex</Typography>
          <Pokemon />
        </Grid>
      </Grid>
    </Container >
  )
}