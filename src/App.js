// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Display from './Display.js'
import KeystrokeEventHandler from './KeystrokeEventHandler.js'

function App() {
 
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0 })
  const [tideLevel, setTideLevel] = useState(6)

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
    "w,x,w,x,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,x,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w",
    "w,w,w,w,w,w,w,w,w,w,x,w,x,w,w,w,w,w,w,w,x,x,x,w,w,w,w,w,w,w,w,w",
    "x,x,w,w,w,w,w,w,x,w,w,w,x,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
            ]

  function move(newX, newY) {
    console.log('move clicked')
    if ( newX >= 0 && newY >= 0) {
    setCameraPosition( { x: newX, y: newY } )
    }
  }

  function fillTideLevel(board, tideLevel) {

    const aboveWater = [ ...board.slice(0, tideLevel)]
    const belowWater = [ ...board.slice(tideLevel, board.length).map(r => r.map( c => c === 'x' ? c = c : c = 'U')) ]
  
    
    return [ ...aboveWater, ...belowWater ]

  }

  let board = boardData.map( row => row.split(','))
  console.log(board)

  board = fillTideLevel(board, tideLevel)

  return (
    <>
      <h1>Water Game</h1>
      
      <div id="game-container">
        <Display cameraPosition={cameraPosition} resolution={resolution} level={board} move={move} />
        {/* <KeystrokeEventHandler /> */}
      </div>
    </>


  );
}

export default App;
