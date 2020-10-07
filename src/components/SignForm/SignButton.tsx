import React from "react";
import styled from "styled-components";

import colors from '../../constants/colors';

interface ButtonProps {
  title: string;
}

const SignButton: React.FC<ButtonProps> = (props) => {
  return <Button type="submit">{props.title}</Button>;
};

const Button = styled.button`
  align-self: flex-start;
  border: none;
  background-color: ${colors.green};
  color: white;
  font: 14px "Open-sans", sans-serif;
  padding: 10px 25px;
  border-radius: 20px;
  margin: 15px 0;
`;

export default SignButton;