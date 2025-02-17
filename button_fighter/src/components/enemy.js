import react from 'react';

function Enemy({name, health}){
    return (
        <div>
            <h2>{name}</h2>
            <p>health:{health}</p>
        </div>
    );
}
export default Enemy;