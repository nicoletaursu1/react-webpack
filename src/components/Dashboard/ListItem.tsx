import React from "react";
import styled from "styled-components";

import colors from "../../constants/colors";

interface ListItemProps {
  icon?: string,
  selected?: boolean,
  onClick?: () => void
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <Item selected={props.selected} onClick={props.onClick}>
      <Wrapper>
        <Icon selected={props.selected} className={props.icon} aria-hidden="true"></Icon>
        <Text selected={props.selected}>{props.children}</Text>
      </Wrapper>
    </Item>
  );
};

const Item = styled.li<ListItemProps>`
  width: 100%;
  &:hover{
    background-color: ${colors.fadedBlue};
    transition: 0.5s;
    cursor: pointer;
  }
  ${props => props.selected && `background-color: ${colors.fadedBlue}`}
`;

const Wrapper = styled.div` 
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Icon = styled.i<ListItemProps>`
  color: ${props => props.selected ? `${colors.lightGreen}` :  `${colors.lightBlue}` };
  padding-right: 10px;
`;

const Text = styled.p<ListItemProps>`
  color: ${props => props.selected ? `${colors.lightGreen}` :  `${colors.lightBlue}` };
  font: 13px sans-serif;
`;

export default ListItem;
