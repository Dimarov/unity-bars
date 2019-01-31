import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import header from "../images/mockups/corplight-pixels.png"
import about from "../images/mockups/corplight-iphone-2.png"

import banking from "../images/icons/banking.png"
import functionality from "../images/icons/functionality.png"
import design from "../images/icons/design.png"

const StyledBackground = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: #FEFEFE;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
`

const StyledHeader = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 12rem;
`

const StyledTitle = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 8rem;
  font-weight: 600;
  color: #303030;
`

const StyledSpan = styled.span`
  color: #3EC4E1;
`

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 4rem 0;
  color: rgba(48,48,48,.8);
`

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;

  @media screen and (max-width: 60rem) {
    margin: .5rem 0;
    justify-content: space-evenly;
  }
`

const StyledButton = styled.button`
  outline: none;
  border: .125rem solid #303030;
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : "#303030"};
  padding: .8rem 3rem;
  margin-right: 1rem;
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${props => props.outline ? "#303030" : "#FEFEFE"};
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    background: ${props => props.outline ? "#303030" : "none"};
    color: ${props => props.outline ? "#FEFEFE" : "#303030"};
  }

  :active {
    transform: translateY(.0625rem);
  }

  @media screen and (max-width: 60rem) {
    padding: .3rem 1.25rem;
    margin: 0 .5rem;
    font-size: .65rem;
  }
`

const StyledHeaderImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 47rem;
`

const StyledAboutContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledImageContainer = styled.div`
  width: 20rem;
  height: 40rem;
`

const StyledAboutImage = styled.img`
  width: 20rem;
`

const StyledInfoContainer = styled.div`
  width: 36rem;
  padding: 0 0 0 2rem;
  box-sizing: border-box;
  height: 40rem;
`

const StyledInfoTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  padding: 1rem 2rem;
  background: #3EC4E1;
  width: 100%;
`

const StyledInfoElementContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const StyledInfoElement = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-content: center;
`
const StyledInfoElementIcon = styled.div`
  flex: 0 0 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInfoElementIconImage = styled.img`

`

const StyledInfoElementDescription = styled.div`
  height: auto;
  margin-left: 1rem;
`

const StyledInfoElementDescriptionTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #29333E;
  margin: .5rem 0;
`

const StyledInfoElementDescriptionText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  color: rgba(41,51,62,.8);
`
const StyledFunctionalityTitle = styled.h3`

`

const Corplight = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>CorpLight <StyledSpan>Ощадбанк</StyledSpan></StyledTitle>
        <StyledSubtitle>Інтернет банкінг для МСБ та приватних клієнтів</StyledSubtitle>
        <StyledButtonContainer>
          <StyledButton>App Store</StyledButton>
          <StyledButton>Google Play</StyledButton>
          <StyledButton outline >Web Demo</StyledButton>
        </StyledButtonContainer>
        <StyledHeaderImage src={header} alt="header-mockup" />
      </Container>
    </StyledHeader>
    <Container>
      <StyledAboutContainer>
        <StyledImageContainer>
          <StyledAboutImage src={about} alt="about-mockup" />
        </StyledImageContainer>
        <StyledInfoContainer>
          <StyledInfoTitle>Можливості CorpLight</StyledInfoTitle>
          <StyledInfoElementContainer>
            <StyledInfoElement>
              <StyledInfoElementIcon>
                <StyledInfoElementIconImage src={banking} alt="banking-icon" />
              </StyledInfoElementIcon>
              <StyledInfoElementDescription>
                <StyledInfoElementDescriptionTitle>Онлайн банкінг</StyledInfoElementDescriptionTitle>
                <StyledInfoElementDescriptionText>Доступ до банківських продуктів та послуг будь-де та будь-коли.</StyledInfoElementDescriptionText>
              </StyledInfoElementDescription>
            </StyledInfoElement>
            <StyledInfoElement>
              <StyledInfoElementIcon>
                <StyledInfoElementIconImage src={functionality} alt="functionality-icon" />
              </StyledInfoElementIcon>
              <StyledInfoElementDescription>
                <StyledInfoElementDescriptionTitle>Функціональність</StyledInfoElementDescriptionTitle>
                <StyledInfoElementDescriptionText>Функціональність, що відповідає сучасним вимогам клієнтів.</StyledInfoElementDescriptionText>
              </StyledInfoElementDescription>
            </StyledInfoElement>
            <StyledInfoElement>
              <StyledInfoElementIcon>
                <StyledInfoElementIconImage src={design} alt="design-icon" />
              </StyledInfoElementIcon>
              <StyledInfoElementDescription>
                <StyledInfoElementDescriptionTitle>Дизайн</StyledInfoElementDescriptionTitle>
                <StyledInfoElementDescriptionText>Дизайн системи побудований на базі інтуїтивних вподобань користувача. Згідно стандартів Material design Android та IOS Human Interface Guidelines.</StyledInfoElementDescriptionText>
              </StyledInfoElementDescription>
            </StyledInfoElement>
          </StyledInfoElementContainer>
        </StyledInfoContainer>
      </StyledAboutContainer>
    </Container>
  </StyledBackground>
)

export default Corplight
