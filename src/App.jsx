import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'

function App() {
  const [darkTheme, setdarkTheme] = useState(false)

  return (
    
      <div className={darkTheme ? 'dark': ''}>
     <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setdarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
      </div>
     
   
  )
}

export default App
