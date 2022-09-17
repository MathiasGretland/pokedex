import React, {useEffect, useState} from "react";
//import styles
import "./styles/app.scss"
//import components
import Pokedex from './components/Pokedex'


function App() {

  const pokemons = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'articuno', 'zapdos', 'moltres', 'dragonite', 'mewtwo', 'mew']

  return (
    <div className="app">
      <div>
        <h1>POKEMONS!</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  )
}

export default App;