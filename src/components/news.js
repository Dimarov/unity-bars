import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import office from '../images/fix/office3.jpg'
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
  background-image: url(${office});
  background-position: bottom;
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
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: .5rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
`

const StyledNews = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .3s ease-in-out;
  cursor: pointer;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
    filter: grayscale(100);

    :hover {
      background: #fafafa;
      filter: grayscale(0);
    }
  }
`
const StyledNewsPhoto = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: .125rem;
  width: 100%;
  height: 20rem;
  transition: all .3s ease-in-out;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {

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
  width: 18rem;
  transition: all .3s ease-in-out;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 24rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
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
      <StyledLink to="news-1">
        <StyledNews>
          <StyledNewsPhoto image={one}></StyledNewsPhoto>
          <StyledNewsTitle>2019 Року Компанія Unity-Bars Розпочинає Підготовку Впровадження Міжнародних Стандартів</StyledNewsTitle>

          <StyledNewsDate>12.02.2019</StyledNewsDate>
        </StyledNews>
      </StyledLink>
      <StyledLink to="news-2">
        <StyledNews>
          <StyledNewsPhoto image={two}></StyledNewsPhoto>
          <StyledNewsTitle>З Днем Незалежності, Україно!</StyledNewsTitle>

          <StyledNewsDate>23.08.2018</StyledNewsDate>
        </StyledNews>
      </StyledLink>
      <StyledLink to="news-3">

        <StyledNews>
          <StyledNewsPhoto image={three}></StyledNewsPhoto>
          <StyledNewsTitle>Новий Трансфер Данних до BARS MMFO</StyledNewsTitle>

          <StyledNewsDate>16.05.2018</StyledNewsDate>
        </StyledNews>
      </StyledLink>
      <StyledLink to="news-4">
        <StyledNews>
          <StyledNewsPhoto image={four}></StyledNewsPhoto>
          <StyledNewsTitle>Відтепер, отримання пенсї стає ще зручнішим та безпечнішим, завдяки нашій Системі Обміну Данними з ПФУ 🎉</StyledNewsTitle>

          <StyledNewsDate>16.03.2018</StyledNewsDate>
        </StyledNews>
      </StyledLink>
      <StyledLink to="news-5">
        <StyledNews>
          <StyledNewsPhoto image={five}></StyledNewsPhoto>
          <StyledNewsTitle>Вітаємо Херсонський та Чернігівський регіон в BARS-MMFO</StyledNewsTitle>
          <StyledNewsDate>03.03.2018</StyledNewsDate>
        </StyledNews>
      </StyledLink>
      <StyledLink to="news-6">
        <StyledNews>
          <StyledNewsPhoto image={six}></StyledNewsPhoto>
          <StyledNewsTitle>Успішне переведення Системи Автоматизації Банку на трирівневу архітектуру від
          НБУ спільно з UNITY-BARS 🚀</StyledNewsTitle>
          <StyledNewsDate>21.11.2017</StyledNewsDate>
        </StyledNews>
      </StyledLink>
    </StyledGrid>
  </StyledBackground>
)

export default News
