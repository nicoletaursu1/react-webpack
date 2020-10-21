import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import sizes from "../constants/screenSizes";
import actions from '../store/actions';

interface HamburgerProps {

}

const Hamburger: React.FC<HamburgerProps> = (props) => {
  const dispatch = useDispatch();
  
  return (
    <HamburgerIcon
    className="fa fa-bars" 
    aria-hidden="true" 
    onClick={()=>{
      dispatch(actions.toggleSidebar())
    }}>
    </HamburgerIcon>
  )
}

const HamburgerIcon = styled.i`
  transform: scale(2);
  color: #777;

  &:hover {
    color: #666;
    cursor: pointer;
  }

  @media (min-width: ${sizes.landscape}) {
    transform: scale(1.5);
  }
`

export default Hamburger;