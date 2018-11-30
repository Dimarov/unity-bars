import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import unitybarslogobackground from '../images/unitybarslogobackground.png'
import ub from '../images/ub-background.jpg'

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${ub});
  background-size: cover;
  box-shadow: inset 0rem -10rem 10rem rgba(0,0,0,0.8);
  filter: grayscale(.9);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 60rem) {
    padding: 0 1rem;
  }
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
  width: 32rem;

  @media screen and (max-width: 60rem) {
    width: 16rem;
  }
`;

const StyledButton = styled.button`
  outline: none;
  border: .125rem solid #FFF;
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : "#FFF"};
  padding: .5rem 3rem;
  margin: 1rem;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.outline ? "#FFF" : "#000"};
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    background: ${props => props.outline ? "#FFF" : "none"};
    color: ${props => props.outline ? "#000" : "#FFF"};
  }

  :active {
    transform: translateY(.0625rem);
  }

  @media screen and (max-width: 60rem) {
    padding: .4rem 2rem;
  }
`;

const Background = () => (
  <StyledBackground>
    <Container>
      <StyledContent className="content">
        <BackgroundImage src={unitybarslogobackground} />
        <div>
          <StyledButton>Про Нас</StyledButton>
          <StyledButton outline>Продукти</StyledButton>
        </div>
      </StyledContent>
    </Container>
  </StyledBackground>
)

export default Background
