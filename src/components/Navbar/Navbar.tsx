const Navbar = () => {
  return (
    <div className='flex h-20 p-4 bg-gray-400'>
      <div className='flex items-center justify-between w-full mx-auto  max-w-[1920px]'>
        <div className='container'>
          <header className='w-40'>
            <img alt="pokemon logo" src='/logo.png' />
          </header>
        </div>

        <div className="flex">
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
