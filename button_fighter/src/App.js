import Player from './components/player';
import Enemy from './components/enemy';
import react, {useState} from 'react';

function App() {
  return (
    <div className="App">
      <h1>Button Fighter</h1>
        <p>Turn based fighter game. Player vs AI.</p>
        <Player name={"Hero"} />
        <Enemy name={"Villen"} />
    </div>
  );
}

export default App;
