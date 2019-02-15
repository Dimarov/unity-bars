import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'


import DownloadForm from './download-form'

import header from "../images/mockups/bone-iphones.png"
import about from "../images/mockups/corplight-iphone-2.png"
import security from "../images/mockups/corplight-iphone-3.png"

import banking from "../images/icons/banking.svg"
import functionality from "../images/icons/functionality.svg"
import design from "../images/icons/design.svg"

import boneImage from "../images/mockups/bone-macbook.png"
import corpImage from "../images/mockups/corplight-iphone.png"
import forwardImage from "../images/mockups/forward-samsung.png"

const Background = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: #000;
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
  color: #fff;

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
  color: #fff;
  opacity: .8;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
    margin: 4rem 0;
    width: 32rem;
    line-height: 3rem;
  }
`

const ButtonContainer = styled.div`
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

const Button = styled.a`
  text-align: center;
  text-decoration: none;
  outline: none;
  border: .125rem solid #fff;
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : "#fff"};
  padding: .3rem 1.25rem;
  margin: 0 .25rem;
  font-size: .75rem;
  font-family: myriad-pro, sans-serif;
  font-weight: 400;
  color: ${props => props.outline ? "#fff" : "#000"};
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    background: ${props => props.outline ? "#fff" : "none"};
    color: ${props => props.outline ? "#000" : "#fff"};
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
  width: 49rem;
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
    width: 100%;
    height: 40rem;
  }
`

const AboutImage = styled.img`
  height: 20rem;
  width: auto;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 36rem;
    height: auto;
  }
`

const InfoContainer = styled.div`
  width: 100%;
  padding: 0rem;
  box-sizing: border-box;
  height: 40rem;
  margin: 4rem 0;

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
  color: #000;
  padding: 1rem 2rem;
  background: #fff;
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
  color: #fff;
  opacity: .8;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const FunctionalityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const FunctionalityTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color: #fff;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
    margin: 2rem 0;
  }
`

const FunctionalityTitleSpan = styled.span`
  color: #3EC4E1;
`

const FunctionalitySubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem 0;
  color: #fff;
  opacity: .8;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const FunctionalityParagraph = styled.p `
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: .5rem 0;
  color: #fff;
  opacity: .6;
  padding-bottom: .5rem;
  border-bottom: .0625rem solid #fff;

  :last-of-type {
    border: none;
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 1rem 0;
    padding-bottom: 1rem;
  }
`

const SecurityContainer = styled.div`
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

const SecurityInfoContainer = styled.div`
  margin: 4rem 0;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  height: auto;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 36rem;
    height: 40rem;
    padding: 0;
  }
`

const SecurityInfoTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  padding: 1rem 2rem;
  background: #3EC4E1;
  width: 100%;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
  }
`

const SecurityInfoParagraph = styled.p `
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: .5rem 0;
  color: #303030;
  opacity: .8;
  padding-bottom: .5rem;
  border-bottom: .0625rem solid #303030;

  :last-of-type {
    border: none;
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 1rem 0;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

const SecurityImage = styled.img`
  height: 20rem;
  width: auto;
  position: absolute;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 40rem;
  }
`

const DownloadContainer = styled.div`
  width: 100%;
  padding: 0 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const DownloadTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
    margin: 1rem 0;
  }
`

const DownloadSubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: #fff;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`

const ContainerCase = styled.div`
  width: 100%;
  height: auto;
  padding: 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 4rem;
  }
`

const BackgroundCase = styled.div`
  width: 100%;
  height: 32rem;
  margin-bottom: 2rem;
  background: ${props => props.themeColor || "#000"};
  background-size: cover;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 40rem;
  }
`

const BackgroundCaseNew = styled.div`
  width: 100%;
  height: 32rem;
  margin-bottom: 2rem;
  background: ${props => props.themeColor || "#000"};
  background-size: cover;
  filter: brightness(.6);

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 40rem;
  }
`

const ContentCase = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0 10rem;
  }
`

const InfoCase = styled.div`
  flex: 0 0 100%;
  height: 50%;
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex: 1 1 50%;
    height: 100%;
    padding: 3rem 4rem;
    align-items: flex-start;
  }
`

const ImageContainerCase = styled.div`
  flex: 0 0 100%;
  height: 50%;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex: 1 1 50%;
    height: 100%;
    order: 0;
  }
`

const ImageBone = styled.img`
  height: 16rem;
  margin: 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 28rem;
  }
`

const ImageCorp = styled.img`
  height: 16rem;
  margin: 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
  }
`

const ImageForward = styled.img`
  height: 20rem;
  margin: 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
  }
