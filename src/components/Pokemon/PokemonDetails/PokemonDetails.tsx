import PokemonType from './PokemonType'

type pokemonDetailsProp = {
  id: number
  name: string
  types: []
}
const PokemonDetails = ({ id, name, types }: pokemonDetailsProp) => {
  return (
    <div className='flex flex-col items-center p-2'>
      <p className='text-sm text-gray-500 uppercase'>id: #{id}</p>
      <p className='text-2xl first-letter:uppercase'>{name}</p>
      <div className='flex flex-wrap gap-2 mt-4 first-letter:uppercase'>
        {types && types.map((type) => <PokemonType key={id} types={type} />)}
      </div>
    </div>
  )
}

export default PokemonDetails
