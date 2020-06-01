import React from 'react';
import styled from "styled-components";

const CellDiv = styled.div`
    width:  ${props => props.cellWidth}px;
    height:  ${props => props.cellWidth}px;
    box-shadow: 0 0 0 1px rgb(95, 95, 235);
    background-color: ${props => props.value === 0 ? 'white': "rgb(32, 32, 85)"};
    display: flex;
    align-items: center;
    box-sizing:content-box;    
`;
const Cell = React.memo(props => { 
    const {value, row, col, cellWidth, onCellClick} = props; 
    const handleClick = () => {
        onCellClick(row, col);
    }
    return (
        <CellDiv 
            cellWidth={cellWidth} 
            value={value} 
            onClick={handleClick}>
        </CellDiv>);
})

export default Cell;
