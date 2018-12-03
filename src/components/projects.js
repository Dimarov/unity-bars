import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../images/products.jpg"

const StyledBackground = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
`

const StyledHeader = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  padding-top: 8rem;
`

const StyledTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
`

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
`

const StyledGrid = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (max-width: 60rem) {

  }
`

const StyledProject = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: .125rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 60rem) {
    height: 12rem;
  }
`

const StyledProjectPhoto = styled.div`
  height: 16rem;
  background: red;
  flex: 0 0 20%;
  margin: 1rem 0;
`

 const StyledProjectInfo = styled.div`
  flex: 0 0 80%;
  display: flex;
  flex-direction: column;
 `

const StyledProjectTitle = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: 1rem 2rem 0rem;
  cursor: pointer;
`

const StyledProjectSubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #1A1A1A;
  margin: .5rem 2rem 1rem;
`

const StyledProjectText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #1A1A1A;
  margin: .25rem 2rem;
`

const Projects = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Проекти</StyledTitle>
        <StyledSubtitle>Unity-Bars приймає участь у новітніх проектах України</StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledProject>
        <StyledProjectPhoto />
        <StyledProjectInfo>
          <StyledProjectTitle>BANKID</StyledProjectTitle>
          <StyledProjectSubtitle>
            Спосіб електронної ідентифікації громадян через українські банки для надання адміністративних послуг через Інтернет
          </StyledProjectSubtitle>
          <StyledProjectText>
            Надійна та зручна верифікація користувача через його власний інтернет-банкінг на порталах адміністративних послуг. Станом на сьогодні, на полігоні Ощадбанку, розгорнуто робочий екземпляр системи BankID з повним циклом проходження даних (враховуючи отримання даних по клієнту з банківської бази даних по номеру банківської картки ). Наразі очікується підключення системи до провайдера SMS розсилок (дотепер підключено у тестовому режимі), після чого полігон буде запущено у дослідну експлуатацію на порталі Львівської міської ради Особистий кабінет львів’янина. У інтерфейсі сайту буде доступна кнопка «BankID Ощадбанк», за допомогою якої користувачі матимуть змогу авторизуватися у системі та оформити довідку та звернення з доступного переліку інформації. Також у відкритий доступ на ресурсі GitHub, викладено актуальні схеми та документація по роботі системи BankID з можливістю коментування та редагування.
          </StyledProjectText>
        </StyledProjectInfo>
      </StyledProject>
      <hr />
      <StyledProject>
        <StyledProjectPhoto />
        <StyledProjectInfo>
          <StyledProjectTitle>BANKID</StyledProjectTitle>
          <StyledProjectSubtitle>
            Спосіб електронної ідентифікації громадян через українські банки для надання адміністративних послуг через Інтернет
          </StyledProjectSubtitle>
          <StyledProjectText>
            Надійна та зручна верифікація користувача через його власний інтернет-банкінг на порталах адміністративних послуг. Станом на сьогодні, на полігоні Ощадбанку, розгорнуто робочий екземпляр системи BankID з повним циклом проходження даних (враховуючи отримання даних по клієнту з банківської бази даних по номеру банківської картки ). Наразі очікується підключення системи до провайдера SMS розсилок (дотепер підключено у тестовому режимі), після чого полігон буде запущено у дослідну експлуатацію на порталі Львівської міської ради Особистий кабінет львів’янина. У інтерфейсі сайту буде доступна кнопка «BankID Ощадбанк», за допомогою якої користувачі матимуть змогу авторизуватися у системі та оформити довідку та звернення з доступного переліку інформації. Також у відкритий доступ на ресурсі GitHub, викладено актуальні схеми та документація по роботі системи BankID з можливістю коментування та редагування.
          </StyledProjectText>
        </StyledProjectInfo>
      </StyledProject>
      <hr />
      <StyledProject>
        <StyledProjectPhoto />
        <StyledProjectInfo>
          <StyledProjectTitle>BANKID</StyledProjectTitle>
          <StyledProjectSubtitle>
            Спосіб електронної ідентифікації громадян через українські банки для надання адміністративних послуг через Інтернет
          </StyledProjectSubtitle>
          <StyledProjectText>
            Надійна та зручна верифікація користувача через його власний інтернет-банкінг на порталах адміністративних послуг. Станом на сьогодні, на полігоні Ощадбанку, розгорнуто робочий екземпляр системи BankID з повним циклом проходження даних (враховуючи отримання даних по клієнту з банківської бази даних по номеру банківської картки ). Наразі очікується підключення системи до провайдера SMS розсилок (дотепер підключено у тестовому режимі), після чого полігон буде запущено у дослідну експлуатацію на порталі Львівської міської ради Особистий кабінет львів’янина. У інтерфейсі сайту буде доступна кнопка «BankID Ощадбанк», за допомогою якої користувачі матимуть змогу авторизуватися у системі та оформити довідку та звернення з доступного переліку інформації. Також у відкритий доступ на ресурсі GitHub, викладено актуальні схеми та документація по роботі системи BankID з можливістю коментування та редагування.
          </StyledProjectText>
        </StyledProjectInfo>
      </StyledProject>
      <hr />
      <StyledProject>
        <StyledProjectPhoto />
        <StyledProjectInfo>
          <StyledProjectTitle>BANKID</StyledProjectTitle>
          <StyledProjectSubtitle>
            Спосіб електронної ідентифікації громадян через українські банки для надання адміністративних послуг через Інтернет
          </StyledProjectSubtitle>
          <StyledProjectText>
            Надійна та зручна верифікація користувача через його власний інтернет-банкінг на порталах адміністративних послуг. Станом на сьогодні, на полігоні Ощадбанку, розгорнуто робочий екземпляр системи BankID з повним циклом проходження даних (враховуючи отримання даних по клієнту з банківської бази даних по номеру банківської картки ). Наразі очікується підключення системи до провайдера SMS розсилок (дотепер підключено у тестовому режимі), після чого полігон буде запущено у дослідну експлуатацію на порталі Львівської міської ради Особистий кабінет львів’янина. У інтерфейсі сайту буде доступна кнопка «BankID Ощадбанк», за допомогою якої користувачі матимуть змогу авторизуватися у системі та оформити довідку та звернення з доступного переліку інформації. Також у відкритий доступ на ресурсі GitHub, викладено актуальні схеми та документація по роботі системи BankID з можливістю коментування та редагування.
          </StyledProjectText>
        </StyledProjectInfo>
      </StyledProject>
    </StyledGrid>
  </StyledBackground>
)

export default Projects
