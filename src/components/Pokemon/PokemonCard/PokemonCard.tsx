import useFetch from '../../Hooks/useFetch'
import PokemonSprite from '../PokemonSprite/PokemonSprite'
import PokemonDetails from '../PokemonDetails/PokemonDetails'
import PokemonDetailsSkeletonLoader from '../PokemonDetails/PokemonDetailsSkeletonLoader'
import { memo } from 'react'
import isEqual from 'lodash.isequal'

const PokemonCard = ({
  pokemonInformation,
}: {
  pokemonInformation: { [key: string]: any }
}) => {
  const [responseData, fetchStatus] = useFetch(pokemonInformation.url)

  return (
    <div className='rounded-lg flex flex-col shadow-sm bg-slate-50 bn xl:w-80 w-72 h-[26rem] justify-self-center overflow-clip gap-4'>
      <>
        <div className='flex self-center justify-center p-4 w-60'>
          <PokemonSprite
            name={responseData?.name}
            sprite={responseData?.sprites.front_default}
          />
        </div>
        {fetchStatus.current === 'loading' ? (
          <PokemonDetailsSkeletonLoader />
        ) : (
          <PokemonDetails
            id={responseData?.id}
            types={responseData?.types}
            name={responseData?.name}
          />
        )}
      </>
    </div>
  )
}

export default memo(PokemonCard, isEqual)
