import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components/index'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
        <div className='w-full block'>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
