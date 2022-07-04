import PokemonCard from '../Pokemon/PokemonCard/PokemonCard'
import isEqual from 'lodash.isequal'
import { memo } from 'react'

type pokemons = {}[]

type pokemon = { [key: string]: any }

const PokemonList = ({ pokemons }: { pokemons?: pokemons }) => {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
      {pokemons &&
        pokemons?.map((pokemon: pokemon) => (
          <PokemonCard key={pokemon.name} pokemonInformation={pokemon} />
        ))}
    </div>
  )
}
export default memo(PokemonList, isEqual)
