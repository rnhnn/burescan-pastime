import { useState } from 'react';
import './App.css'

function Square({value}) {
  return (
    <button className="square">{value}</button>
  );
}

function Board() {
  const [squares, setSquare] = useState(Array(9).fill(":)"));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

function App() {

  return (
    <>
      <h1>Burescan Pastime</h1>
      <div className="board">
        <Board />
      </div>
    </>
  )
}

export default App
