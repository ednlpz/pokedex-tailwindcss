import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className='h-screen bg-gray-200'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
