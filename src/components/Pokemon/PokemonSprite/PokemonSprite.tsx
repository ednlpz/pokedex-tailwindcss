import { useRef } from 'react'

const PokemonSprite = ({ sprite, name }: { sprite: string; name: string }) => {
  const skeletonSpriteLoaderRef = useRef<HTMLDivElement | null>(null)
  const spriteRef = useRef<HTMLImageElement | null>(null)

  return (
    <figure className='flex justify-center w-full'>
      <div
        ref={skeletonSpriteLoaderRef}
        className='flex self-center justify-center p-4 w-60'
      >
        <div className='w-full bg-gray-200 rounded-lg h-44 animate-pulse ' />
      </div>

      <img
        alt={name}
        ref={spriteRef}
        src={sprite}
        onLoad={() => {
          skeletonSpriteLoaderRef.current?.classList.add('hidden')
          spriteRef.current?.classList.remove('hidden')
        }}
        className='hidden w-full h-auto'
      />
    </figure>
  )
}

export default PokemonSprite
