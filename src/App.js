import './App.css';
import Cards from './Components/Cards'
import React from 'react';
import Winner from './Components/Winner'

function App() {

  return (
    <div className="App">
      <h1>Demon Slayer</h1>
      <h2>Memory Game</h2>
      <Cards />
      {/* <Winner WinningMessage='You have won!' /> */}
    </div>
  );
}

export default App;
