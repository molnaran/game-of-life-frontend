
import React, { useState, useEffect } from 'react';

import Header from "./components/Header/Header";
import NewGame from "./components/NewGame/NewGame";
import Grid from "./components/Grid/Grid";



function App() {
  const STARTINGROWS= 3;
  const STARTINGCOLUMNS =3;
  const [grid, setGrid] = useState(null);
  const [rows, setRows] = useState(STARTINGROWS);
  const [columns, setColumns] = useState(STARTINGCOLUMNS);
  const [cellWidth] = useState(20);

  useEffect(() => {
    handleNewGrid(STARTINGROWS, STARTINGCOLUMNS);
  }, []);

  function handleNewGrid(rows, cols){
    const newGrid = getClearGameOfLife(rows, cols);
    setGrid(newGrid);
    setRows(rows);
    setColumns(cols);
  }

  function handleRandomGrid(rows, cols){
    const newGrid = getRandomGameOfLife(rows, cols);
    setGrid(newGrid);
    setRows(rows);
    setColumns(cols);
  }

  return (
    <div className="App">      
      <Header />
      <NewGame initialRows= {rows} initialColumns={columns} handleNewGrid={handleNewGrid} handleRandomGrid={handleRandomGrid}/>
      <Grid grid={grid} columns={columns} cellWidth={cellWidth} />
    </div>
  );
}



function getRandomGameOfLife(rows, cols){
  let arr = [];
  for(let i = 0; i < rows; i++) {
      arr[i] = [];
      for(let j = 0; j < cols; j++) {
          arr[i][j] = Math.floor(Math.random()*2) === 1 ? 1: 0;
      }
  }
  return arr;
}

function getClearGameOfLife(rows, cols, defaultValue=0) {
  let arr = [];
  for(let i = 0; i < rows; i++) {
      arr[i] = [];
      for(let j = 0; j < cols; j++) {
          arr[i][j] = defaultValue;
      }
  }
  return arr;
}


/*
const fetchNextGen = async () => {
  try {
    const startingGrid = randomGameOfLife(200,200);        
    console.table(startingGrid);
    let result = await axios.post(
      "http://localhost:5000/gameoflife/next", startingGrid);
    setGrid(result.data);
  } catch (e) {
    console.log(e)
  }
};
*/

export default App;
