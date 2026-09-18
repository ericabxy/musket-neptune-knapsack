function Square3D ({ flag, onSquareClick }) {
  return (
    <button className='square square--3d' onClick={onSquareClick}>
      {flag}
    </button>
  )
}

export default Square3D
