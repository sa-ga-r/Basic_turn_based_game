import react from 'react';

function Player({name, health}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Health:{health}</p>
        </div>
    );
}
export default Player;