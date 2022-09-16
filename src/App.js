import React, {useEffect, useState} from "react";
//import styles
import "./styles/app.scss"
//import components
import { Pokemon } from './components/Pokemon'

function App() {

  const pokemon = ['bulbasaur', 'charmander', 'squirtle', 'turtwig', 'charizard']
  const [pollingInterval, setPollingInterval] = useState(0)

  return (
    <div className="App">
      <select
        onChange={(change) => setPollingInterval(Number(change.target.value))}
      >
        <option value={0}>Off</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <div>
        {pokemon.map((poke, index) => (
          <Pokemon key={index} name={poke} pollingInterval={pollingInterval} /> //You need a key for every child (pokemon), for that we can easily use an index counter
        ))}
      </div>
    </div>
  )
}

export default App;