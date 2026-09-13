function Square ({ flag, onSquareClick }) {
  return (
    <button
      className='square'
      onClick={onSquareClick}
    >
      {flag}
    </button>
  )
}

export default Square
