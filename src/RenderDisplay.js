function RenderDisplay(props) {
    const { level, cameraPosition, resolution } = props
    const { x, y } = cameraPosition

    const { displayWidth, displayHeight } = resolution

    console.log("level: ", level)
    console.log("x, y, displayHeight: ", x, y, displayHeight)

    let view = level.slice(y, y + displayHeight)
    .map( row => row.slice(x, x + displayWidth))
    
    console.log("viewing: ", view)

    return (
        <table id="game-display">
            {view.map( row => <tr>{
                row.map( c => <td className={c}></td>)}
                </tr>)}
        </table>
    )
}

export default RenderDisplay;