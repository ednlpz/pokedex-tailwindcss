const PokemonSprite = ({ sprite, name }: { sprite: string; name: string }) => {
  return (
    <figure className='flex justify-center w-full'>
      <img alt={name} src={sprite} className='w-full h-auto' />
    </figure>
  )
}

export default PokemonSprite
