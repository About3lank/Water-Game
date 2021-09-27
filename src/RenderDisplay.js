function RenderDisplay(props) {
    const { level, position, resolution } = props
    const { x, y } = position


    const { displayWidth, displayHeight } = resolution

    console.log("level: ", level)
    console.log("x, y, displayHeight: ", x, y, displayHeight)

    let view = level.slice(y, y + displayHeight)
    .map( row => row.split(',')  )
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


//     const {level, position} = props

//     // const testLevelArray = [
//     //                         'X', 'X', 'X', ' ',
//     //                         'X', 'X', ' ', ' ',
//     //                         'X', ' ', ' ', ' ',
//     //                         ' ', ' ', ' ', ' ']

//     function buildTable(level) {

//         

//         const levelGrid = [ ...displayHeight.map( (val[x]) => ) ]

//         function initializeTable(level) {
//             return (
//                 <table>
//                     {populateTable(level)}
//                     level.map(

//                     )
//                 </table>
//             )
//         }

//         function populateTable(level) {

//             return (
//                 <>
//                     { level.filter( () =>
//                         for (let i=0; i<= displayHeight; i = i + displayWidth) {
//                             console.log("hi")
//                         }

//                     } 
//                 </>
//             )

//         }

//         function newRow(index) {

//             let row = []
//             level.filter(x => (index <= x < index + displayWidth) )
//             console.log("hi")


//             return (
//                 <tr id={`row-${index}`}>
//                     {level.map((cIndex) => newCell(cIndex))}
//                 </tr>

//             )
//         }


//         function newCell(index) {
//             return (
//                 <td>
//                     <p>SOME HTML</p>
//                 </td>
//             )
//         }


//         return initializeTable(level)
//     }

//     return buildTable(level, position)

// }


export default RenderDisplay;