import React from 'react';

import FormLikeDiv from "../UI/FormLikeDiv/FormLikeDiv"
import Spinner from "../UI/Spinner/Spinner" ;
import CustomButton from "../UI/CustomButton/CustomButton";

const GameControlls = props => {
    const nextGenButton = props.isLoading ? <Spinner margin={"10px 50px"} size={"30px"}> Loading...</Spinner> : <CustomButton onClick={props.handleNextGen}>Get Next Gen!</CustomButton>

    return <FormLikeDiv>
        {nextGenButton}
    </FormLikeDiv>    
}

export default GameControlls;