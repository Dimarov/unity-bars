import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import bg from '../images/products.jpg'
import dwhMac from '../images/dwh_mac.png'
import dwhLogoSVG from '../images/dwh_logo.png'
import macCanDataware from '../images/dwh_mac_can.png'

const StyledBackground = styled.div`
  width: 100%;
  height: auto;
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
  padding: 8rem 1rem;
`

const StyledTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: #fff;
  
  
`

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
  
  
`

const StyledParagraphText = styled.div`
  font-family: myriad-pro, sans-serif;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  
  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
  }
`

const StyledTitleBlackColor = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  // font-weight: 400;
  line-height: 2.5rem;
  color: #000;
  margin: 4rem 0 3rem 0;
  
  @media screen and (max-width: 60rem) {
   margin: 0.5rem;
  }
`

const StyledThereIsWillBeImage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  text-align: center;
  background-color: red;
  height: 32rem;
  // font-weight: 400;
  color: #000;
  margin: 4rem 0 3rem 0;
`

const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`

const StyledHeaderTitle = styled.div`
font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: white;
  line-height: 30px;
`

const DwhMac = styled.img`
  margin-top: 2.5rem;
  height: 16rem;
  width: auto;
  text-align: center;
  
  @media (min-width: 40rem) {
    
  }

  @media (min-width: 80rem) {
    margin-top: 3rem;
    height: 30rem;
    text-align: center;
  }
`

const DwhLogo = styled.img`
  margin-top: 1rem;
  height: 13rem;
  width: auto;
  text-align: center;
  
  @media (min-width: 40rem) {
    
  }

  @media (min-width: 80rem) {
    margin-top: 3rem;
    height: 30rem;
    text-align: center;
  }
`

const DwhMacCan = styled.img`
margin-top: 3.2rem;
  height: 16rem;
  width: auto;
  text-align: center;
  
  @media (min-width: 40rem) {
    
  }

  @media (min-width: 80rem) {
    margin-top: 3rem;
    height: 30rem;
    text-align: center;
  }
`


const DatawarehousePage = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Datawarehouse</StyledTitle>
        <StyledSubtitle>Завантажити презентацію</StyledSubtitle>
        <StyledHeaderTitle>Система класу банківського DWH на платформі і модулях IBM</StyledHeaderTitle>
      </Container>
    </StyledHeader>

    <Container>
      <DwhMac src={dwhMac} alt='dwhMacMockup'/>
      <StyledParagraphText>
        DWH система являє собою спеціально організовану базу даних, для якої забезпечується збір інформації, її
        зберігання і швидкий доступ до предметно-орієнтованим даними за допомогою широкого спектра BI інструментів.
      </StyledParagraphText>
      <br/>
      <StyledParagraphText>
        При приміщенні даних у сховище так само відбувається їх трансформація, агрегація і усунення протиріч, що
        дозволяє використовувати DWH різним користувачам в якості єдиного джерела достовірної інформації.
      </StyledParagraphText>

      <StyledTitleBlackColor>КОМПОНЕНТИ</StyledTitleBlackColor>

      <StyledParagraphText>&#8226;  Джерела даних (файли, СУБД, веб-сервіси)</StyledParagraphText>
      <StyledParagraphText>&#8226;  Завантаження, Трансформація (Oracle Data Integrator або Bars
        ETL)</StyledParagraphText>
      <StyledParagraphText>&#8226;  Сховище даних (Oracle RDBMS EE)</StyledParagraphText>
      <StyledParagraphText>&#8226;  Схема даних (BarsDWH)</StyledParagraphText>
      <StyledParagraphText>&#8226;  Аналіз даних (Oracle BIEE або BarsDWH)</StyledParagraphText>
      <StyledParagraphText>&#8226;  Координатор процесу (BarsDWH)</StyledParagraphText>
      <DwhLogo src={dwhLogoSVG} alt='logo'/>
      <StyledParagraphText>
        Система «Сховище даних» призначена для консолідації облікових даних, що містяться в територіальних базах даних в
        централізованого сховища інформації для подальшого формування консолідованої звітності та надання даних для
        сторонніх систем через відповідні сервіси
      </StyledParagraphText>
      <br/>
      <StyledParagraphText>&#8226;  Інтеграція з АБС в онлайн режимі</StyledParagraphText>
      <StyledParagraphText>&#8226;  Багатовекторність — централізація звітної інформації по всім розпорядникам
        України</StyledParagraphText>
      <StyledParagraphText>&#8226;  Налаштування лімітів по рахунках, по користувачах, шаблони
        лімітів</StyledParagraphText>
      <StyledParagraphText>&#8226;  Гнучка настройка звітів в різних форматах</StyledParagraphText>

      <StyledParagraphText>&#8226;  Сучасний інтерфейс і перевірена надійність</StyledParagraphText>
      <DwhMacCan src={macCanDataware} alt='datawareMacMockup'/>

      <StyledTitleBlackColor>МОЖЛИВОСТІ СИСТЕМИ</StyledTitleBlackColor>

      <StyledParagraphText>&#8226;  Формування звітності</StyledParagraphText>
      <StyledParagraphText>&#8226;  Доступ до інформації 24/7</StyledParagraphText>
      <StyledParagraphText>&#8226;  Автоматична вивантаження даних</StyledParagraphText>
      <StyledParagraphText>&#8226;  Завантаження в DWH</StyledParagraphText>
      <StyledParagraphText>&#8226;  Завантаження в DM</StyledParagraphText>
      <StyledParagraphText>&#8226;  Відображення стану завантаження</StyledParagraphText>
      <StyledTestMargin/>
    </Container>
  </StyledBackground>
)

export default DatawarehousePage
