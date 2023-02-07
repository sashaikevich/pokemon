import { useQuery } from "react-query"

function getPokemonData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
}

function usePokemonData(url, key = "") {
  return useQuery({
    queryKey: ["pokemons", key],
    queryFn: () => {
      return getPokemonData(url)
    },
  })
}

export default usePokemonData
