import React from 'react';

import '../../index.css';

import styled from "styled-components";
import Cell from "./Cell/Cell";

const GridContainer = styled.div`
    display: flex;
    text-align: center;
    margin: auto;
    box-sizing: border-box;
`;

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
    border: 2px solid rgb(166, 166, 192);
    box-sizing: border-box;
`;

const Grid = props => {    
    const {grid, columns, cellWidth, handleCellToggle} =props;

    console.log("Grid rendering");

    let gridAsNums = null;
    if (Array.isArray(grid) && Array.isArray(grid[0])){
        gridAsNums = grid.map((arr,i) => arr.map((num,j) => <Cell key={i+"_"+j} value={num} row={i} col={j} cellWidth={cellWidth} onCellClick={handleCellToggle}/> ));
    }   

    return <GridContainer>
        <DynamicGrid columns={columns} cellWidth={cellWidth}>      
            {gridAsNums}
        </DynamicGrid>
    </GridContainer> 
}


export default Grid;
