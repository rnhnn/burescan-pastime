import { useState } from 'react';
import './App.css'

function Square() {
  const [value, setValue] = useState(":)");

  function handleClick() {
    setValue('X');
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
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
