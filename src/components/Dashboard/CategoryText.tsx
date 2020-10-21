import React from 'react';
import styled from 'styled-components';

interface CategoryTextProps {}

const CategoryText: React.FC<CategoryTextProps> = props => {
  return (
      <Text>{props.children}</Text>
  )
}

const Text = styled.p`
  color: white;
  opacity: 0.25;
  font: 12px sans-serif;
  font-weight: 600;
  text-transform: uppercase;
`

export default CategoryText;