`

const TitleCase = styled.h1`
  font-size: 2rem;
  margin: .25rem 0;
  font-weight: 600;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 4rem;
    margin: 1rem 0;
  }
`

const SpanCase = styled.span`
  color: ${props => props.color || props.themeColorSecondary};
`

const SubtitleCase = styled.h2`
  font-size: 1rem;
  margin: .5rem 0;
  text-align: center;
  font-weight: 400;
  opacity: .8;
  line-height: 3alt="bone"rem;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
    text-align: left;
    font-weight: 300;
    margin: 1rem 0;
  }
`

const ButtonContainerCase = styled.div`
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

const ButtonCase = styled.a`
  text-align: center;
  text-decoration: none;
  outline: none;
  border: .125rem solid ${props => props.themeColorSecondary};
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : props.themeColorSecondary};
  padding: .3rem 1.25rem;
  margin: 0 .5rem;
  font-size: .65rem;
  font-family: myriad-pro, sans-serif;
  font-weight: 600;
  color: ${props => props.outline ? props.themeColorSecondary : props.themeColor};
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    background: ${props => props.outline ? props.themeColorSecondary : "none"};
    color: ${props => props.outline ? props.themeColor : props.themeColorSecondary};
  }

  :active {
    transform: translateY(.0625rem);
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: .85rem;
    margin: 0 1rem 0 0;
    padding: .4rem 2rem;
  }
`

const MoreButtonCase = styled(Link)`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 300;
  text-decoration: none;
  color: ${props => props.themeColorSecondary};
  transition: all .3s ease-out;

  :focus,
  :hover {
    filter: contrast(50%);
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
    margin: 2rem 0;
  }
`

