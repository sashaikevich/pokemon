import { useEffect } from "react"
import usePokemonData from "../hooks/usePokemonData"

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon

  const { data } = usePokemonData(url, pokemon.name)
  const img = data?.sprites?.front_default

  return (
    <li>
      <img src={img} alt="" />
      {name}
    </li>
  )
}

export default PokemonCard
