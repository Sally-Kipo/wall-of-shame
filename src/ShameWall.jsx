import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  width: 198px;
  height: 22px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #212121;
`;

const Wrapper = styled.section`
  position: relative;
  width: 1180px;
  height: 493px;
  top: 20px;
  left: 150px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

const Members = styled.p`
  position:relative;
  width: 70px;
  height: 21px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #B5B5C3;
  margin-top:50px;
  right:190px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
`;

const Input = styled.input`
  height: 28px;
  width: 300px;
  border-radius: 5px;
  padding: 10px 15px;
  margin-left: 30px;
  margin-top:10px;
  border-color:#E2E1E5;

`;

const AddButton = styled.button`
position: absolute;
width: 80px;
height: 34px;
right: 0px;
top: 0px;
background: #F64E60;
color:white;
right:90px;
top:20px;
`;
const Header = styled.header`
position: absolute;
display: flex;
flex-direction: row;
height: 50px;
width: 1118px;
left: 32px;
top: 26px;
border-radius: 0px;
padding: 0px 100px 0px 0px;
`;
const ScHeader = styled.header`
position: relative;
height: 43px;
left: 0px;
right: 0px;
top: 100px;
background: #F3F6F9;
border-radius: 6px;`;

const SctitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px;
`;

const Sctitle = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  color:#B5B5C3;
  text-align:center;
  margin-top:10px;
`;

function ShameWall() {
  return (
<Wrapper>
    <Header>
        <Title>Wall of shame</Title>
        <Members>Members</Members>
    <InputContainer>
        <Input placeholder="Name" />
        <Input placeholder="Excuse" />
    </InputContainer>
      <AddButton>Create</AddButton>
    </Header>
    <ScHeader>
      <SctitleContainer>
        <Sctitle>Name</Sctitle>
        <Sctitle>excuse</Sctitle>
        <Sctitle>count</Sctitle>
      </SctitleContainer>
    </ScHeader>
</Wrapper>
  );
}

export default ShameWall;