const InfoElementDownloadLink = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: .5rem 0;
  padding: 0;
  text-decoration: none;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const Bone = (props) => (
  <Background>
    <Header>
      <Container>
        <HeaderImage src={header} alt="header-mockup" />
        <Title>B.One</Title>
        <Subtitle>Інтернет банкінг для МСБ та фізичних осіб</Subtitle>
        <ButtonContainer>
          <Button href="https://itunes.apple.com/ru/app/corplight-osadbank/id1120169675?mt=8" >App Store</Button>
          <Button href="https://play.google.com/store/apps/details?id=com.unitybars.corplight.oschadbank" >Google Play</Button>
          <Button href="https://corplight.unity-bars.com:3443/auth/logon"  outline >Web Demo</Button>
        </ButtonContainer>
      </Container>
    </Header>
    <Container>
      <FunctionalityContainer>

        <FunctionalityTitle>З системою B.One Ви можете</FunctionalityTitle>
        <div>
          <FunctionalitySubtitle>Отримувати інформацію про цілодобову оплату та платежі</FunctionalitySubtitle>
          <FunctionalitySubtitle>Створювати платежі</FunctionalitySubtitle>
          <FunctionalitySubtitle>Створювати звіти</FunctionalitySubtitle>
          <FunctionalitySubtitle>Оплачувати кредити</FunctionalitySubtitle>
          <FunctionalitySubtitle>Контролювати депозити</FunctionalitySubtitle>
          <FunctionalitySubtitle>Подавати заявку на підключення депозитів банківських продуктів</FunctionalitySubtitle>
          <FunctionalitySubtitle>Керувати регулярними платежами</FunctionalitySubtitle>
          <FunctionalitySubtitle>Контролювати доступ для співробітників, підключених до системи</FunctionalitySubtitle>
          <DownloadForm />
        </div>
        <ImageContainer>
          <AboutImage src={boneImage} alt="bone-mockup" />
        </ImageContainer>
      </FunctionalityContainer>
      <FunctionalityContainer>

        <FunctionalityTitle>Функціональність B.One</FunctionalityTitle>
        <div>
          <FunctionalitySubtitle>Базова фунціональність</FunctionalitySubtitle>
          <FunctionalityParagraph>Заява оператора зіставлення облікового запису користувача (веб, мобільний), механізм останніх транзакцій на
          певному обліковому записі користувача, експорт / збереження витягів</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд депозитних продуктів з поповненням (веб, мобільний додаток)</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд кредитних продуктів з можливістю їх погашення</FunctionalityParagraph>
          <FunctionalityParagraph>Отримує і завантажує гілки і банкомати (вхідний xml-файл), визначає поточне місце розташування для отримання
            геолокаційної інформації про поточне місцезнаходження; Автоматичне завантаження інформації про поточні курси
            обміну з АБС, інформація про поточні курси в системі (Web) з переходом на окрему екранну форму для відображення
            історії зміни курсів валют; Реалізація інформації про поточну систему чіпів CorpLight полягає в тому, що користувач
          може додати авиторізований «співробітник» безпосередньо до мережі</FunctionalityParagraph>
          <FunctionalityParagraph>Авторизований користувач може додати «співробітника» безпосередньо до Інтернету</FunctionalityParagraph>
          <FunctionalityParagraph>Підключення клієнта до системи, можливість керування клієнтськими рахунками</FunctionalityParagraph>
          <FunctionalityParagraph>РЗміна пароля, відновлення пароля, блокування, робота з електронною аутентифікацією в роботі з клієнтом з
          аутентифікацією маркерів OTP з генерацією клієнта та надсиланням паролів через SMS</FunctionalityParagraph>
        </div>
      </FunctionalityContainer>
      <FunctionalityTitle>Продукти, побудовані на B.One</FunctionalityTitle>
    </Container>
    <ContainerCase>
      <BackgroundCase themeColor='#1A1A1A'>
        <ContentCase>
          <InfoCase>
            <TitleCase themeColorSecondary='#fff'>CorpLight <SpanCase color="#3EC4E1">Ощадбанк</SpanCase></TitleCase>
            <SubtitleCase themeColorSecondary='#fff'>Онлайн система управління банківськими рахунками та продуктами</SubtitleCase>
            <ButtonContainerCase>
              <ButtonCase href="https://itunes.apple.com/ru/app/corplight-osadbank/id1120169675?mt=8" themeColor='#1a1a1a' themeColorSecondary='#fff'>App Store</ButtonCase>
              <ButtonCase href="https://play.google.com/store/apps/details?id=com.unitybars.corplight.oschadbank" themeColor='#1a1a1a' themeColorSecondary='#fff'>Google Play</ButtonCase>
              <ButtonCase href="https://corplight.unity-bars.com:3443/auth/logon" outline themeColor='#1a1a1a' themeColorSecondary='#fff'>Web Demo</ButtonCase>
            </ButtonContainerCase>
            <MoreButtonCase to="/corplight" themeColorSecondary='#3EC4E1'>Більше</MoreButtonCase>
          </InfoCase>
          <ImageContainerCase>
            <ImageCorp src={corpImage} alt="corplight" />
          </ImageContainerCase>
        </ContentCase>
      </BackgroundCase>
      <BackgroundCase themeColor='#1A1A1A' >
        <ContentCase>
          <ImageContainerCase>
            <ImageForward src={forwardImage} alt="forward" />
          </ImageContainerCase>
          <InfoCase>
            <TitleCase themeColorSecondary='#fff'><SpanCase color="#991F3A">Forward</SpanCase> Online</TitleCase>
            <SubtitleCase themeColorSecondary='#fff'>24/7 доступ до Ваших банківських сервісів</SubtitleCase>
            <ButtonContainerCase>
              <ButtonCase href="https://itunes.apple.com/us/app/forward-online/id1445428569" themeColor='#1a1a1a' themeColorSecondary='#fff'>App Store</ButtonCase>
              <ButtonCase href="https://play.google.com/store/apps/details?id=com.unitybars.bone.personal.forward" themeColor='#1a1a1a' themeColorSecondary='#fff'>Google Play</ButtonCase>
              <ButtonCase href="https://online.forward-bank.com/dashboard" outline themeColor='#1a1a1a' themeColorSecondary='#fff'>Web Demo</ButtonCase>
            </ButtonContainerCase>
            <MoreButtonCase to="/forward" themeColorSecondary='#3EC4E1'>Більше</MoreButtonCase>
          </InfoCase>
        </ContentCase>
      </BackgroundCase>
      <BackgroundCaseNew themeColor='#1A1A1A'>
        <ContentCase>

          <InfoCase>
            <TitleCase themeColorSecondary='#fff'>Система B.One для <SpanCase color="#F90400">УБРР</SpanCase></TitleCase>
            <SubtitleCase themeColorSecondary='#fff'>Очікуйте новітню розробку в квітні 2019</SubtitleCase>

          </InfoCase>
        </ContentCase>
      </BackgroundCaseNew>

    </ContainerCase>
    <Container>
      <DownloadContainer>
        <DownloadTitle>Завантажуйте B.One</DownloadTitle>
        <DownloadSubtitle>Або спробуйте веб-версію</DownloadSubtitle>

        <ButtonContainer>
          <Button href="https://itunes.apple.com/ru/app/corplight-osadbank/id1120169675?mt=8" >App Store</Button>
          <Button href="https://play.google.com/store/apps/details?id=com.unitybars.corplight.oschadbank" >Google Play</Button>
          <Button href="https://corplight.unity-bars.com:3443/auth/logon"  outline >Web Demo</Button>
        </ButtonContainer>
      </DownloadContainer>
    </Container>
  </Background>
)

export default Bone
