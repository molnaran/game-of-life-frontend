import React from 'react'
import styled from "styled-components";

const HeaderDiv = styled.div`
    width: 100%;
    padding: 0px;    
    text-align: center;
    box-sizing: border-box;
    color:rgb(32, 32, 85);

    h1{        
        font-size: 3rem;
        font-weight: bold;
    }    

    p{        
        font-size: 1em;
        margin 1em 0 0 0;
    }
`;

const Header = props =>
    <HeaderDiv>
        <h1>Conway's Game of Life</h1>
        <p>implementation by</p>
        <p>András Molnár</p>
    </HeaderDiv>


export default Header;