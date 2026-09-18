import { useState } from 'react'
import './App.css'

/* Child components. */
import Footer from './components/Footer'
import Game from './components/Game'
import Game3D from './components/Game3D'
import Header from './components/Header'

export default function App () {
  const [ mode, setMode ] = useState('mode3x3')

  return (
    <>
      <Header mode={mode} setMode={setMode}/>
      {mode == 'mode3x3' && <Game />}
      {mode == 'mode4x4x4' && <Game3D />}
      <Footer />
    </>
  )
}
