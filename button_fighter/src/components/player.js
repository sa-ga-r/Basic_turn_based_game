import react from 'react';

function Player({name}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Health:{health}</p>
        </div>
    );
}
export default Player;