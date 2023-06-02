import styled from "styled-components";

export const AddButton = styled.button`
position: absolute;
width: 80px;
height: 34px;
border-radius:6px;
border: none; 
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
background: #F64E60;
color:white;
right: 110px;
top: 20px;

&:hover {
    opacity: 0.9;
    transform: scale (0.98);
    cursor: pointer;
}`;
