import React from 'react';
import './App.css';

function App() {
  const letter = ['A', 'N', 'G', 'K', 'L', 'U', 'N', 'G', '!']
  const [squares, setSquares] = React.useState(JSON.parse(localStorage.getItem("squares")) || []);

  const saveToLocalStorage = () => localStorage.setItem("squares", JSON.stringify(squares));
  React.useEffect(saveToLocalStorage, [squares]);

  const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

  const addSquare = () => squares.length < 9
    ? setSquares(squares.concat({ background: getRandomColor() }))
    : alert("Maximum number of squares is reached.");

  const deleteSquare = () => squares.length > 0
    ? setSquares(squares.slice(0, squares.length - 1))
    : alert("There are no squares :(.")

  const changeSquareColor = (idx) => () =>
    setSquares(squares.map(
      (square, index) => index === idx
        ? { background: getRandomColor() }
        : square
    ))

  return (
    <div className="App">
      <div className="grid-container">
        {squares.map((square, index) =>
          <button
            className="square"
            onClick={changeSquareColor(index)}
            style={{ ...square }}
          >
            {letter[index]}
          </button>
        )}
      </div>
      <div className="buttonContainer">
        <button type="button" className="button" onClick={addSquare} >
          +
        </button>
        <button type="button" className="button" onClick={deleteSquare}>
          -
        </button>
      </div>
    </div >
  );
}

export default App;
