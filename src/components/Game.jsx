import { useState } from 'react'
/* Child components. */
import Board from './Board'
// Constructor.
function Game (props) {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1]
  //
  function handlePlay (nextSquares) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }
  /* Component markup. */
  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

export default Game
