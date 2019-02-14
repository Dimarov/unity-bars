import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"

import six from "../../images/news/news6.jpg"


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
  background-image: url(${six});
  background-size: cover;
  background-position: center;
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

const News6 = (props) => (
  <StyledBackground>
    <StyledHeader>
    </StyledHeader>
    <Container>
      <StyledNews>
        <StyledNewsTitle>Успішне переведення Системи Автоматизації Банку на трирівневу архітектуру від НБУ спільно з UNITY-BARS 🚀</StyledNewsTitle>
        <StyledNewsText>
        В жовтні 2017 року НБУ спільними зуслиллями з UNITY-BARS успішно виконали переведення системи автоматизації банку (САБ) на трирівневу архітектуру, що надає Банку такі переваги: масштабованість, високу надійність, низькі вимоги до каналу зв’язку та високий рівень безпеки.Нагадаємо, що у 2012 році НБУ разом з компанією UNITY-BARS успішно запустили систему Мульти-МФО, а у 2015 році був виконаний перехід на єдине МФО.
        </StyledNewsText>
        <StyledNewsDate>21.11.2017</StyledNewsDate>
      </StyledNews>
    </Container>
  </StyledBackground>
)

export default News6
