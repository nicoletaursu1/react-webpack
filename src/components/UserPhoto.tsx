import React from 'react';
import styled from 'styled-components';

interface UserProps {

}

const UserPhoto: React.FC<UserProps> = props => {
  return (
    <PhotoContainer src="https://t0.rbxcdn.com/fb665700d9b8d76d3fd6b08d91b77455" alt="User photo" />
  );
}

const PhotoContainer = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid gray;
  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`

export default UserPhoto;