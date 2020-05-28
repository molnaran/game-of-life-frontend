import React, { useState } from 'react';

const NewGame = props => {
    const MINROWCOLUMNNUM = 3;
    const MAXROWCOLUMNNUM = 200;
    const [newRows, setNewRows] = useState(props.initialRows);    
    const [newColumns, setNewColumns] = useState(props.initialColumns);

    return <div>
            <label htmlFor="rows">Rows:</label>
            <input type="number" value={newRows} onChange={e => setNewRows(e.target.value)} name="rows"/>        
            <label htmlFor="columns">Columns:</label>
            <input type="number" value={newColumns} onChange={e => setNewColumns(e.target.value)} name="columns"/>
            <button type="button" onClick={onNewGridClick}>Clear!</button>
            <button type="button" onClick={onRandomGridClick}>Randomize!</button>
    </div>

    function onNewGridClick() {
        if (isInputDataValid(newRows, newColumns, MINROWCOLUMNNUM, MAXROWCOLUMNNUM)){
            props.handleNewGrid(newRows, newColumns);
        }else{
            alert("Invalid input!");
        }
    }

    function onRandomGridClick(){  
        if (isInputDataValid(newRows, newColumns, MINROWCOLUMNNUM, MAXROWCOLUMNNUM)){
            props.handleRandomGrid(newRows, newColumns);
        }else{
            alert("Invalid input!");
        }
    }

    function isInputDataValid(rows, columns, minValue, maxValue){
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
    
}

export default NewGame;