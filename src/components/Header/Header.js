import React from 'react'
import styled from "styled-components";

const HeaderDiv = styled.div`
    width: 100%;
    padding: 20px;    
    text-align: center;
    box-sizing: border-box;

    h1{        
        font-size: 3rem;
        font-weight: bold;
    }    

    p{        
        font-size: 1rem;
    }
`;

const Header = props =>
    <HeaderDiv>
        <h1>Conway's Game of Life</h1>
        <p>implementation by</p>
        <p>András Molnár</p>
    </HeaderDiv>


export default Header;