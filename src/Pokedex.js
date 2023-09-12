import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
    return (
      <div className='pokedex'>
        {props.pokemons.map(pokemon => <Pokecard key={pokemon.id} {...pokemon} />)}
        {props.isWinner && <p>THIS HAND WINS!</p>}
      </div>
    );
  }
  
  export default Pokedex;