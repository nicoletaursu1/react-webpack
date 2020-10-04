import React from 'react';
import styled from 'styled-components';

interface LogoProps {}

const Logo: React.FC<LogoProps> = (props) => {
    return (
        <Wrapper>
            <TextBox>C</TextBox>
            <Secondary>Pay</Secondary>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
`
const TextBox = styled.p`
    background-color: rgb(212, 169, 13);
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    padding: 0px 3px 0px 3px;
    transform: skewX(-10deg);
`
const Secondary = styled.i`
    color: white;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    margin-left: 3px;
`

export default Logo