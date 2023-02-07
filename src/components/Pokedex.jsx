import PokemonCard from "./PokemonCard"

import { useQuery } from "react-query"

function fetchPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => data.results)
}

const Pokedex = () => {
  const {
    data: pokemons,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  })

  if (isLoading) return <h1>Loading</h1>
  if (error !== null) return <h1>error!!!!</h1>

  return (
    <>
      <div className="text-white bg-slate-500 p-3 text-center">Pokedex</div>
      <div className="bg-slate-800">
        <ul className="flex flex-wrap container mx-auto">
          {pokemons?.map(pokemon => {
            return <PokemonCard key={pokemon.name} name={pokemon.name} />
          })}
        </ul>
      </div>
    </>
  )
}

export default Pokedex
