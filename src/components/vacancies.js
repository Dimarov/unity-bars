import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../images/products.jpg"

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
  padding-top: 8rem;
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
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`

const StyledVacancy = styled.div`
  width: 100%;
  height: 44rem;
  border-radius: .125rem;
  background: #fafafa;

  @media screen and (max-width: 60rem) {
    height: 12rem;
  }
`

const StyledVacancyTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #3EC4E1;
  margin: 1rem 2rem;
`

const StyledVacancySubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem 2rem;
`

const StyledVacancyText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #1A1A1A;
  margin: .25rem 2rem;
`

const Vacancies = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Вакансії</StyledTitle>
        <StyledSubtitle>hr@unity-bars.com</StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledVacancy>
        <StyledVacancyTitle>QA</StyledVacancyTitle>
        <StyledVacancySubtitle>Необхідно:</StyledVacancySubtitle>
        <StyledVacancyText>Знання теорії тестування, методологій та технік.</StyledVacancyText>
        <StyledVacancyText>Досвід створення тестової документації (тест-план, чек-листи, тест-кейси).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Jira, Confluence.</StyledVacancyText>
        <StyledVacancyText>Вміння працювати з Internet Explorer, Chrome developer tools.</StyledVacancyText>
        <StyledVacancyText>Базові знання SQL (Oracle).</StyledVacancyText>
        <StyledVacancyText>Базові знання клієнт-серверної архітектури.</StyledVacancyText>
        <StyledVacancySubtitle>Буде перевагою:</StyledVacancySubtitle>
        <StyledVacancyText>Технічна освіта (Інформаційні технології, комп’ютерні науки та ін.).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з банківським програмним забезпеченням.</StyledVacancyText>
        <StyledVacancyText>Вміння тестувати веб-сервіси спеціальними програмними засобами (Postman, SoapUI).</StyledVacancyText>
        <StyledVacancyText>Вміння проводити тестування навантаження (Jmeter).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Git або SVN.</StyledVacancyText>
        <StyledVacancySubtitle>Обов'язки:</StyledVacancySubtitle>
        <StyledVacancyText>Тестування банківського програмного забеспечення.</StyledVacancyText>
        <StyledVacancyText>Створення тестової документації: чек-листи та деталізовані тест-кейси.</StyledVacancyText>
        <StyledVacancyText>Документування інцидентів.</StyledVacancyText>
        <StyledVacancyText>Робота з базою даних, написання SQL-запитів.</StyledVacancyText>
        <StyledVacancyText>Участь в приймальному тестуванні на майданчику замовника.</StyledVacancyText>
        <StyledVacancyText>Тісна співпраця з замовником та розробниками.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>QA</StyledVacancyTitle>
        <StyledVacancySubtitle>Необхідно:</StyledVacancySubtitle>
        <StyledVacancyText>Знання теорії тестування, методологій та технік.</StyledVacancyText>
        <StyledVacancyText>Досвід створення тестової документації (тест-план, чек-листи, тест-кейси).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Jira, Confluence.</StyledVacancyText>
        <StyledVacancyText>Вміння працювати з Internet Explorer, Chrome developer tools.</StyledVacancyText>
        <StyledVacancyText>Базові знання SQL (Oracle).</StyledVacancyText>
        <StyledVacancyText>Базові знання клієнт-серверної архітектури.</StyledVacancyText>
        <StyledVacancySubtitle>Буде перевагою:</StyledVacancySubtitle>
        <StyledVacancyText>Технічна освіта (Інформаційні технології, комп’ютерні науки та ін.).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з банківським програмним забезпеченням.</StyledVacancyText>
        <StyledVacancyText>Вміння тестувати веб-сервіси спеціальними програмними засобами (Postman, SoapUI).</StyledVacancyText>
        <StyledVacancyText>Вміння проводити тестування навантаження (Jmeter).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Git або SVN.</StyledVacancyText>
        <StyledVacancySubtitle>Обов'язки:</StyledVacancySubtitle>
        <StyledVacancyText>Тестування банківського програмного забеспечення.</StyledVacancyText>
        <StyledVacancyText>Створення тестової документації: чек-листи та деталізовані тест-кейси.</StyledVacancyText>
        <StyledVacancyText>Документування інцидентів.</StyledVacancyText>
        <StyledVacancyText>Робота з базою даних, написання SQL-запитів.</StyledVacancyText>
        <StyledVacancyText>Участь в приймальному тестуванні на майданчику замовника.</StyledVacancyText>
        <StyledVacancyText>Тісна співпраця з замовником та розробниками.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>QA</StyledVacancyTitle>
        <StyledVacancySubtitle>Необхідно:</StyledVacancySubtitle>
        <StyledVacancyText>Знання теорії тестування, методологій та технік.</StyledVacancyText>
        <StyledVacancyText>Досвід створення тестової документації (тест-план, чек-листи, тест-кейси).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Jira, Confluence.</StyledVacancyText>
        <StyledVacancyText>Вміння працювати з Internet Explorer, Chrome developer tools.</StyledVacancyText>
        <StyledVacancyText>Базові знання SQL (Oracle).</StyledVacancyText>
        <StyledVacancyText>Базові знання клієнт-серверної архітектури.</StyledVacancyText>
        <StyledVacancySubtitle>Буде перевагою:</StyledVacancySubtitle>
        <StyledVacancyText>Технічна освіта (Інформаційні технології, комп’ютерні науки та ін.).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з банківським програмним забезпеченням.</StyledVacancyText>
        <StyledVacancyText>Вміння тестувати веб-сервіси спеціальними програмними засобами (Postman, SoapUI).</StyledVacancyText>
        <StyledVacancyText>Вміння проводити тестування навантаження (Jmeter).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Git або SVN.</StyledVacancyText>
        <StyledVacancySubtitle>Обов'язки:</StyledVacancySubtitle>
        <StyledVacancyText>Тестування банківського програмного забеспечення.</StyledVacancyText>
        <StyledVacancyText>Створення тестової документації: чек-листи та деталізовані тест-кейси.</StyledVacancyText>
        <StyledVacancyText>Документування інцидентів.</StyledVacancyText>
        <StyledVacancyText>Робота з базою даних, написання SQL-запитів.</StyledVacancyText>
        <StyledVacancyText>Участь в приймальному тестуванні на майданчику замовника.</StyledVacancyText>
        <StyledVacancyText>Тісна співпраця з замовником та розробниками.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>QA</StyledVacancyTitle>
        <StyledVacancySubtitle>Необхідно:</StyledVacancySubtitle>
        <StyledVacancyText>Знання теорії тестування, методологій та технік.</StyledVacancyText>
        <StyledVacancyText>Досвід створення тестової документації (тест-план, чек-листи, тест-кейси).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Jira, Confluence.</StyledVacancyText>
        <StyledVacancyText>Вміння працювати з Internet Explorer, Chrome developer tools.</StyledVacancyText>
        <StyledVacancyText>Базові знання SQL (Oracle).</StyledVacancyText>
        <StyledVacancyText>Базові знання клієнт-серверної архітектури.</StyledVacancyText>
        <StyledVacancySubtitle>Буде перевагою:</StyledVacancySubtitle>
        <StyledVacancyText>Технічна освіта (Інформаційні технології, комп’ютерні науки та ін.).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з банківським програмним забезпеченням.</StyledVacancyText>
        <StyledVacancyText>Вміння тестувати веб-сервіси спеціальними програмними засобами (Postman, SoapUI).</StyledVacancyText>
        <StyledVacancyText>Вміння проводити тестування навантаження (Jmeter).</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з Git або SVN.</StyledVacancyText>
        <StyledVacancySubtitle>Обов'язки:</StyledVacancySubtitle>
        <StyledVacancyText>Тестування банківського програмного забеспечення.</StyledVacancyText>
        <StyledVacancyText>Створення тестової документації: чек-листи та деталізовані тест-кейси.</StyledVacancyText>
        <StyledVacancyText>Документування інцидентів.</StyledVacancyText>
        <StyledVacancyText>Робота з базою даних, написання SQL-запитів.</StyledVacancyText>
        <StyledVacancyText>Участь в приймальному тестуванні на майданчику замовника.</StyledVacancyText>
        <StyledVacancyText>Тісна співпраця з замовником та розробниками.</StyledVacancyText>
      </StyledVacancy>
    </StyledGrid>
  </StyledBackground>
)

export default Vacancies
