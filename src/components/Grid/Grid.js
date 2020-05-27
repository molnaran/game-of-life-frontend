import React from 'react'

const Grid = props => {
    let gridAsNums = null;
    if (props.grid){
        gridAsNums =props.grid.map(arr =>{
            return arr.map(el => {
                console.log(el);
                return el;
            })
        })        
    }
    

    return <div>
        {gridAsNums}
    </div>
}

export default Grid;
