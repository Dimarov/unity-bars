import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { CSSTransitionGroup } from 'react-transition-group'

import logo from "../images/unitybarsheaderlogo.svg"

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(26,26,26,.75);
  z-index: 9000;
  height: ${props => props.isOpened ? '4rem' : 'auto'};
  overflow: ${props => props.isOpened ? 'hidden' : 'visible'};
  padding: .5rem 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
    height: 4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
  }
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: myriad-pro, sans-serif;
  padding: .5rem 0;
  height: auto;
  flex-direction: column;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
    height: 100%;
    flex-direction: row;
  }
`;

const Logo = styled.img`
  margin: 0;
`;

const Burger = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    display: none;
  }
`

const BurgerPart = styled.div`
  height: .125rem;
  border-radius: .125rem;
  margin: .25rem 0;
  width: 100%;
  background: #fff;
`

const MobileLinkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: myriad-pro, sans-serif;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: auto;
  }
`;

const LinkContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: myriad-pro, sans-serif;
  flex-direction: column;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: all .3s ease-out;
  margin: .5rem 0;

  :focus,
  :hover {
    color: #a1a1a1;
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 0;
  }
`;

const LanguageList = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  justify-content: center;

  @media screen and (max-width: 60rem) {
    width: 100%;
    display: flex;
    margin: 1rem 0;
    justify-content: center;
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 8.25rem;
    margin: 0;
    justify-content: flex-start;
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
      <CSSTransitionGroup
        transitionName="nav"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <HeaderBlock isOpened={this.state.isOpened} key={this.state.isOpened ? 'open' : 'closed'}>
          <Container>
            <Navigation>
              <MobileLinkContainer>
                <Link to="/">
                  <Logo src={logo} alt="small-logo"/>
                </Link>
                <Burger onClick={this.handleClick}>
                  <BurgerPart />
                  <BurgerPart />
                </Burger>
              </MobileLinkContainer>
              <LinkContainer>
                <NavLink to="/">
                  Головна
                </NavLink>
                <NavLink to="/company">
                  Компанія
                </NavLink>
                <NavLink to="/products">
                  Продукти
                </NavLink>
                <NavLink to="/projects">
                  Проекти
                </NavLink>
                <NavLink to="/news">
                  Новини
                </NavLink>
                <NavLink to="/vacancies">
                  Вакансії
                </NavLink>
                <NavLink to="/contacts">
                  Контакти
                </NavLink>
              </LinkContainer>
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
        </HeaderBlock>
      </CSSTransitionGroup>
    );
  }
}

export default Header
