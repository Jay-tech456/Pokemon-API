import React from 'react';

          // By default, react will send a props as the keyword
export default function PokemonList({pokemon}) {

  return (
      // We need to look through the entire map variable
    <div>
      {pokemon.map(p => (
        <div key = {p}>{p} </div>

      ))}
    </div>
  );
}
