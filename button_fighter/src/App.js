import Player from './components/player';
import Enemy from './components/enemy';
import react from 'react'

function App() {
  return (
    <div className="App">
      <h1>Button Fighter</h1>
        <p>Turn based fighter game. Player vs AI.</p>
        <Player name={"Hero"} health={100} />
        <Enemy name={"Villen"} health={100} />
    </div>
  );
}

export default App;
