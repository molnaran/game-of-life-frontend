import React from 'react';

import styled from "styled-components";

const CellDiv = styled.div`
    width:  ${props => props.cellWidth}px;
    height:  ${props => props.cellWidth}px;
    border: 1px solid black;
    background-color: ${props => props.value === 0 ? 'white': 'black'};
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;
const Cell = React.memo(props => {   

    console.log("rendering")

    const handleClick = () => {
        props.onCellClick(props.row, props.col);
    }

    return <CellDiv cellWidth={props.cellWidth} value={props.value} onClick={handleClick}>
    </CellDiv>;
})


export default Cell;
