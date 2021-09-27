import RenderDisplay from './RenderDisplay.js'

function Display({cameraPosition, tideLevel, changeTide, board, resolution, move, moveCam}) {
    const { x, y } = cameraPosition

    return (
        <>
            <div id="butons">
                <button onClick={() => move(-1, board)}>MOVE LEFT</button>
                <button onClick={() => move(1, board)}>MOVE RIGHT</button>
                
                <button onClick={() => changeTide(-1, board)}>RAISE TIDE</button>
                <button onClick={() => changeTide(1, board)}>LOWER TIDE</button>
               
                <button onClick={() => moveCam(0,-1)}>CAM UP</button>
                <button onClick={() => moveCam(0,1)}>CAM DOWN</button>
                <button onClick={() => moveCam(-1,0)}>CAM LEFT</button>
                <button onClick={() => moveCam(1,0)}>CAM RIGHT</button>

              
            </div>

            <RenderDisplay board={board} cameraPosition={cameraPosition} resolution={resolution} />
        </>
    )
}

export default Display;