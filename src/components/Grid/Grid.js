import React from 'react';

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
    border: 2px solid rgb(95, 95, 235);
    box-sizing: border-box;

    :hover{
        cursor: ${props => props.isLocked ? "not-allowed" : "auto"}
    }
`;

const Grid = props => {    
    const {isLocked, grid, columns, cellWidth, handleCellToggle} =props;

    let gridCells = null;
    if (Array.isArray(grid) && Array.isArray(grid[0])){
        gridCells = grid.map((arr,i) => arr.map((num,j) => 
            <Cell 
                key={i+"_"+j} 
                value={num} 
                row={i} 
                col={j} 
                cellWidth={cellWidth} 
                onCellClick={handleCellToggle}/>));
    }   

    return (
        <GridContainer>
            <DynamicGrid 
                columns={columns} 
                cellWidth={cellWidth} 
                isLocked={isLocked}>      
                    {gridCells}            
            </DynamicGrid>
        </GridContainer>)
}

export default Grid;
