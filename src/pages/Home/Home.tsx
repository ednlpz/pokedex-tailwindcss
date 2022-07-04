import { useState, useEffect, useRef } from 'react'
import useFetch from '../../components/Hooks/useFetch'
import Layout from '../Layout/Layout'
import Pagination from '../../components/Pagination/Pagination'
import PokemonList from '../../components/PokemonList/PokemonList'
import PaginationContext from '../../components/Contexts/PaginationContext'

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0)

  const [fetchLink, setFetchLink] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
  )
  const [responseData, fetchStatus] = useFetch(fetchLink)

  const itemsPerPage = useRef(10)

  //fetch the next set of pokemonList if page number changes
  useEffect(() => {
    setFetchLink(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        pageNumber! * itemsPerPage.current!
      }&limit=${itemsPerPage.current}`
    )
  }, [pageNumber, itemsPerPage])

  return (
    <Layout>
      <PaginationContext.Provider
        value={{
          pageNumber: pageNumber,
          setPageNumber: setPageNumber,
          itemsPerPage: itemsPerPage.current,
        }}
      >
        {fetchStatus!.current === 'success' && (
          <div className='flex flex-col gap-4'>
            <Pagination itemCount={responseData!.count} />
            <PokemonList pokemons={responseData!.results} />
          </div>
        )}
      </PaginationContext.Provider>
    </Layout>
  )
}

export default Home
