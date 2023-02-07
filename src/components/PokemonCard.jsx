import { useQuery } from "react-query"

const PokemonCard = ({ name }) => {
  function fetchPokemonImage(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => data)
  }

  function fetchPokemonDescription(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
      .then(response => response.json())
      .then(data => data)
  }

  const { data: imgData } = useQuery({
    queryKey: ["pokemons", "img", name],
    queryFn: () => fetchPokemonImage(name),
    select: data => data.sprites.front_default,
  })

  const { data: descData } = useQuery({
    queryKey: ["pokemons", "desc", name],
    queryFn: () => fetchPokemonDescription(name),
    // select: data => data.flavor_text_entries[0].flavor_text,
    select: data => {
      return data.flavor_text_entries.find(
        textEntry => textEntry.language.name === "en"
      ).flavor_text
    },
  })

  return (
    <li className="block bg-white rounded-md w-40  mx-3 my-2 p-3 text-center">
      <img className="inline-block w-full mb-6`" src={imgData} alt="" />
      <h6 className="font-bold mb-3">{name}</h6>
      <p className="leading-none text-sm">{descData}</p>
    </li>
  )
}

export default PokemonCard
