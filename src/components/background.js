import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import unitybarslogobackground from '../images/unitybarslogobackground.png'

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.color};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  width: 24rem;
`;

const StyledButton = styled.button`
  outline: none;
  border: .125rem solid #1A1A1A;
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : "#1A1A1A"};
  padding: .5rem 3rem;
  margin: 1rem;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.outline ? "#1A1A1A" : "#FFF"};
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    background: ${props => props.outline ? "#1A1A1A" : "none"};
    color: ${props => props.outline ? "#FFF" : "#1A1A1A"};
  }

  :active {
    transform: translateY(.0625rem);
  }
`;

function DateBackground(props) {
  const date = new Date();

  function setColor(i) {
    if (i > 10 && i < 20) {
      return "#c1c1c1";
    }
    else {
      return "#000";
    }
  }

  const color = setColor(date.getHours());
  console.log(date.getHours())
  console.log(color)
  return (
    <StyledBackground color={color} >
      <Container>
        <StyledContent>
          <BackgroundImage src={unitybarslogobackground} />
          <div>
            <StyledButton>Про Нас</StyledButton>
            <StyledButton outline>Новини</StyledButton>
          </div>
        </StyledContent>
      </Container>
    </StyledBackground>
  );
}

const Background = () => (
  <DateBackground />
)

export default Background
