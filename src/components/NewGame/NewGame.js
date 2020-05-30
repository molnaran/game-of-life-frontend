import React, { useState } from 'react';
import FormLikeDiv from "../UI/FormLikeDiv/FormLikeDiv";

import CustomButton from "../UI/CustomButton/CustomButton"

function isInputDataValid (rows, columns, minValue, maxValue){
    const parsedRow = parseInt(rows);        
    const parsedColumns = parseInt(columns);
    if (!parsedRow || !parsedColumns || isNaN(parsedRow) || isNaN(parsedColumns)){
        return false;
    }
    if (parsedRow<minValue || parsedColumns<minValue || parsedRow>maxValue || parsedColumns>maxValue){
        return false;
    }
    return true;
}    

const MINROWCOLUMNNUM = 3;
const MAXROWCOLUMNNUM = 100;



const NewGame = props => {    
    const [newRows, setNewRows] = useState(props.initialRows);    
    const [newColumns, setNewColumns] = useState(props.initialColumns);

    const onNewGridClick = function() {
        if (isInputDataValid(newRows, newColumns, MINROWCOLUMNNUM, MAXROWCOLUMNNUM)){
            props.handleNewGrid(newRows, newColumns);
        }else{
            alert("Invalid input!");
        }
    }

    const onRandomGridClick = function(){  
        if (isInputDataValid(newRows, newColumns, MINROWCOLUMNNUM, MAXROWCOLUMNNUM)){
            props.handleRandomGrid(newRows, newColumns);
        }else{
            alert("Invalid input!");
        }
    }    

    return <FormLikeDiv>            
        <label htmlFor="rows">Rows:</label>
        <input type="number" value={newRows} onChange={e => setNewRows(e.target.value)} name="rows"/>    
        <label htmlFor="columns">Columns:</label>
        <input type="number" value={newColumns} onChange={e => setNewColumns(e.target.value)} name="columns"/>  
        <CustomButton onClick={onNewGridClick}>Clear!</CustomButton>
        <CustomButton onClick={onRandomGridClick}>Randomize!</CustomButton>       
    </FormLikeDiv>    
}

export default NewGame;