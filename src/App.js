// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Display from './Display.js'
import KeystrokeEventHandler from './KeystrokeEventHandler.js'

function App() {
 
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0 })
  const [tideLevel, setTideLevel] = useState(5)

  const resolution = {displayWidth: 16, displayHeight: 9}
  const boardData = [
    "x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,x,x,w,w,w,w,x,x,x,x,w,w,w",
    "x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,w,x,x,w,w,w,w,w",
    "w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,w,w,w,w,w,w,w,w",
    "w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,w,x,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,x,x,x,w,x,x,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,x,x,x,w,w,w",
    "w,w,w,w,w,w,x,w,x,x,w,w,w,w,w,w,x,w,w,w,w,x,x,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,x,w,x,w,w,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,x,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,x,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w",
    "w,w,w,w,w,w,w,w,w,w,x,w,x,w,w,w,w,w,w,w,x,x,x,w,w,w,w,w,w,w,w,w",
    "x,x,w,w,w,w,w,w,x,w,w,w,x,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
            ]

  function move(newX, newY) {

    newX >= 0 && newY >= 0 ? setCameraPosition( { x: newX, y: newY } ) : console.log("cannot move") 
  }

  function changeTide(newTideLevel) {
    // console.log("tide button clicked, attempting tide level:", newTideLevel)
    newTideLevel >=0 && newTideLevel <= board.length ? setTideLevel(newTideLevel) : console.log("cannot change tide")
  }

  function fillTideLevel(board, tideLevel) {
    board.map ( ( row, i ) => ( 
      row.map( ( cell, n ) => ( 
        i>= tideLevel && cell !== 'x' ? board[i][n] = 'U' : console.log( "passed: ", cell ) 
        ) )  
    ) )

    return board
  }

  function placeBoat(board, tideLevel, displayWidth) {
    board[tideLevel - 1][cameraPosition.x + displayWidth/2 ] = 'B'
    board[tideLevel - 1][cameraPosition.x + displayWidth/2 - 1 ] = 'B'

    return board
  }

  let board = boardData.map( row => row.split(','))
  board = fillTideLevel(board, tideLevel)
  board = placeBoat(board, tideLevel, resolution.displayWidth)

  console.log("board: ", board)
  

  return (
    <>
      <h1>Water Game</h1>
      
      <div id="game-container">
        <Display cameraPosition={cameraPosition} tideLevel={tideLevel} changeTide={changeTide} resolution={resolution} level={board} move={move} />
        {/* <KeystrokeEventHandler /> */}
      </div>
    </>


  );
}

export default App;
