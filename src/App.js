// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Display from './Display.js'
// import KeystrokeEventHandler from './KeystrokeEventHandler.js'

function App() {
  const resolution = {displayWidth: 16, displayHeight: 9}
 
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0 })
  const [tideLevel, setTideLevel] = useState(5)
  const [boatPosition, setBoatPosition] = useState(resolution.displayWidth/2 - 1)

  const boardData = [
    "x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,x,x,w,w,w,w,x,x,x,x,w,w,w",
    "x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,w,x,x,w,w,w,w,w",
    "w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,w,w,w,w,w,w,w,w",
    "w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w",
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

  let board = boardData.map( row => row.split(','))
  board = fillTideLevel(board, tideLevel)
  board = placeBoat(board, tideLevel, resolution.displayWidth)

  function move(changeX, board) {
    const newX = boatPosition + changeX
    const newBoatLeft= board[tideLevel - 1][newX]
    const newBoatRight= board[tideLevel - 1][newX + 1]

    const canMove = () => {
      return newBoatLeft !== 'x' && newBoatRight !== 'x' && newX >=0 && newX + 1 < board[0].length - 4
    }

    const shouldMoveCam = () => {
      return canMove() && !( newX - Math.round(resolution.displayWidth/2) + 2 <= 0 || board[0].length - resolution.displayWidth/2 <= newX )
    }

    canMove() ? setBoatPosition(newX) : console.log("cant move")
    shouldMoveCam() ? moveCam(changeX, 0) : console.log ("didn't move cam")

    
    

  }

  function changeTide(newTideLevel) {
    let newBoatLeft
    let newBoatRight

    newTideLevel >= 1 ? newBoatLeft = board[newTideLevel - 1][boatPosition] : console.log("no")
    newTideLevel >= 1 ? newBoatRight = board[newTideLevel - 1][boatPosition + 1] : console.log("no")

    const canMove = () => newBoatLeft !== 'x' && newBoatRight !== 'x' && newTideLevel >=1 && newTideLevel < board.length

    canMove() ? setTideLevel(newTideLevel) : console.log("cannot change tide")
  }

  function moveCam(changeX, changeY) {
    const newX = cameraPosition.x + changeX
    const newY = cameraPosition.y + changeY
    const canMoveCam = () => newX >=0 && newY >=0 && newY + resolution.displayHeight < board.length && newX + resolution.displayWidth < board[0].length

    canMoveCam() ? setCameraPosition( { x: newX, y: newY } ) : console.log("can't move cam")
  }

  function fillTideLevel(board, tideLevel) {
    return (
      board.map ( ( row, i ) => ( 
        row.map( cell  => ( 
          i>= tideLevel && cell !== 'x' ? cell = 'U' : cell = cell 
          ) )  
      ) )
    )

  }

  function placeBoat(board, tideLevel) {
    board[tideLevel - 1][boatPosition] = 'B'
    board[tideLevel - 1][boatPosition + 1 ] = 'B'

    return board
  }

  console.log("board: ", board)
  

  return (
    <>
      <h1>Water Game</h1>
      
      <div id="game-container">
        <Display cameraPosition={cameraPosition} tideLevel={tideLevel} changeTide={changeTide} resolution={resolution} board={board} move={move} moveCam={moveCam}/>
        {/* <KeystrokeEventHandler /> */}
      </div>
    </>


  );
}

export default App;
