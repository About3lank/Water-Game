import RenderDisplay from './RenderDisplay.js'

function Display({cameraPosition, level, resolution, move}) {
    const { x, y } = cameraPosition
    const {displayWidth, displayHeight} = resolution



    return (
        <>
            <div id="butons">
                <button onClick={() => move(x-1,y)}>MOVE LEFT</button>
                <button onClick={() => {move(x+1,y)}}>MOVE RIGHT</button>
                <button onClick={() => move(x,y-1)}>MOVE UP</button>
                <button onClick={() => {move(x,y+1)}}>MOVE DOWN</button>
            </div>

            <RenderDisplay level={level} cameraPosition={cameraPosition} resolution={resolution} />
        </>
    )
}

export default Display;