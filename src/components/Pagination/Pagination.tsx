import PaginationContext from '../Contexts/PaginationContext'
import { useContext } from 'react'

const Pagination = ({ itemCount }: { itemCount: number }) => {
  //using refs in order to persist the pageNumber when user navigates back to the home page
  const { pageNumber, setPageNumber, itemsPerPage } =
    useContext(PaginationContext)

  const getNumberOfPages = () => {
    return Math.ceil(itemCount / itemsPerPage!)
  }
  
  return (
    <div className='self-center'>
      <nav className='flex gap-4'>
        <button
          onClick={() => {
            setPageNumber!((pageNumber) => pageNumber - 1)
          }}
          className='flex'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>
        <button
          onClick={() => {
            setPageNumber!((pageNumber) => pageNumber + 1)
          }}
          className='flex'
        >
          <ChevronRight className='w-6 h-6' />
        </button>
      </nav>
    </div>
  )
}

const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className ? className : 'w-5 h-5'}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
      clipRule='evenodd'
    />
  </svg>
)

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className ? className : 'w-5 h-5'}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
      clipRule='evenodd'
    />
  </svg>
)

export default Pagination
