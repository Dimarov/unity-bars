import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../images/products.jpg"

import one from "../images/news/news1.jpg"
import two from "../images/news/news2.jpg"
import three from "../images/news/news3.jpg"
import four from "../images/news/news4.jpg"
import five from "../images/news/news5.jpg"
import six from "../images/news/news6.jpg"


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

const StyledGrid = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`

const StyledNews = styled.div`
  width: 100%;
  height: 34rem;
  border-radius: .125rem;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .3s ease-in-out;
  cursor: pointer;

  :hover div {
    height: 20rem;
  }

  @media screen and (max-width: 60rem) {
    height: 36rem;
  }
`
const StyledNewsPhoto = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  filter: grayscale(100);
  border-radius: .125rem;
  width: 100%;
  height: 16rem;
  transition: all .3s ease-in-out;

  :hover {
    filter: grayscale(0);
  }
`

const StyledNewsTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: .5rem 0 1rem 2rem;
  color: #3EC4E1;
  transition: all .3s ease-in-out;
`

const StyledNewsText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: .5rem 2rem;
  color: #1A1A1A;
  transition: all .3s ease-in-out;
`

const StyledNewsDate = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  margin: 0 0 1rem 2rem;
  font-weight: 600;
  color: #1A1A1A;
  transition: all .3s ease-in-out;
`


const News = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Новини</StyledTitle>
        <StyledSubtitle>Останні новини в Unity-Bars</StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledNews>
        <StyledNewsPhoto image={one}></StyledNewsPhoto>
        <StyledNewsTitle>Зі святом Україно!</StyledNewsTitle>
        <StyledNewsText>
          Вітаємо всіх українців з національним святом!
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={two}></StyledNewsPhoto>
        <StyledNewsTitle>New Data Migration to BARS-MMFO database!</StyledNewsTitle>
        <StyledNewsText>
          After migrations of new regions VINNITSIA / ZHYTOMYR, our database is:
          46 071 894 — bank accounts (21 451 999 active)
          13 526 371 — bank clients (9 960 526 active)
          More then 8 500 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={three}></StyledNewsPhoto>
        <StyledNewsTitle>Система обміну даними з ПФУ для автоматичної обробки та зарахування пенсій в онлайн режимі</StyledNewsTitle>
        <StyledNewsText>
          Прискорення процесу обробки реєстрів та виплати пенсій отримувачам.
          Усунення ризиків, зв’язаних з ручною обробкою реєстрів на виплату.
          Зменшення вартості на логістику реєстрів.
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={four}></StyledNewsPhoto>
        <StyledNewsTitle>Well Done Data Migration BARS-MMFO</StyledNewsTitle>
        <StyledNewsText>
          After migrations of new regions, we have:
          39 440 338 — bank accounts (18 959 127 active)
          11 420 634 — bank clients (8 853 913 active)
          More then 7 700 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={five}></StyledNewsPhoto>
        <StyledNewsTitle>Well Done Data Migration</StyledNewsTitle>
        <StyledNewsText>
          05/17 Donetsk
          9 423 729 accounts
          2 864 882 bank clients
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={six}></StyledNewsPhoto>
        <StyledNewsTitle>Новини з НБУ</StyledNewsTitle>
        <StyledNewsText>
          В жовтні 2017 року НБУ спільно з UNITY-BARS успішно виконали переведення системи автоматизації банку (САБ) на трирівневу архітектуру,
          що надає Банку такі переваги: масштабованість, високу надійність, низькі вимоги до каналу зв’язку та високий рівень безпеки.
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
        </StyledGrid>
  </StyledBackground>
)

export default News
