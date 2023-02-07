import { useEffect, useState } from "react"
import usePokemonData from "./hooks/usePokemonData"
import PokemonCard from "./components/PokemonCard"

import "./App.css"

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon"
  const { data, isLoading, error } = usePokemonData(url)
  const pokemons = data?.results

  if (isLoading) return <h1>Loading</h1>
  if (error !== null) return <h1>error!!!!</h1>
  
  return (
    <>
      <ul>
        {pokemons?.map(pokemon => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />
        })}
      </ul>
    </>
  )
}

export default App
