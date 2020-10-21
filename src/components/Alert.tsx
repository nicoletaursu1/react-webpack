import React from "react";
import styled from "styled-components";

import colors from "../constants/colors";

interface AlertProps {
  msgType?: string;
  message?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  return <Message msgType={props.msgType}>{props.message}</Message>;
};

const Message = styled.p<AlertProps>`
  font: 15px sans-serif;
  font-weight: 500;
  align-self: flex-start;
  ${(props) =>
    props.msgType === "success"
      ? `
        color: ${colors.lightGreen};
   `
      : `
        color: rgb(230, 130, 80);
   `}
`;

export default Alert;
