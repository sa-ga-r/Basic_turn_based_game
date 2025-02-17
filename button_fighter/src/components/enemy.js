import react from 'react';

function Enemy({name}){
    return (
        <div>
            <h2>{name}</h2>
            <p>health:{health}</p>
        </div>
    );
}
export default Enemy;