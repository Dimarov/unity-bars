import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"

import four from "../../images/news/news4.jpg"


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
  padding: 4rem 0;
`

const StyledHeader = styled.div`
  width: 100%;
  height: 24rem;
  background-image: url(${four});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 8rem 1rem;
  filter: brightness(.4);
`


const StyledNews = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  transition: all .3s ease-in-out;
  cursor: pointer;
  padding: 4rem 2rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    min-height: 32rem;
  }
`

const StyledNewsTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem;
  color: #000;
  transition: all .3s ease-in-out;
`

const StyledNewsText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem;
  color: #1A1A1A;
  transition: all .3s ease-in-out;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {

  }
`

const StyledNewsDate = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem;
  transition: all .3s ease-in-out;
`

const News4 = (props) => (
  <StyledBackground>
    <StyledHeader>
    </StyledHeader>
    <Container>
      <StyledNews>
        <StyledNewsTitle>Відтепер, отримання пенсї стає ще зручнішим та безпечнішим, завдяки нашій Системі Обміну Данними з ПФУ 🎉</StyledNewsTitle>
        <StyledNewsText>
          Що це означає? <br />
          - Прискорення процесу обробки реєстрів та виплати пенсій отримувачам. <br />
          - Усунення ризиків, зв’язаних з ручною обробкою реєстрів на виплату. <br />
          - Зменшення вартості на логістику реєстрів. <br />
          - Оптимізація процесу отримання реєстрів пенсіонерів та передачі відповіді про стан зарахування коштів на поточні рахунки в онлайн режимі <br />
          <br />
          Як працює наша система? <br />
          1. За допомогою веб-сервісів Банк отримує від ПФУ реєстри пенсіонерів для нарахування пенсій по Банку.<br />
          2. Після проведення звірки реєстру на рівні ЦА, за допомогою веб сервісів здійснюється перевірка достатності коштів на відповідних рахунках РУ для оплати реєстру. <br />
          3. У разі достатності коштів, засобами ВПС здійснюється дебетове списання коштів з рахунків РУ, з послідуючим зарахуванням коштів на рахунки отримувачів.<br />
          4. За фактом зарахування пенсій Банк звітує перед ПФУ шляхом направлення Звіту про виконання консолідованого реєстру.v
          Дякуємо за довіру 🤝
        </StyledNewsText>
        <StyledNewsDate>16.03.2018</StyledNewsDate>
      </StyledNews>
    </Container>
  </StyledBackground>
)

export default News4
