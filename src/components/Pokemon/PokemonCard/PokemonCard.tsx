import useFetch from '../../Hooks/useFetch'
import PokemonSprite from '../PokemonSprite/PokemonSprite'
import PokemonDetails from '../PokemonDetails/PokemonDetails'

const PokemonCard = ({
  pokemonInformation,
}: {
  pokemonInformation: { [key: string]: any }
}) => {
  const [responseData, fetchStatus] = useFetch(pokemonInformation.url)

  return (
    <div className='rounded-lg flex flex-col shadow-sm bg-slate-50 bn xl:w-80 w-72 h-[26rem] justify-self-center overflow-clip gap-4'>
      {fetchStatus.current === 'success' && (
        <>
          <div className='flex self-center justify-center w-60'>
            <PokemonSprite
              name={responseData!.name}
              sprite={responseData!.sprites.front_default}
            />
          </div>
          <div>
            <PokemonDetails
              id={responseData!.id}
              types={responseData!.types}
              name={responseData!.name}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default PokemonCard