import React, { FunctionComponent } from 'react';
import { Home } from './components/Home';
import { PokemonProvider } from './context/pokemon/PokemonContext';

const App: FunctionComponent = () => {
  return (
    <PokemonProvider>
      <Home />
    </PokemonProvider>
  );
}

export default App;
