import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../constants/colors';

interface TextProps {}

const OptionText: React.FC<TextProps> = props => {
  return (
    <Text>
      Already have an account?  <LoginLink to="/login">Log in</LoginLink>
    </Text>
  )
}

const Text = styled.p`
  color: #ccc;
  font: 14px sans-serif;
  align-self: flex-start;
`

const LoginLink = styled(Link)`
  color: #bbb;
  font: 14px sans-serif;
  &:hover {
    color: ${colors.green};
  }
`

export default OptionText;