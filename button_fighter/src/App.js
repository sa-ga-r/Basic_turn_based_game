import Player from './components/player';
import Enemy from './components/enemy';
import react, {useState, useEffect} from 'react';

function App() {
  const [enemyhealth, setenemyHealth] = useState(100);
  const [playerhealth, setplayerHealth] = useState(100);
  const [turn, setTurn] = useState(Player);

  const attackEnemy = () => {
    setenemyHealth((prevhealth) => Math.max(0, prevhealth - 10));
    setTurn("Enemy");
  };

  const attackPlayer = () => {
    setplayerHealth((prevhealth) => Math.max(0, prevhealth - 10));
    setTurn("Player");
  };

  useEffect(() => {
    if (turn === "Enemy" && playerhealth > 0 && enemyhealth > 0) {
      setTimeout(()=>{attackPlayer();}, 1000);
    }
  }, [turn]
  );

  return (
    <div className="App">
      <h1>Button Fighter</h1>
        <p>Turn based fighter game. Player vs AI.</p>
        <Player name={"Player"} health={playerhealth} />
        <Enemy name={"Enemy"} health={enemyhealth} />
        <button onClick={attackEnemy} disabled={turn !== "Player"}>Attack</button>
        {playerhealth === 0 && <h2> You Loss </h2>}
        {enemyhealth === 0 && <h2> You Win </h2>}
    </div>
  );
}

export default App;