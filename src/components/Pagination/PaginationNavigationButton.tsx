import { ChevronRight, ChevronLeft } from '../Icons/Icons'

export const NextPageButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className='flex items-center justify-center px-1'>
    <ChevronRight className='w-6 h-6' />
  </button>
)

export const PreviousPageButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className='flex items-center justify-center px-1'>
    <ChevronLeft className='w-6 h-6' />
  </button>
)
