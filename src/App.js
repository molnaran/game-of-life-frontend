
import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";

import Header from "./components/Header/Header";
import NewGame from "./components/NewGame/NewGame";
import Grid from "./components/Grid/Grid";
import GameControlls from "./components/GameControlls/GameControlls"


const GAMEOFLIFENEXTGENURL = "http://localhost:5000/gameoflife/next";
const STARTINGROWS= 20;
const STARTINGCOLUMNS = 20;

function App() {
  const [grid, setGrid] = useState(null);
  const [rows, setRows] = useState(STARTINGROWS);
  const [columns, setColumns] = useState(STARTINGCOLUMNS);
  const [cellWidth] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newGrid = getClearGameOfLife(STARTINGROWS, STARTINGCOLUMNS);
    setGrid(newGrid);
    setRows(STARTINGROWS);
    setColumns(STARTINGCOLUMNS);
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

  async function handleNextGen(){
    try {     
      setIsLoading(true);
      let result = await axios.post(
        GAMEOFLIFENEXTGENURL, grid);              
          setGrid(result.data);
          setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e)
    }
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
  
  function copyTwoDimArray(twodimarray){  
    return twodimarray.map(function(arr) {
      return arr.slice();
    });
  }
  
  const handleCellToggle = useCallback(function (row, col){
    setGrid(prevGrid => {
      const copied=copyTwoDimArray(prevGrid);
      copied[row][col] = copied[row][col] === 1 ? 0: 1;
      return copied;
    });
  }, []) 


  return (
    <div className="App">      
      <Header />
      <NewGame initialRows= {rows} initialColumns={columns} handleNewGrid={handleNewGrid} handleRandomGrid={handleRandomGrid}/>
      <Grid grid={grid} columns={columns} cellWidth={cellWidth} handleCellToggle={handleCellToggle} />
      <GameControlls handleNextGen={handleNextGen} isLoading={isLoading} />
    </div>
  );
}

export default App;
