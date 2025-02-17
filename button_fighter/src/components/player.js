import react, {useState} from 'react';

function Player({name}) {
    const [health, setHealth] = useState(100);
    return (
        <div>
            <h2>{name}</h2>
            <p>Health:{health}</p>
        </div>
    );
}
export default Player;