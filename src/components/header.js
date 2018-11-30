import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import logo from "../images/unitybarsheaderlogo.svg"

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  background: rgba(0,0,0,.75);
  z-index: 9000;
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

const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: myriad-pro, sans-serif;
`;

const StyledLogo = styled.img`
  margin: 0;
`;

const StyledLinkContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: myriad-pro, sans-serif;

  @media screen and (max-width: 60rem) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: all .3s ease-out;

  :focus,
  :hover {
    color: #a1a1a1;
  }
`;

const LanguageList = styled.div`
  flex: 0 0 8.25rem;
`;

const LanguageButton = styled.button`
  height: 1.75rem;
  width: 1.75rem;
  padding: 0;
  margin: 0 .5rem;
  background: ${props => props.selected ? "#FFF" : "none"};
  color: ${props => props.selected ? "#1A1A1A" : "#FFF"};
  border: 2px solid #fff;
  border-radius: .5rem;
  font-size: .625rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    border: 2px solid #a1a1a1;
    background: ${props => props.selected ? "#a1a1a1" : "none"};
    color: ${props => props.selected ? "#1A1A1A" : "#a1a1a1"};
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Navigation>
        <StyledLink to="/">
          <StyledLogo src={logo} />
        </StyledLink>
        <StyledLinkContainer>
          <StyledLink to="/">
            Головна
          </StyledLink>
          <StyledLink to="/company">
            Компанія
          </StyledLink>
          <StyledLink to="/products">
            Продукти
          </StyledLink>
          <StyledLink to="/projects">
            Проекти
          </StyledLink>
          <StyledLink to="/news">
            Новини
          </StyledLink>
          <StyledLink to="/vacancies">
            Вакансії
          </StyledLink>
          <StyledLink to="/contacts">
            Контакти
          </StyledLink>
        </StyledLinkContainer>
        <LanguageList>
          <LanguageButton selected>UK</LanguageButton>
          <LanguageButton>RU</LanguageButton>
          <LanguageButton>EN</LanguageButton>
        </LanguageList>
      </Navigation>
    </Container>
  </StyledHeader>
)

export default Header
