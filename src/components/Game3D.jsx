import { useState } from 'react'

/* Child components. */
import Board3D from './Board3D'

function Game3D (props) {
  const [history, setHistory] = useState([Array(64).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay (nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo (nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button className='button' onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    )
  })

  /* Component markup. */
  return (
    <div className='game'>
      {/*<div>Δ⬚∆S⌂☐☓</div>*/}
      <div className='game-board game-board--3d'>
        <Board3D xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-history'>
        <div>Move History</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game3D
