import styled from "styled-components";

const CustomButton = styled.button`
    {
        padding: 7px 10px;
        background-color: rgb(32, 32, 85);
        border: 1px solid #ddd;
        color: white;
        border-radius: 10px;
    }
    :hover {
        background-color: rgb(95, 95, 235);
    } 
    :disabled{
        background-color: grey;
        color: white;
    }
`;
export default CustomButton;