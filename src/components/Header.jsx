function Header ({ mode, setMode }) {
  return (
    <header className="App-title">
      <h1>Musket, Neptune, Knapsack</h1>
      <button className={`button ${mode == 'mode3x3' && 'button--active'}`} onClick={() => setMode('mode3x3')}>3x3</button>
      <button className={`button ${mode == 'mode4x4x4' && 'button--active'}`} onClick={() => setMode('mode4x4x4')}>4x4x4</button>
    </header>
  )
}

export default Header
