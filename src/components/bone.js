import React from 'react'
import styled from "styled-components"

import header from "../images/mockups/bone-iphones.png"
import about from "../images/mockups/corplight-iphone-2.png"
import security from "../images/mockups/corplight-iphone-3.png"

import banking from "../images/icons/banking.svg"
import functionality from "../images/icons/functionality.svg"
import design from "../images/icons/design.svg"

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
    width: 30rem;
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

const InfoElementDownloadLink = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: .5rem 0;
  padding: 0 0 0 7rem;
  text-decoration: none;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
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
  font-weight: 500;
  margin: 1rem 0;
  color: #fff;
  opacity: .8;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
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

const Bone = (props) => (
  <Background>
    <Header>
      <Container>
        <HeaderImage src={header} alt="header-mockup" />
        <Title>B.one</Title>
        <Subtitle>Інтернет банкінг для МСБ та приватних клієнтів</Subtitle>
        <ButtonContainer>
          <Button href="https://itunes.apple.com/ru/app/corplight-osadbank/id1120169675?mt=8" >App Store</Button>
          <Button href="https://play.google.com/store/apps/details?id=com.unitybars.corplight.oschadbank" >Google Play</Button>
          <Button href="https://corplight.unity-bars.com:3443/auth/logon"  outline >Web Demo</Button>
        </ButtonContainer>
      </Container>
    </Header>
    <Container>

      <FunctionalityContainer>

        <FunctionalityTitle>Функціональність <FunctionalityTitleSpan>CorpLight</FunctionalityTitleSpan></FunctionalityTitle>
        <div>
          <FunctionalitySubtitle>Базова фунціональність</FunctionalitySubtitle>
          <FunctionalityParagraph>Підключення клієнта до системи, можливість керування обліковими записами клієнта.</FunctionalityParagraph>
          <FunctionalityParagraph>Формування виписки по рахункам користувача, відображення виписки (веб, мобільний), механізм отримання останніх операцій
          користувача по конкретному рахунку, експорт/збереження виписки.</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд депозитних продуктів з можливістю поповнення(веб, мобільний додаток).</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд кредитних продуктів з можливістю погашення.</FunctionalityParagraph>
          <FunctionalityParagraph>Механізм отримання та завантаження даних відділень та банкоматів (вхідний xml-файл), визначення поточного місцезнаходження
          отримання геолокаційних даних про поточне розташування.</FunctionalityParagraph>
          <FunctionalityParagraph>Автоматичне завантаження інформації щодо поточних курсів обміну валют з АБС, інформування про поточні курси в Системі (веб) з
          можливістю переходу в окрему екранну форму для відображення історії змін курсу.</FunctionalityParagraph>
          <FunctionalityParagraph>Реалізація інформування про поточні курси в Системі (веб).</FunctionalityParagraph>
          <FunctionalityParagraph>Можливість створення та редагування платіжних документів, в залежності від кореспондента, збереження шаблонів платіжних
          документів.</FunctionalityParagraph>
          <FunctionalityParagraph>Візування та відправка документів в Банк, накладання електронного цифрового підпису, перевірка на коректність відповідно до вимог
          Інструкції про безготівкові розрахунки в Україні в національній валюті Національного банку України.</FunctionalityParagraph>
          <FunctionalityParagraph>Механізм збереження даних платіжних документів для формування довідника кореспондентів, здійснення запиту та формування звіту
          відповідно до конкретного Кореспондента.</FunctionalityParagraph>
          <FunctionalityParagraph>Створення заявки на продукт, налаштування списку продуктів та їх параметрів, механізм пропонування нових продуктів через тематичні
          розділи системи.</FunctionalityParagraph>
          <FunctionalityParagraph>Функціональність поповнення/зняття депозиту.</FunctionalityParagraph>
          <FunctionalityParagraph>Функціональність формування платіжних документів на погашення кредиту.</FunctionalityParagraph>
          <FunctionalityParagraph>Створення та збереження регулярного та автоматичного (регулярного) платежу, створення, редагування, призупинення та видалення
          автоматичних платежів з групуванням згідно календарних днів, інформування користувачів.</FunctionalityParagraph>
        </div>
        <div>
          <FunctionalitySubtitle>Платежі в інозменій валюті</FunctionalitySubtitle>
          <FunctionalityParagraph>Створення платіжних доручень в іноземній валюті.</FunctionalityParagraph>
          <FunctionalityParagraph>Створення внутрішніх переказів (в межах одного МФО) в іноземній валюті.</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд депозитних продуктів з можливістю поповнення (веб, мобільний додаток).</FunctionalityParagraph>
          <FunctionalityParagraph>Купівля/продаж/конвертація іноземної валюти.</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд інформації по рахункам (валюта) в іноземній валюті.</FunctionalityParagraph>
          <FunctionalityParagraph>Формування зовнішніх переказів в іноземній валюті.</FunctionalityParagraph>
          <FunctionalityParagraph>Відправка в Банк підтверджуючих документів при формуванні платежів в іноземній валюті, заявок на купівлю іноземної валюти.</FunctionalityParagraph>
          <FunctionalityParagraph>Імпорт документів.</FunctionalityParagraph>
        </div>
        <div>
          <FunctionalitySubtitle>Зарплатний проект</FunctionalitySubtitle>
          <FunctionalityParagraph>Формування зарплатних відомостей.</FunctionalityParagraph>
          <FunctionalityParagraph>Імпорт відомостей із бухгалтерських програм.</FunctionalityParagraph>
          <FunctionalityParagraph>Формування обов’язкових(податкових) платежів до зарплатних відомостей.</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд історії зарплатних відомостей.</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд реєстрів працівників.</FunctionalityParagraph>
          <FunctionalityParagraph>Робота із ЗКП договорами.</FunctionalityParagraph>
          <FunctionalityParagraph>Друк реєстрів працівників та відомостей.</FunctionalityParagraph>
        </div>
        <div>
          <FunctionalitySubtitle>Функціональність по роботі з корпоративними картками</FunctionalitySubtitle>
          <FunctionalityParagraph>Функціональність по роботі з картковими рахунками.</FunctionalityParagraph>
          <FunctionalityParagraph>Функціональність по роботі з корпоративними картками.</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд строку дії, залишку коштів по корпоративній картці.</FunctionalityParagraph>
          <FunctionalityParagraph>Формування заявки на випуск корпоративної картки, обробка заявки.</FunctionalityParagraph>
          <FunctionalityParagraph>Формування заявки на перевипуск корпоративної картки.</FunctionalityParagraph>
          <FunctionalityParagraph>Блокування корпоративної картки.</FunctionalityParagraph>
          <FunctionalityParagraph>Перегляд встановлених лімітів по корпоративним карткам.</FunctionalityParagraph>
          <FunctionalityParagraph>Управління лімітами по корпоративній картці.</FunctionalityParagraph>
          <FunctionalityParagraph>Формування історії операцій по корпоративній картці.</FunctionalityParagraph>
        </div>
      </FunctionalityContainer>
      <DownloadContainer>
        <DownloadTitle>Завантажуйте B.one</DownloadTitle>
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
