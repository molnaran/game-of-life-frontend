import React from 'react';

import Spinner from "../UI/Spinner/Spinner" ;

const GameControlls = props => {
    const nextGenButton = props.isLoading ? <Spinner margin={"10px 50px"} size={"30px"}> Loading...</Spinner> : <button type="button" onClick={props.handleNextGen}>Get Next Gen!</button>

    return <div>
        {nextGenButton}
    </div>    
}

export default GameControlls;