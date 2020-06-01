import React, {useState, useEffect, useCallback } from 'react';
import axios from "axios";
import styled from "styled-components";

import {getRandomGameOfLife, copyTwoDimArray, getClearGameOfLife} from "./util/matrix";
import Header from "./components/UI/Header/Header";
import GridController from "./components/GridController/GridController";
import Grid from "./components/Grid/Grid";
import GameController from "./components/GameController/GameController";
import ErrorDiv from "./components/UI/ErrorDiv/ErrorDiv";

const GAMEOFLIFENEXTGENURL = "http://localhost:5000/gameoflife/next";
const STARTINGROWS= 20;
const STARTINGCOLUMNS = 20;
const ERROR_SERVER_NOT_AVAILABLE = "Can't connect to server, please try again later!";
const MATRIX_BOUNDS = {
  min: 3,
  max: 100
}

const AppContainerDiv = styled.div`
  width: 100%;
  padding-bottom: 1em;
  text-align: center;
  box-sizing: border-box;
`;



function App() {
  const [grid, setGrid] = useState(null);
  const [rows, setRows] = useState(STARTINGROWS);
  const [columns, setColumns] = useState(STARTINGCOLUMNS);
  const [cellWidth] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(null);    
  
  const handleGenerateGrid = function(rows, cols, grid){
    setError(null);
    setGrid(grid);
    setRows(rows);
    setColumns(cols);
  }

  const handleNewGrid = function(rows, cols){
    if (isRunning || isLoading){
      return;
    }
    const newGrid = getClearGameOfLife(rows, cols);
    handleGenerateGrid(rows, cols, newGrid);
  }

  const handleRandomGrid = function(rows, cols){    
    if (isRunning || isLoading){
      return;
    }
    const randomGrid = getRandomGameOfLife(rows, cols);
    handleGenerateGrid(rows, cols, randomGrid);
  }

  const getGridBounds = function(grid){
    const rows = grid.length;
    const cols = grid[0].length;
    return {rows, cols};
  }

  const handleNextGen = useCallback(async function(){
    setError(null);
    try {     
      setIsLoading(true);
      let result = await axios.post(GAMEOFLIFENEXTGENURL, grid); 
        const resultGrid = result.data;
        const gridBounds = getGridBounds(resultGrid);
        handleGenerateGrid(gridBounds.rows, gridBounds.cols, resultGrid);  
        setIsLoading(false);      
    } catch (e) {
      setError(ERROR_SERVER_NOT_AVAILABLE);
      setIsLoading(false);
      setIsRunning(false);
    }
  }, [grid])  

  const handleCellToggle = useCallback((function (row, col){ 
    if (isRunning || isLoading){
      return;
    }  
    setGrid(prevGrid => {
      const copied = copyTwoDimArray(prevGrid);
      copied[row][col] = copied[row][col] === 1 ? 0: 1;
      return copied;
    });
    
  }), [isRunning, isLoading]);  

  const handleToggleRunning = function(){      
    setIsRunning(prevIsRunning => !prevIsRunning);    
  }

  useEffect(() => {
    const newGrid = getClearGameOfLife(STARTINGROWS, STARTINGCOLUMNS);
    handleGenerateGrid(STARTINGROWS, STARTINGCOLUMNS, newGrid);
  }, []);

  useEffect(() => {
    let timer;
      if (isRunning && !isLoading){        
        timer = setTimeout(()=> handleNextGen(), 1000);
      }      
    return () => {
      clearTimeout(timer);
    }
  }, [grid, isLoading, isRunning, handleNextGen]);

  let errorElement = null;
  if (error){
    errorElement = (
      <ErrorDiv>
        {error}
      </ErrorDiv>)
  }

  return (
    <AppContainerDiv className="App">      
      <Header />
      {errorElement}
      <GridController initialRows= {rows}
        initialColumns={columns} 
        handleNewGrid={handleNewGrid} 
        handleRandomGrid={handleRandomGrid} 
        bounds={MATRIX_BOUNDS} 
        isLocked={isRunning || isLoading}/>      
      <Grid 
        grid={grid} 
        columns={columns} 
        cellWidth={cellWidth} 
        handleCellToggle={handleCellToggle} 
        isLocked={isRunning || isLoading} />      
      <GameController 
        handleNextGen={handleNextGen} 
        isLoading={isLoading} 
        isRunning={isRunning} 
        isLocked={isRunning || isLoading} 
        handleToggleRunning={handleToggleRunning}/>      
    </AppContainerDiv>
  );
}

export default App;