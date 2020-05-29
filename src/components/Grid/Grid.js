import React from 'react';

import '../../index.css';

import Cell from "./Cell/Cell"

import styled from "styled-components";


const DynamicGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, ${props => props.cellWidth}px);
    max-width: 80vw;
    max-height: 80vh;
    text-align: center;
    margin: auto;
    overflow: auto;    
    align-items: center;
    justify-items: center;    
`;

const Grid = props => {    
    const {grid, columns, cellWidth, handleCellToggle} =props;

    console.log("Grid rendering");

    let gridAsNums = null;   

    if (Array.isArray(grid) && Array.isArray(grid[0])){
        gridAsNums = grid.map((arr,i) => arr.map((num,j) => <Cell key={i+"_"+j} value={num} row={i} col={j} cellWidth={cellWidth} onCellClick={handleCellToggle}/> ));
    }   

    return <DynamicGrid columns={columns} cellWidth={cellWidth} >      
        {gridAsNums}
    </DynamicGrid>;
}


export default Grid;
