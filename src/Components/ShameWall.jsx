import React, { useState } from "react";
import { AddButton } from './styles/Button.styled';
import { Title, Members, Header } from './styles/Header.styled';
import { InputContainer, Input } from './styles/Input.styled';
import { Wrapper } from './styles/Wrapper.styled';
import { ScHeader, SctitleContainer, Sctitle } from './styles/Secondheader.styled';
import { Lists, Names, Excuses, Total, Increase } from './styles/List.styled';

function ShameWall() {
  const [name, setName] = useState("");
  const [excuse, setExcuse] = useState("");
  const [data, setData] = useState([
    {
      name: "Brad Simmons",
      excuse: "Remember when you were young you shone like the sun. Shine on you",
      count: 0
    }
  ]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  const handleExcuseChange = (e) => {
    setExcuse(e.target.value);
  };

  const handleCreate = () => {
    const newItem = { name, excuse, count: 0 };
    setData([...data, newItem]);
    setName("");
    setExcuse("");
  };

  const handleIncrease = (index) => {
    const updatedData = [...data];
    updatedData[index].count += 1;
    setData(updatedData);
  };

  const membersCount = data.length;

  return (
    <Wrapper>
      <Header>
        <Title>Wall of shame</Title>
        <Members>{membersCount} Members</Members>
        <InputContainer>
          <Input
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            placeholder="Excuse"
            value={excuse}
            onChange={handleExcuseChange}
          />
          <AddButton onClick={handleCreate}>Create</AddButton>
        </InputContainer>
      </Header>
      <ScHeader>
        <SctitleContainer>
          <Sctitle>Name</Sctitle>
          <Sctitle>Excuse</Sctitle>
          <Sctitle>Count</Sctitle>
        </SctitleContainer>
      </ScHeader>
      {data.map((item, index) => (
        <SctitleContainer key={index}>
          <Lists>
              <Names>{item.name}</Names>
          </Lists>
          <Lists>
              <Excuses>{item.excuse}</Excuses>
          </Lists>
          <Lists>
              <Total>{item.count}</Total>
              <Increase onClick={() => handleIncrease(index)}>
                Increase
              </Increase>
          </Lists>
        </SctitleContainer>
      ))}
    </Wrapper>
  );
}

export default ShameWall;
