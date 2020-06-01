import React, { useState } from 'react';

import FormLikeDiv from "../UI/FormLikeDiv/FormLikeDiv";
import ErrorDiv from "../UI/ErrorDiv/ErrorDiv";
import CustomButton from "../UI/CustomButton/CustomButton";

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

const GridController = props => { 
    const {isLocked, initialRows, initialColumns, bounds, handleNewGrid, handleRandomGrid} = props;   
    const [newRows, setNewRows] = useState(initialRows);    
    const [newColumns, setNewColumns] = useState(initialColumns);
    const [error, setError] = useState(null);        

    const INVALIDINPUTMSG = `The number of rows and columns must be an integer between ${bounds.min} and ${bounds.max}!`;

    const onNewGridClick = function() {
        setError(null);
        if (isInputDataValid(newRows, newColumns, bounds.min, bounds.max)){
            handleNewGrid(newRows, newColumns);
        }else{
            setError(INVALIDINPUTMSG);            
        }
    }

    const onRandomGridClick = function(){        
        setError(null);
        if (isInputDataValid(newRows, newColumns, bounds.min, bounds.max)){
            handleRandomGrid(newRows, newColumns);
        }else{
            setError(INVALIDINPUTMSG);
        }
    }    

    let errorElement = null;
    if (error){
        errorElement = (
            <ErrorDiv>
                {error}
            </ErrorDiv>);
    }

    return (
        <FormLikeDiv>            
            <label htmlFor="rows">Rows:</label>
            <input type="number" value={newRows} onChange={e => setNewRows(e.target.value)} name="rows"/>    
            <label htmlFor="columns">Columns:</label>
            <input type="number" value={newColumns} onChange={e => setNewColumns(e.target.value)} name="columns"/>  
            <CustomButton 
                onClick={onNewGridClick} 
                disabled={isLocked}>
                    Clear
            </CustomButton>
            <CustomButton 
                onClick={onRandomGridClick} 
                disabled={isLocked}>
                    Randomize
            </CustomButton>    
            {errorElement}
        </FormLikeDiv>)  
}

export default GridController;