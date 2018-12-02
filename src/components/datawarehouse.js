import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import bg from '../images/products.jpg'

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

const StyledParagraphText = styled.div`
  font-family: myriad-pro, sans-serif;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 200;
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
  margin-bottom: 6rem;
`


// const StyledGrid = styled.div`
//   height: auto;
//   margin: 0 auto;
//   max-width: 1440px;
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr;
//   padding: 1rem;
//
//   @media screen and (max-width: 60rem) {
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr 1fr;
//     grid-gap: 1rem;
//   }
// `
//
// const StyledContactTitle = styled.h2`
//   font-family: myriad-pro, sans-serif;
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: #1A1A1A;
//   margin: 1rem 2rem;
// `
//
// const StyledContactSubtitle = styled.h3`
//   font-family: myriad-pro, sans-serif;
//   font-size: 1rem;
//   font-weight: 600;
//   color: #1A1A1A;
//   margin: 1rem 2rem;
// `
//
// const StyledContactText = styled.p`
//   font-family: myriad-pro, sans-serif;
//   font-size: 1rem;
//   font-weight: 400;
//   color: #1A1A1A;
//   margin: .25rem 2rem;
// `
//
// const StyledContact = styled.div`
//   width: 100%;
//   height: 32rem;
//   border-radius: .125rem;
//   background: #fafafa;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//
//   @media screen and (max-width: 60rem) {
//     height: 32rem;
//   }
// `
//
// const StyledContactForm = styled.form`
//   width: 60%;
//   margin-left: 20%;
//   display: flex;
//   flex-direction: column;
//
//   @media screen and (max-width: 60rem) {
//     width: 90%;
//     margin-left: 5%;
//   }
// `
//
// const StyledContactFormTitle = styled.h3`
//   font-family: myriad-pro, sans-serif;
//   font-size: 1.5rem;
//   font-weight: 400;
//   color: #1A1A1A;
//   margin: 1rem;
// `
//
// const StyledContactInput = styled.input`
//   outline: none;
//   background: none;
//   font-family: myriad-pro, sans-serif;
//   font-size: 1rem;
//   font-weight: 400;
//   margin: .5rem 0;
//   color: #1A1A1A;
//   border: .125rem solid #DDD;
//   border-radius: .25rem;
//   padding: 1rem 1rem;
// `
//
// const StyledContactTextarea = styled.textarea`
//   outline: none;
//   background: none;
//   font-family: myriad-pro, sans-serif;
//   font-size: 1rem;
//   font-weight: 400;
//   margin: .5rem 0;
//   color: #1A1A1A;
//   border: .125rem solid #DDD;
//   border-radius: .25rem;
//   padding: 1rem 1rem;
//   resize: none;
// `
//
// const StyledContactSubmit = styled.input`
//   outline: none;
//   background: none;
//   font-family: myriad-pro, sans-serif;
//   font-size: 1rem;
//   font-weight: 600;
//   margin: .5rem 0;
//   color: #3EC4E1;
//   border: .125rem solid #3EC4E1;
//   border-radius: .25rem;
//   padding: .5rem 2rem;
//   cursor: pointer;
//   transition: all .1s ease-in;
//
//   :hover {
//     background: #3EC4E1;
//     color: #fff;
//   }
// `

const DatawarehousePage = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Datawarehouse</StyledTitle>
        <StyledSubtitle>Завантажити презентацію</StyledSubtitle>
        <StyledTitle>Система класу банківського DWH на платформі і модулях IBM</StyledTitle>
      </Container>
    </StyledHeader>

    <Container>
      <StyledThereIsWillBeImage>IMAGE SOON</StyledThereIsWillBeImage>
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
      <StyledThereIsWillBeImage>IMAGE SOON</StyledThereIsWillBeImage>
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
      <StyledThereIsWillBeImage>IMAGE SOON</StyledThereIsWillBeImage>

      <StyledTitleBlackColor>МОЖЛИВОСТІ СИСТЕМИ</StyledTitleBlackColor>

      <StyledParagraphText>&#8226;  Формування звітності</StyledParagraphText>
      <StyledParagraphText>&#8226;  Доступ до інформації 24/7</StyledParagraphText>
      <StyledParagraphText>&#8226;  Автоматична вивантаження даних</StyledParagraphText>
      <StyledParagraphText>&#8226;  Завантаження в DWH</StyledParagraphText>
      <StyledParagraphText>&#8226;  Завантаження в DM</StyledParagraphText>
      <StyledParagraphText>&#8226;  Відображення стану завантаження</StyledParagraphText>
      <StyledTestMargin />
    </Container>
  </StyledBackground>
)

export default DatawarehousePage
