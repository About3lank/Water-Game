// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Display from './Display.js'
import KeystrokeEventHandler from './KeystrokeEventHandler.js'

function App() {
  const level = [
    "x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,x,x,w,w,w,w,x,x,x,x,w,w,w",
    "x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,w,x,x,w,w,w,w,w",
    "w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,w,w,w,w,w,w,w,w",
    "w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,x,x,x,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,w,x,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,x,w,w,w,x,x,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w,x,x,x,w,w,w",
    "w,w,w,w,w,w,x,w,w,x,w,w,w,w,w,w,x,w,w,w,w,x,x,w,w,w,w,w,w,w,w,w",
    "w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,w,w,x,w,x,w,w,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,x,w,x,w,w,w,w,w,w,w,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
    "w,x,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x,x,w,w",
    "w,w,w,w,w,w,w,w,w,w,x,w,x,w,w,w,w,w,w,w,x,x,x,w,w,w,w,w,w,w,w,w",
    "x,x,w,w,w,w,w,w,x,w,w,w,x,x,x,x,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w",
            ]

  const resolution = {displayWidth: 16, displayHeight: 9}

  const [position, setPosition] = useState({ x: 0, y: 0 })

  function move(newX, newY) {
    console.log('move clicked')
    if ( newX >= 0 && newY >= 0) {
    setPosition( { x: newX, y: newY} )
    }
  }


  return (
    <>
      <h1>Water Game</h1>
      
      <div id="game-container">
        <Display position={position} setPosition={setPosition} resolution={resolution} level={level} move={move} />
        {/* <KeystrokeEventHandler /> */}
      </div>
    </>


  );
}

export default App;
