import PaginationContext from '../Contexts/PaginationContext'
import {
  PreviousPageButton,
  NextPageButton,
} from './PaginationNavigationButton'
import { useContext, useCallback } from 'react'

const Pagination = ({ itemCount }: { itemCount: number }) => {
  //using refs in order to persist the pageNumber when user navigates back to the home page
  const { pageNumber, setPageNumber, itemsPerPage } =
    useContext(PaginationContext)

  const renderPageNumbers = useCallback(() => {
    const pageNumbers = [1, 2, 3, 4, 5]

    const maximumPageNumber = Math.ceil(itemCount / itemsPerPage!)

    return (
      <div className='flex'>
        {pageNumbers.map((tempPageNumber) => (
          <button
            className={`py-1 px-3 ${
              pageNumber! + 1 === tempPageNumber && 'bg-slate-800 text-white rounded'
            }`}
          >
            {tempPageNumber}
          </button>
        ))}
      </div>
    )
  }, [pageNumber])

  return (
    <div className='self-center'>
      <nav className='flex'>
        <PreviousPageButton
          onClick={() => {
            setPageNumber!((pageNumber) => pageNumber - 1)
          }}
        />
        {renderPageNumbers()}
        <NextPageButton
          onClick={() => {
            setPageNumber!((pageNumber) => pageNumber + 1)
          }}
        />
      </nav>
    </div>
  )
}

export default Pagination
