import Player from './components/player';
import Enemy from './components/enemy';
import react, {useState} from 'react';

function App() {
  const [enemyhealth, setenemyHealth] = useState(100);

  const attackEnemy = () => {
    setenemyHealth((prevhealth) => Math.max(0, prevhealth - 10));
  };

  return (
    <div className="App">
      <h1>Button Fighter</h1>
        <p>Turn based fighter game. Player vs AI.</p>
        <Player name={"Hero"} />
        <Enemy name={"Villen"} health={enemyhealth} />
        <button onClick={attackEnemy}>Attack</button>
    </div>
  );
}

export default App;
