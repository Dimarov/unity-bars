import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"

import five from "../../images/news/news5.jpg"


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
  background-image: url(${five});
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
    height: 32rem;;
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

const News5 = (props) => (
  <StyledBackground>
    <StyledHeader>
    </StyledHeader>
    <Container>
      <StyledNews>
        <StyledNewsTitle>Вітаємо Херсонський та Чернігівський регіон в BARS-MMFO</StyledNewsTitle>
        <StyledNewsText>Трансфер Данних включив в себе <br />
          39 440 338 – Банкових рахунків (18 959 127 діючих) <br />
          11 420 634 – Клієнтів банку (8 853 913 діючих) <br />
          Більше ніж 7 700 активних користувачів!
        </StyledNewsText>
        <StyledNewsDate>03.03.2018</StyledNewsDate>
      </StyledNews>
    </Container>
  </StyledBackground>
)

export default News5
