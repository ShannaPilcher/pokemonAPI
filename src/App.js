import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const[pokemonList, setPokemonList] = useState([]);

  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    // fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then((response) => {setPokemonList(response.data.results)})
      // .then((jsonResponse) => {
      //   setPokemonList(jsonResponse.results)
      // })
      .catch((error) => {
        console.log ("Oops. We couldn't catch any pokemon");
        console.log(error);
      })
  };

  
  return (
    <div className="App">
      <button onClick= {getPokemon}>Fetch Pokemon</button>
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
