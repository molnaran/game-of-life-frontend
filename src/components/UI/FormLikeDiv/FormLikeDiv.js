import styled from "styled-components";

const FormLikeDiv = styled.div`
    flex-flow: row wrap;
    align-items: center;  
    padding: 1em 0 0 0;

    label {
        margin: 5px 10px 5px 0;
        color: rgb(32, 32, 85);
    }

    input {
        vertical-align: middle;
        margin: 5px 10px 5px 0;
        padding: 7px;
        background-color: #fff;
        border: 1px solid rgb(32, 32, 85);
        width: 40px;
        color: rgb(32, 32, 85);
    }
    div{
        margin-top: 3px;
    }
    
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: stretch;        
        input {
          margin: 10px 0;
    }       
`;

export default FormLikeDiv; 