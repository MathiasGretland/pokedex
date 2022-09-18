import React, {useEffect, useState} from "react";
//import styles
import "./styles/app.scss"
//import components
import Pokedex from './components/Pokedex'
//Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad} from "@fortawesome/free-solid-svg-icons";


function App() {
  //useState for checkboxes
  const [checkedPicture, setCheckedPicture] = useState(true)
  const [checkedWeight, setCheckedWeight] = useState(true)
  const [checkedHeight, setCheckedHeight] = useState(true)
  const [checkedTypes, setCheckedTypes] = useState(true)

  const pokemons = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'articuno', 'zapdos', 'moltres', 'dragonite', 'mewtwo', 'mew']

  //Handlers for checkboxes
  const pictureHandler = () => {
    setCheckedPicture(!checkedPicture)
  }

  const weightHandler = () => {
    setCheckedWeight(!checkedWeight)
  }

  const heightHandler = () => {
    setCheckedHeight(!checkedHeight)
  }
  
  const typesHandler = () => {
    setCheckedTypes(!checkedTypes)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>POKEDEX</h1>
        <FontAwesomeIcon icon={faGamepad} size="3x" />
        
        <div className="checkboxes">
        <h3>Hide column?</h3>
        <label className="container">Picture
          <input type="checkbox" value={checkedPicture} onChange={pictureHandler} />
        </label>
        <label className="container">Weight
          <input type="checkbox" value={checkedWeight} onChange={weightHandler} />
        </label>

        <label className="container">Height
          <input type="checkbox" value={checkedHeight} onChange={heightHandler} />
        </label>

        <label className="container">Types
          <input type="checkbox" value={checkedTypes} onChange={typesHandler} />
        </label>
        </div>
      </div>
      <Pokedex pokemons={pokemons} checkedPicture={checkedPicture} checkedWeight={checkedWeight} checkedHeight={checkedHeight} checkedTypes={checkedTypes} />
    </div>
  )
}

export default App;