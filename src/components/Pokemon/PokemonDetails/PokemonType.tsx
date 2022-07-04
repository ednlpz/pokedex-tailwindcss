type pokemonType = {
  slot: number
  type: {
    name: string
  }
}

const PokemonType = ({ types }: { types: pokemonType }) => {
  const pokemonTypesList = [
    { typeName: 'fire', element: <FireType /> },
    { typeName: 'water', element: <WaterType /> },
    { typeName: 'grass', element: <GrassType /> },
    { typeName: 'bug', element: <BugType /> },
    { typeName: 'flying', element: <FlyingType /> },
    { typeName: 'normal', element: <NormalType /> },
    { typeName: 'fighting', element: <FightingType /> },
    { typeName: 'poison', element: <PoisonType /> },
    { typeName: 'electric', element: <ElectricType /> },
    { typeName: 'ground', element: <GroundType /> },
    { typeName: 'psychic', element: <PsychicType /> },
    { typeName: 'rock', element: <RockType /> },
    { typeName: 'ice', element: <IceType /> },
    { typeName: 'dragon', element: <DragonType /> },
    { typeName: 'ghost', element: <GhostType /> },
    { typeName: 'dark', element: <DarkType /> },
    { typeName: 'steel', element: <SteelType /> },
    { typeName: 'fairy', element: <FairyType /> },
    { typeName: 'unknown', element: <UnknownType /> },
  ]

  const renderPokemonType = () => {
    return pokemonTypesList.find(
      (type) => type.typeName === types.type.name.toLowerCase()
    )?.element
  }
  return <>{renderPokemonType()}</>
}

const FireType = () => (
  <div className={'pokemonTypeContainer bg-orange-600 text-orange-50 '}>
    Fire
  </div>
)

const NormalType = () => (
  <div className={'pokemonTypeContainer bg-neutral-500 text-neutral-50 '}>
    Normal
  </div>
)

const FightingType = () => (
  <div className={'pokemonTypeContainer bg-red-800 text-red-50 '}>Fighting</div>
)

const WaterType = () => (
  <div className={'pokemonTypeContainer bg-blue-600 text-blue-50 '}>Water</div>
)

const GrassType = () => (
  <div className={'pokemonTypeContainer bg-green-600 text-green-50 '}>
    Grass
  </div>
)

const FlyingType = () => (
  <div className={'pokemonTypeContainer bg-indigo-400 text-indigo-50 '}>
    Flying
  </div>
)

const BugType = () => (
  <div className={'pokemonTypeContainer bg-lime-500 text-green-50 '}>Bug</div>
)

const PoisonType = () => (
  <div className={'pokemonTypeContainer bg-violet-600 text-violet-50 '}>
    Poison
  </div>
)

const ElectricType = () => (
  <div className={'pokemonTypeContainer bg-yellow-600 text-yellow-50 '}>
    Electric
  </div>
)

const GroundType = () => (
  <div className={'pokemonTypeContainer bg-stone-500 text-stone-50 '}>
    Ground
  </div>
)

const RockType = () => (
  <div className={'pokemonTypeContainer bg-stone-700 text-stone-50 '}>
    Rock
  </div>
)

const GhostType = () => (
  <div className={'pokemonTypeContainer bg-indigo-900 text-indigo-50 '}>
    Ghost
  </div>
)

const SteelType = () => (
  <div className={'pokemonTypeContainer bg-slate-500 text-slate-50 '}>
    Steel
  </div>
)

const PsychicType = () => (
  <div className={'pokemonTypeContainer bg-pink-600 text-pink-50 '}>Psychic</div>
)

const IceType = () => (
  <div className={'pokemonTypeContainer bg-sky-400 text-sky-50 '}>Ice</div>
)

const DragonType = () => (
  <div className={'pokemonTypeContainer bg-indigo-600 text-indigo-50 '}>
    Dragon
  </div>
)

const DarkType = () => (
  <div className={'pokemonTypeContainer bg-amber-900 text-amber-50 '}>
    Dark
  </div>
)

const FairyType = () => (
  <div className={'pokemonTypeContainer bg-pink-400 text-pink-50 '}>Fairy</div>
)

const UnknownType = () => (
  <div className={'pokemonTypeContainer bg-emerald-800 text-emerald-50 '}>Unknown</div>
)

export default PokemonType
