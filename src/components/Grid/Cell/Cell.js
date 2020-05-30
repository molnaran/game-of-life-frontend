import React from 'react';

import styled from "styled-components";

const CellDiv = styled.div`
    width:  ${props => props.cellWidth}px;
    height:  ${props => props.cellWidth}px;
    box-shadow: 0 0 0 1px rgb(166, 166, 192);
    background-color: ${props => props.value === 0 ? 'white': "rgb(15, 7, 136)"};
    display: flex;
    align-items: center;
    box-sizing:content-box;    
`;
const Cell = React.memo(props => {   

    console.log("rendering");

    const handleClick = () => {
        props.onCellClick(props.row, props.col);
    }

    return <CellDiv cellWidth={props.cellWidth} value={props.value} onClick={handleClick}>
    </CellDiv>;
})


export default Cell;
