import React, {useState} from 'react';

import FormLikeDiv from "../UI/FormLikeDiv/FormLikeDiv"
import Spinner from "../UI/Spinner/Spinner";
import CustomButton from "../UI/CustomButton/CustomButton";

const MANUALMODE = 0;
const AUTOMATICMODE = 1;
const GameController = props => {    
    const [mode, setMode] = useState(MANUALMODE);  
    const {isLoading, isLocked, isRunning, handleNextGen, handleToggleRunning} = props;

    const switchMode = () => {
        if (isRunning || isLoading){
            return;
        }
        if (mode === MANUALMODE){
            setMode(AUTOMATICMODE);
        }else{
            setMode(MANUALMODE);
        }
    }

    let modeButton= <CustomButton onClick={switchMode} disabled={isLocked}>
                        {mode === AUTOMATICMODE ? "Switch to manual" : "Switch to automatic"}
                    </CustomButton>;

    const spinner = <Spinner margin={"10px 50px"} size={"30px"}> Loading...</Spinner>;

    let controls;    
    if (mode === AUTOMATICMODE){
        if (!isRunning && isLoading){
            controls = spinner;
        }else if(isRunning){
            controls = <CustomButton onClick={handleToggleRunning}>
               Stop
            </CustomButton>
        }else{
            controls = <CustomButton onClick={handleToggleRunning}>
               Start
            </CustomButton>
        }
    }else{
        controls = <CustomButton onClick={handleNextGen}>Next</CustomButton>       
        if (isLoading){
            controls = spinner;
        }
    }
    
    return (     
        <FormLikeDiv>
            {modeButton}
            <div>            
                {controls}
            </div>
        </FormLikeDiv>);
}

export default GameController;