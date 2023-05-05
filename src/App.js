import './App.css';
import {useState} from 'react'    //Hook



// Squares on the board
function Square({value , onSquareClick}){
  // const [value, setValue] = useState(null);

  // // Handle Click Event
  // function handleClick (){
  //   setValue("X")
  // }

  return (  
    <button className="square" onClick={onSquareClick} >{value}</button>
  );
}

// Playboard
export function Board(){

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick (i){

    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
        <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Driven
function App() {
  return (
    <>
    <h1>Hello World</h1>
    <Board />
    </>
  );
}

export default App;
