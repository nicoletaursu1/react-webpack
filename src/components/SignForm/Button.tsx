import React from "react";
import styled from "styled-components";

import colors from '../../constants/colors';

interface ButtonProps {
  title: string,
  disabled?: boolean,
  onClick?: () => void
};

const SignButton: React.FC<ButtonProps> = (props) => {
  return <Button type="submit" disabled={props.disabled} onClick={props.onClick}>{props.title}</Button>;
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
  ${props => props.disabled && `background-color: gray;`}
`;


export default SignButton;