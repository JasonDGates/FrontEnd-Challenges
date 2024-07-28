import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <LandingPage />
    </>
  )
}

export default App
