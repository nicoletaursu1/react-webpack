import React from "react";
import styled from "styled-components";

interface InputProps {
  name: string,
  type: string,
  value: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SignInput: React.FC<InputProps> = (props) => {
  return (
    <TextInput
      onChange={props.onChange}
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

const TextInput = styled.input`
  outline: none;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 5px 0;
  padding: 12px 20px;
  width: 280px;
`;

export default SignInput;
