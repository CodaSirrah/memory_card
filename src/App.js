import './App.css';
import Cards from './Components/Cards'
import React from 'react';
import Winner from './Components/Winner'
import Loser from './Components/Loser'

function App() {

  return (
    <div className="App">
      <Winner winningMessage='You have won!' />
      <Loser losingMessage='You have lost.' />
      <h1>Demon Slayer</h1>
      <h2>Memory Game</h2>
      <Cards />
      
    </div>
  );
}

export default App;
