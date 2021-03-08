import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const[pokemonList, setPokemonList] = useState([]);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemonList(jsonResponse.results)
      })
      .catch((error) => {
        console.log ("Oops. We couldn't catch any pokemon");
        console.log(error);
      })
  };

  
  return (
    <div className="App">
      <button onClick= {getPokemon}>Click Here for Pokemon</button>
      {
        pokemonList.map ((pokemon, index) => (
        <div key={index}>
          <hr />
          <h4> {pokemon.name} </h4>
        </div>)
        )
      }
    </div>
  );
}

export default App;
