import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import logo from "../images/unitybarsheaderlogo.svg"

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  background: rgba(0,0,0,.6);
  z-index: 9000;
  transition: all .3s ease-in-out;

  @media screen and (max-width: 60rem) {
    height: ${props => props.isOpened ? '4rem' : 'auto'};
    overflow: ${props => props.isOpened ? 'hidden' : 'visible'};
  }
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

  @media screen and (max-width: 60rem) {
    padding: .5rem 0;
    height: auto;
    flex-direction: column;
  }
`;

const StyledLogo = styled.img`
  margin: 0;
`;

const StyledBurger = styled.div`
  height: 2rem;
  width: 2rem;
  display: none;

  @media screen and (max-width: 60rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const StyledBurgerPart = styled.div`
  height: .125rem;
  border-radius: .125rem;
  margin: .25rem 0;
  width: 100%;
  background: #fff;
`

const StyledMobileLinkContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: myriad-pro, sans-serif;

  @media screen and (max-width: 60rem) {
    width: 100%;
  }
`;

const StyledLinkContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: myriad-pro, sans-serif;

  @media screen and (max-width: 60rem) {
    flex-direction: column;
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

  @media screen and (max-width: 60rem) {
    margin: .5rem 0;
  }
`;

const LanguageList = styled.div`
  width: 8.25rem;

  @media screen and (max-width: 60rem) {
    width: 100%;
    display: flex;
    margin: 1rem 0;
    justify-content: center;
  }
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  }

  render() {
    return (
      <StyledHeader isOpened={this.state.isOpened}>
        <Container>
          <Navigation>
            <StyledMobileLinkContainer>
              <StyledLink to="/">
                <StyledLogo src={logo} alt="small-logo"/>
              </StyledLink>
              <StyledBurger onClick={this.handleClick}>
                <StyledBurgerPart />
                <StyledBurgerPart />
              </StyledBurger>
            </StyledMobileLinkContainer>
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
              <Link to="/">
                <LanguageButton selected>UK</LanguageButton>
              </Link>
              <Link to="/index-ru">
                <LanguageButton>RU</LanguageButton>
              </Link>
              <Link to="/index-en">
                <LanguageButton>EN</LanguageButton>
              </Link>
            </LanguageList>
          </Navigation>
        </Container>
      </StyledHeader>
    );
  }
}

export default Header
