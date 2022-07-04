import Navbar from '../../components/Navbar/Navbar'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='min-h-screen bg-gray-200'>
      <Navbar />
      <main className="px-8 py-4">{children}</main>
    </div>
  )
}

export default Layout
