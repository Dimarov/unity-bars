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
  background-attachment: fixed;
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
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const StyledVacancy = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #fafafa;
  margin-bottom: 1rem;
  padding: 2rem 1rem;
`

const StyledVacancyTitle = styled.h2`
  display: inline;
  padding: .25rem .5rem;
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #3EC4E1;
  margin: 1rem 2rem;
  border: .125rem solid #3EC4E1;
  border-radius: .125rem;
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
        <StyledVacancyTitle>Project Manager</StyledVacancyTitle>
        <StyledVacancySubtitle>Необхідно:</StyledVacancySubtitle>
        <StyledVacancyText>Технічна вища освіта.</StyledVacancyText>
        <StyledVacancyText>Досвід управління проектами з розробки та впровадження ПЗ від 3-х років.</StyledVacancyText>
        <StyledVacancyText>Теоретичні знання в області проектного менеджменту та досвід їх застосування.</StyledVacancyText>
        <StyledVacancyText>Розуміння основних принципів та бізнес-процесів функціонування систем банківської автоматизації.</StyledVacancyText>
        <StyledVacancyText>Досвід написання проектної та технічної документації.</StyledVacancyText>
        <StyledVacancyText>Досвід керівництва та координації роботи внутрішніх робочих груп.</StyledVacancyText>
        <StyledVacancyText>Комунікабельність, високий рівень самоорганізації та мотивації, здатність та бажання до самонавчання, стресостійкість.</StyledVacancyText>
        <StyledVacancyText>Вміння працювати в режимі багатозадачності.</StyledVacancyText>
        <StyledVacancySubtitle>Буде перевагою:</StyledVacancySubtitle>
        <StyledVacancyText>Досвід управління проектами з розробки ПЗ у банківському секторі.</StyledVacancyText>
        <StyledVacancyText>Досвід роботи розробником та/або архітектором ПЗ.</StyledVacancyText>
        <StyledVacancyText>Досвід роботи бізнес-аналітиком у банківській сфері.</StyledVacancyText>
        <StyledVacancyText>Знання прикладних банківських модулів.</StyledVacancyText>
        <StyledVacancySubtitle>Обов'язки:</StyledVacancySubtitle>
        <StyledVacancyText>Виявлення та деталізація вимог Замовника.</StyledVacancyText>
        <StyledVacancyText>Складання плану та бюджету проекту.</StyledVacancyText>
        <StyledVacancyText>Участь в формуванні команди, організація, мотивація команди проекту.</StyledVacancyText>
        <StyledVacancyText>Оцінка ризиків проекту та варіантів їх уникнення.</StyledVacancyText>
        <StyledVacancyText>Підготовка детального технічного завдання та супутньої документації по проекту, в тому числі згідно ДЕСТ.</StyledVacancyText>
        <StyledVacancyText>Постановка завдань розробникам.</StyledVacancyText>
        <StyledVacancyText>Дослідження та аналіз ринку банківських послуг.</StyledVacancyText>
        <StyledVacancyText>Тісна взаємодія із Замовниками та Партнерами.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>ORACLE DBA</StyledVacancyTitle>
        <StyledVacancySubtitle>Необхідно:</StyledVacancySubtitle>
        <StyledVacancyText>Вища освіта;</StyledVacancyText>
        <StyledVacancyText>Досвід роботи адміністратором баз даних від 5-х років.</StyledVacancyText>
        <StyledVacancyText>ДДосвід адміністрування ОС сертифікована для СУБД Oracle.</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з налаштування конфігурацій і оптимізації продуктивності СУБД.</StyledVacancyText>
        <StyledVacancyText>Досвід роботи з резервним копіюванням, відновленням баз даних.</StyledVacancyText>
        <StyledVacancyText>Знання серверного обладнання та кластерних технологій.</StyledVacancyText>
        <StyledVacancySubtitle>Буде перевагою:</StyledVacancySubtitle>
        <StyledVacancyText>Досвід роботи з PL / SQL.</StyledVacancyText>
        <StyledVacancyText>Досвід роботи в фінансово-банківському секторі;</StyledVacancyText>
        <StyledVacancyText>Наявність сертифікатів або підтвердження кваліфікації з СУБД Oracle.</StyledVacancyText>
      </StyledVacancy>
    </StyledGrid>
  </StyledBackground>
)

export default Vacancies
