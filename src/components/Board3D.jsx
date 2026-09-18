/* Child components. */
import Square3D from './Square3D'

function Board3D ({ xIsNext, squares, onPlay }) {
  function handleClick (i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  /* Component markup. */
  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-layer'>
        <div className='board-row'>
          <Square3D flag={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square3D flag={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square3D flag={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square3D flag={squares[3]} onSquareClick={() => handleClick(3)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square3D flag={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square3D flag={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square3D flag={squares[7]} onSquareClick={() => handleClick(7)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[8]} onSquareClick={() => handleClick(8)} />
          <Square3D flag={squares[9]} onSquareClick={() => handleClick(9)} />
          <Square3D flag={squares[10]} onSquareClick={() => handleClick(10)} />
          <Square3D flag={squares[11]} onSquareClick={() => handleClick(11)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[12]} onSquareClick={() => handleClick(12)} />
          <Square3D flag={squares[13]} onSquareClick={() => handleClick(13)} />
          <Square3D flag={squares[14]} onSquareClick={() => handleClick(14)} />
          <Square3D flag={squares[15]} onSquareClick={() => handleClick(15)} />
        </div>
      </div>
      <div className='board-layer'>
        <div className='board-row'>
          <Square3D flag={squares[16]} onSquareClick={() => handleClick(16)} />
          <Square3D flag={squares[17]} onSquareClick={() => handleClick(17)} />
          <Square3D flag={squares[18]} onSquareClick={() => handleClick(18)} />
          <Square3D flag={squares[19]} onSquareClick={() => handleClick(19)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[20]} onSquareClick={() => handleClick(20)} />
          <Square3D flag={squares[21]} onSquareClick={() => handleClick(21)} />
          <Square3D flag={squares[22]} onSquareClick={() => handleClick(22)} />
          <Square3D flag={squares[23]} onSquareClick={() => handleClick(23)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[24]} onSquareClick={() => handleClick(24)} />
          <Square3D flag={squares[25]} onSquareClick={() => handleClick(25)} />
          <Square3D flag={squares[26]} onSquareClick={() => handleClick(26)} />
          <Square3D flag={squares[27]} onSquareClick={() => handleClick(27)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[28]} onSquareClick={() => handleClick(28)} />
          <Square3D flag={squares[29]} onSquareClick={() => handleClick(29)} />
          <Square3D flag={squares[30]} onSquareClick={() => handleClick(30)} />
          <Square3D flag={squares[31]} onSquareClick={() => handleClick(31)} />
        </div>
      </div>
      <div className='board-layer'>
        <div className='board-row'>
          <Square3D flag={squares[32]} onSquareClick={() => handleClick(32)} />
          <Square3D flag={squares[33]} onSquareClick={() => handleClick(33)} />
          <Square3D flag={squares[34]} onSquareClick={() => handleClick(34)} />
          <Square3D flag={squares[35]} onSquareClick={() => handleClick(35)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[36]} onSquareClick={() => handleClick(36)} />
          <Square3D flag={squares[37]} onSquareClick={() => handleClick(37)} />
          <Square3D flag={squares[38]} onSquareClick={() => handleClick(38)} />
          <Square3D flag={squares[39]} onSquareClick={() => handleClick(39)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[40]} onSquareClick={() => handleClick(40)} />
          <Square3D flag={squares[41]} onSquareClick={() => handleClick(41)} />
          <Square3D flag={squares[42]} onSquareClick={() => handleClick(42)} />
          <Square3D flag={squares[43]} onSquareClick={() => handleClick(43)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[44]} onSquareClick={() => handleClick(44)} />
          <Square3D flag={squares[45]} onSquareClick={() => handleClick(45)} />
          <Square3D flag={squares[46]} onSquareClick={() => handleClick(46)} />
          <Square3D flag={squares[47]} onSquareClick={() => handleClick(47)} />
        </div>
      </div>
      <div className='board-layer'>
        <div className='board-row'>
          <Square3D flag={squares[48]} onSquareClick={() => handleClick(48)} />
          <Square3D flag={squares[49]} onSquareClick={() => handleClick(49)} />
          <Square3D flag={squares[50]} onSquareClick={() => handleClick(50)} />
          <Square3D flag={squares[51]} onSquareClick={() => handleClick(51)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[52]} onSquareClick={() => handleClick(52)} />
          <Square3D flag={squares[53]} onSquareClick={() => handleClick(53)} />
          <Square3D flag={squares[54]} onSquareClick={() => handleClick(54)} />
          <Square3D flag={squares[55]} onSquareClick={() => handleClick(55)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[56]} onSquareClick={() => handleClick(56)} />
          <Square3D flag={squares[57]} onSquareClick={() => handleClick(57)} />
          <Square3D flag={squares[58]} onSquareClick={() => handleClick(58)} />
          <Square3D flag={squares[59]} onSquareClick={() => handleClick(59)} />
        </div>
        <div className='board-row'>
          <Square3D flag={squares[60]} onSquareClick={() => handleClick(60)} />
          <Square3D flag={squares[61]} onSquareClick={() => handleClick(61)} />
          <Square3D flag={squares[62]} onSquareClick={() => handleClick(62)} />
          <Square3D flag={squares[63]} onSquareClick={() => handleClick(63)} />
        </div>
      </div>
    </>
  )
}

function calculateWinner (squares) {
  const lines = [
    // 48 parallel edges.
    [ 0,  1,  2,  3],  // Across.
    [ 4,  5,  6,  7],
    [ 8,  9, 10, 11],
    [12, 13, 14, 15],
    [16, 17, 18, 19],  //
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [32, 33, 34, 35],  //
    [36, 37, 38, 39],
    [40, 41, 42, 43],
    [44, 45, 46, 47],
    [48, 49, 50, 51],  //
    [52, 53, 54, 55],
    [56, 57, 58, 59],
    [60, 61, 62, 63],
    [ 0, 16, 32, 48],  // Down.
    [ 1, 17, 33, 49],
    [ 2, 18, 34, 50],
    [ 3, 19, 35, 51],
    [ 4, 20, 36, 52],  //
    [ 5, 21, 37, 53],
    [ 6, 22, 38, 54],
    [ 7, 23, 39, 55],
    [ 8, 24, 40, 56],  //
    [ 9, 25, 41, 57],
    [10, 26, 42, 58],
    [11, 27, 43, 59],
    [12, 28, 44, 60],  //
    [13, 29, 45, 61],
    [14, 30, 46, 62],
    [15, 31, 47, 63],
    [ 0,  4,  8, 12],  // Forward
    [ 1,  5,  9, 13],
    [ 2,  6, 10, 14],
    [ 3,  7, 11, 15],
    [16, 20, 24, 28],  //
    [17, 21, 25, 29],
    [18, 22, 26, 30],
    [19, 23, 27, 31],
    [32, 36, 40, 44],  //
    [33, 37, 41, 45],
    [34, 38, 42, 46],
    [35, 39, 43, 47],
    [48, 52, 56, 60],  //
    [49, 53, 57, 61],
    [50, 54, 58, 62],
    [51, 55, 59, 63],
    // 24 face diagonals.
    [ 0, 17, 34, 51],  // Back face.
    [ 4, 21, 38, 55],
    [ 8, 25, 42, 59],
    [12, 29, 46, 63],
    [ 3, 18, 33, 48],
    [ 7, 22, 37, 52],
    [11, 26, 41, 56],
    [15, 30, 45, 60],
    [ 0, 20, 40, 60],  // Left face.
    [ 1, 21, 41, 61],
    [ 2, 22, 42, 62],
    [ 3, 23, 43, 63],
    [12, 24, 36, 48], 
    [13, 25, 37, 49],
    [14, 26, 38, 50],
    [15, 27, 39, 51],
    [ 0,  5, 10, 15],  // Top face.
    [ 3,  6,  9, 12],
    [16, 21, 26, 31],
    [19, 22, 25, 28],
    [32, 37, 42, 47],
    [35, 38, 41, 44],
    [48, 53, 58, 63],
    [51, 54, 57, 60],
    // 4 body diagonals.
    [ 0, 21, 42, 63],
    [ 3, 22, 41, 60],
    [12, 25, 38, 51],
    [15, 26, 37, 48]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a]
    }
  }
  return null
}

export default Board3D
