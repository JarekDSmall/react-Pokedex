import React from 'react';

function Pokecard(props) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  
    return (
      <div className="pokecard">
        <h2>{props.name}</h2>
        <img src={imgSrc} alt={props.name} />
        <p>Type: {props.type}</p>
        <p>Base Experience: {props.base_experience}</p>
      </div>
    );
  }
  
  export default Pokecard;