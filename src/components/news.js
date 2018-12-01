import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../images/products.jpg"

import one from "../images/news/news-1.jpg"
import two from "../images/news/news-2.jpg"

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
  grid-template-rows: 1fr 1fr;
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
  height: 32rem;
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
    height: 28rem;
  }
`
const StyledNewsPhoto = styled.div`
  background-image: url(${two});
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
        <StyledNewsPhoto></StyledNewsPhoto>
        <StyledNewsTitle>Зі святом Україно!</StyledNewsTitle>
        <StyledNewsText>After migrations of new regions, we have:
          39 440 338 — bank accounts (18 959 127 active)
          11 420 634 — bank clients (8 853 913 active)
          More then 7 700 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto></StyledNewsPhoto>
        <StyledNewsTitle>New Data Migration to BARS-MMFO database!</StyledNewsTitle>
        <StyledNewsText>After migrations of new regions, we have:
          39 440 338 — bank accounts (18 959 127 active)
          11 420 634 — bank clients (8 853 913 active)
          More then 7 700 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto></StyledNewsPhoto>
        <StyledNewsTitle>Система обміну даними з ПФУ для автоматичної обробки та зарахування пенсій в онлайн режимі</StyledNewsTitle>
        <StyledNewsText>After migrations of new regions, we have:
          39 440 338 — bank accounts (18 959 127 active)
          11 420 634 — bank clients (8 853 913 active)
          More then 7 700 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto></StyledNewsPhoto>
        <StyledNewsTitle>Well Done Data Migration BARS-MMFO</StyledNewsTitle>
        <StyledNewsText>After migrations of new regions, we have:
          39 440 338 — bank accounts (18 959 127 active)
          11 420 634 — bank clients (8 853 913 active)
          More then 7 700 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto></StyledNewsPhoto>
        <StyledNewsTitle>Well Done Data Migration</StyledNewsTitle>
        <StyledNewsText>After migrations of new regions, we have:
          39 440 338 — bank accounts (18 959 127 active)
          11 420 634 — bank clients (8 853 913 active)
          More then 7 700 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto></StyledNewsPhoto>
        <StyledNewsTitle>Новини з НБУ</StyledNewsTitle>
        <StyledNewsText>After migrations of new regions, we have:
          39 440 338 — bank accounts (18 959 127 active)
          11 420 634 — bank clients (8 853 913 active)
          More then 7 700 — active users
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
        </StyledGrid>
  </StyledBackground>
)

export default News
