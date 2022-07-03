import { createContext } from 'react'

type paginationType = {
  pageNumber?: number
  setPageNumber?: React.Dispatch<React.SetStateAction<number>>
  itemsPerPage?: number
}

const PaginationContext = createContext<paginationType>({})

export default PaginationContext
