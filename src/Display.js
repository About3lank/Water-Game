import RenderDisplay from './RenderDisplay.js'

function Display({position, setPosition, level, resolution, move}) {
    const { x, y } = position
    const {displayWidth, displayHeight} = resolution



    return (
        <>
            <div id="butons">
                <button onClick={() => move(x-1,y)}>MOVE LEFT</button>
                <button onClick={() => {move(x+1,y)}}>MOVE RIGHT</button>
                <button onClick={() => move(x,y-1)}>MOVE UP</button>
                <button onClick={() => {move(x,y+1)}}>MOVE DOWN</button>
            </div>

            <RenderDisplay level={level} position={position} resolution={resolution} />
        </>
    )
}

export default Display;