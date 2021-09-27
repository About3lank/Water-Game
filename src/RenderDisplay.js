function RenderDisplay(props) {
    const { board, cameraPosition, resolution } = props
    const { x, y } = cameraPosition
    const { displayWidth, displayHeight } = resolution

    let view = board.slice(y, y + displayHeight)
    .map( row => row.slice(x, x + displayWidth))

    return (
        <table id="game-display">
            {view.map( row => <tr>{
                row.map( c => <td className={c}></td>)}
                </tr>)}
        </table>
    )
}

export default RenderDisplay;