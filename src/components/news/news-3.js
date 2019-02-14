import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"

import three from "../../images/news/news3.jpg"


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
  height: 32rem;
  background-image: url(${three});
  background-size: cover;
  background-attachment: fixed;
  padding: 8rem 1rem;
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

const News3 = (props) => (
  <StyledBackground>
    <StyledHeader>
    </StyledHeader>
    <Container>
      <StyledNews>
        <StyledNewsTitle>Новий Трансфер Данних до BARS MMFO</StyledNewsTitle>
        <StyledNewsText>
          Черговий трансфер данних, тепер для регіонів Вінниці та Житомира, всього оновлено:<br />
            46 071 894 – Банкових рахунків (21 451 999 діючих)<br />
            13 526 371 – Клієнтів банку (9 960 526 діючих)<br />
            Більше ніж 8 500 активних користувачів!<br />
            <br />
            У Львові:<br />
            49 266 910 – Банкових рахунків (22 551 403 діючих)<br />
            14 766 645 – Клієнтів банку (10 255 043 діючих)<br />
            Більше ніж 9 500 активних користувачів!<br />
            Залишаємось на звязку ✌️
        </StyledNewsText>
        <StyledNewsDate>16.05.2018</StyledNewsDate>
      </StyledNews>
    </Container>
  </StyledBackground>
)

export default News3
