import { useState } from 'react'
import './App.css'
import { MainLayout } from './layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout/>
    </>
  )
}

export default App
