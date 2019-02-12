import React from 'react'
import styled from "styled-components"

import header from "../../images/mockups/corplight-pixels.png"
import about from "../../images/mockups/corplight-iphone-2.png"

import banking from "../../images/icons/banking.png"
import functionality from "../../images/icons/functionality.png"
import design from "../../images/icons/design.png"

const Background = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: #FEFEFE;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem;
  max-width: 960px;
  margin: 0 auto;
`

const Header = styled.div`
  width: 100%;
  height: 48rem;
  padding-top: 24rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 100vh;
    padding-top: 12rem;
  }
`

const Title = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  font-weight: 600;
  color: #303030;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 8rem;
  }
`

const Span = styled.span`
  color: #3EC4E1;
`

const Subtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 2rem 0;
  color: rgba(48,48,48,.8);

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
    margin: 4rem 0;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: .5rem 0;
  justify-content: space-evenly;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 1rem 0;
    justify-content: flex-start;
  }
`

const Button = styled.button`
  outline: none;
  border: .125rem solid #303030;
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : "#303030"};
  padding: .3rem 1.25rem;
  margin: 0 .25rem;
  font-size: .75rem;
  font-family: myriad-pro, sans-serif;
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

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: .8rem 3rem;
    margin: 0 1rem 0 0;
    font-size: 1.25rem;
  }
`

const HeaderImage = styled.img`
  position: absolute;
  top: 0rem;
  right: 0;
  width: 47rem;
`

const AboutContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  justify-content: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 20rem;
    height: 40rem;
  }
`

const AboutImage = styled.img`
  height: 20rem;
  width: auto;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 20rem;
    height: auto;
  }
`

const InfoContainer = styled.div`
  width: 100%;
  padding: 0rem;
  box-sizing: border-box;
  height: 40rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 36rem;
    height: 40rem;
    padding: 0 0 0 2rem;
  }
`

const InfoTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  padding: 1rem 2rem;
  background: #3EC4E1;
  width: 100%;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
  }
`

const InfoElementContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const InfoElement = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-content: center;
`
const InfoElementIcon = styled.div`
  flex: 0 0 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoElementIconImage = styled.img`

`

const InfoElementDescription = styled.div`
  height: auto;
  margin-left: 1rem;
`

const InfoElementDescriptionTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #29333E;
  margin: .5rem 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const InfoElementDescriptionText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  color: rgba(41,51,62,.8);

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`
const FunctionalityTitle = styled.h3`

`

const Corplight = (props) => (
  <Background>
    <Header>
      <Container>
        <HeaderImage src={header} alt="header-mockup" />
        <Title>CorpLight <Span>Ощадбанк</Span></Title>
        <Subtitle>Интернет банкинг для МСБ и частных клиентов</Subtitle>
        <ButtonContainer>
          <Button>App Store</Button>
          <Button>Google Play</Button>
          <Button outline >Web Demo</Button>
        </ButtonContainer>
      </Container>
    </Header>
    <Container>
      <AboutContainer>
        <ImageContainer>
          <AboutImage src={about} alt="about-mockup" />
        </ImageContainer>
        <InfoContainer>
          <InfoTitle>Возможности CorpLight</InfoTitle>
          <InfoElementContainer>
            <InfoElement>
              <InfoElementIcon>
                <InfoElementIconImage src={banking} alt="banking-icon" />
              </InfoElementIcon>
              <InfoElementDescription>
                <InfoElementDescriptionTitle>Онлайн банкинг</InfoElementDescriptionTitle>
                <InfoElementDescriptionText>Доступ к банковским продуктам и услугам в любом месте и в любое время.</InfoElementDescriptionText>
              </InfoElementDescription>
            </InfoElement>
            <InfoElement>
              <InfoElementIcon>
                <InfoElementIconImage src={functionality} alt="functionality-icon" />
              </InfoElementIcon>
              <InfoElementDescription>
                <InfoElementDescriptionTitle>Функциональность</InfoElementDescriptionTitle>
                <InfoElementDescriptionText>Функциональность, отвечающея современным требованиям клиентов.</InfoElementDescriptionText>
              </InfoElementDescription>
            </InfoElement>
            <InfoElement>
              <InfoElementIcon>
                <InfoElementIconImage src={design} alt="design-icon" />
              </InfoElementIcon>
              <InfoElementDescription>
                <InfoElementDescriptionTitle>Дизайн</InfoElementDescriptionTitle>
                <InfoElementDescriptionText>Дизайн системы построенной на базе интуитивных предпочтений пользователя. Согласно стандартамMaterial design Android и IOS Human Interface Guidelines.</InfoElementDescriptionText>
              </InfoElementDescription>
            </InfoElement>
          </InfoElementContainer>
        </InfoContainer>
      </AboutContainer>
    </Container>
  </Background>
)

export default Corplight
