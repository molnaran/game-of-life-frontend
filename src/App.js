
import React, { useState, useEffect } from 'react';
import axios from "axios";

import Grid from "./components/Grid/Grid";


function App() {
  const [grid, setGrid] = useState(null); 

  useEffect(() => {
    const fetchNextGen = async () => {
      try {
        const startingGrid = randomGameOfLife(5,5);        
        console.table(startingGrid);
        let result = await axios.post(
          "http://localhost:5000/gameoflife/next", startingGrid);
          console.table(result.data)
        setGrid(result.data);
      } catch (e) {
        console.log(e)
      }
    };
    fetchNextGen(); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Alma
      </header>
      <Grid grid={grid} />
    </div>
  );
}

function randomGameOfLife(rows, cols){
  let arr = [];
  for(let i = 0; i < rows; i++) {
      arr[i] = [];
      for(let j = 0; j < cols; j++) {
          arr[i][j] = Math.floor(Math.random()*2) === 1 ? 1: 0;
      }
  }
  return arr;
}

export default App;
