import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Input = styled.input`
  height: 28px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #E2E1E5;
  padding: 10px 15px;
  margin-left: 30px;
  margin-top:10px;
  &.error {
    border: 2px solid red;
    animation: shake 0.5s;
  }
`;