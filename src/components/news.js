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
  width: 24rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .3s ease-in-out;

  @media screen and (max-width: 60rem) {
    width: 18rem;
  }
`

const StyledNewsDate = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  margin: 0 0 1rem 2rem;
  font-weight: 600;
  color: #1A1A1A;
  transition: all .3s ease-in-out;
`

function NewsGrid(props) {
  const newsTile = props.news.map((newsTile) =>
    <StyledNews key={newsTile.id}>
      <StyledNewsPhoto image={`${newsTile.image}`}></StyledNewsPhoto>
      <StyledNewsTitle>{newsTile.title}</StyledNewsTitle>
      <StyledNewsText>{newsTile.text}</StyledNewsText>
      <StyledNewsDate>{newsTile.date}</StyledNewsDate>
    </StyledNews>
  );

  return (
    <StyledGrid>
      {newsTile}
    </StyledGrid>
  );
}

const news = [
  {
    id: 1,
    title: 'З Днем Незалежності, Україно!',
    text: 'Дружній колектив UNITY BARS вітає всіх клієнтів з Днем Незалежності. Разом ми робимо нашу країну сильнішою✊🇺🇦',
    date: '26.11.2018',
    image: `${one}`,
  },
  {
    id: 2,
    title: 'Новий Трансфер Данних до BARS MMFO',
    text: [
          "Черговий трансфер данних, тепер для регіонів Вінниці та Житомира, всього оновлено:",
          "46 071 894 – Банкових рахунків (21 451 999 діючих)",
          "13 526 371 – Клієнтів банку (9 960 526 діючих)",
          "Більше ніж 8 500 активних користувачів!",
          "У Львові:",
          "49 266 910 – Банкових рахунків (22 551 403 діючих)",
          "14 766 645 – Клієнтів банку (10 255 043 діючих)",
          "Більше ніж 9 500 активних користувачів!",
          "Залишаємось на звязку ✌️",
        ],
          date: '26.11.2018',
          image: `${two}`,
  },
  {
    id: 3,
    title: 'Відтепер, отримання пенсї стає ще зручнішим та безпечнішим, завдяки нашій Системі Обміну Данними з ПФУ',
    text: 'Дружній колектив UNITY BARS вітає всіх клієнтів з Днем Незалежності. Разом ми робимо нашу країну сильнішою',
    date: '26.11.2018',
    image: `${three}`,
  },
  {
    id: 4,
    title: 'З Днем Незалежності, Україно!',
    text: 'Дружній колектив UNITY BARS вітає всіх клієнтів з Днем Незалежності. Разом ми робимо нашу країну сильнішою',
    date: '26.11.2018',
    image: `${four}`,
  },
  {
    id: 5,
    title: 'З Днем Незалежності, Україно!',
    text: 'Дружній колектив UNITY BARS вітає всіх клієнтів з Днем Незалежності. Разом ми робимо нашу країну сильнішою',
    date: '26.11.2018',
    image: `${five}`,
  },
  {
    id: 6,
    title: 'З Днем Незалежності, Україно!',
    text: 'Дружній колектив UNITY BARS вітає всіх клієнтів з Днем Незалежності. Разом ми робимо нашу країну сильнішою',
    date: '26.11.2018',
    image: `${six}`,
  },
]

const News = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Новини</StyledTitle>
        <StyledSubtitle>Останні новини в Unity-Bars</StyledSubtitle>
      </Container>
    </StyledHeader>
    <NewsGrid news={news} />
  </StyledBackground>
)

export default News
