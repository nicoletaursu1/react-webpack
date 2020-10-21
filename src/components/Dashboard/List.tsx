import React from 'react';
import styled from 'styled-components';

interface ListProps {}

const List: React.FC<ListProps> = props => {
  return (
      <UL>{props.children}</UL>
  )
}

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
`

export default List;