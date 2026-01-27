import './App.css'

function Square({ value }) {
  return (
    <button className="square">{value}</button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
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
