import styled from "styled-components";

export const Lists = styled.div`
display: flex;
flex-direction: row;
width:1250px;
position:relative;
left: -30px;
top: 110px;
`;

export const Names = styled.h1`
font-family: Poppins;
font-size: 14px;
font-weight: 600;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: ;
// ${({ cl }) => cl}
`
export const Excuses = styled.p`
font-family: Poppins;
font-size: 13px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #B5B5C3;
`;

export const Increase = styled.button`
  position:absolute;
  height: 34px;
  width: 92px;
  top: 10px;
  right: -30px;
  border-radius: 7px;
  border: none;
  background: #C9F7F5;
  color: #1BC5BD;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);

&:hover {
    opacity: 0.9;
    transform: scale (1.98);
    cursor: pointer;
}`;

export const Total = styled.h2`
position: absolute;
top: 1px;
right:320px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;
color: #464E5F;
`