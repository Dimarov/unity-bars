import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import background from "../images/company.jpg"

const StyledBackground = styled.div`
  width: 100%;
  height: auto;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 60rem) {
    padding: 0 1rem;
  }
`

const StyledHeader = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${background});
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

const StyledTopic = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 200;
  margin: 2rem 0;
`

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 3rem 1rem;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem .5rem;
  }
`

const StyledSecondGrid = styled.div`
  height: 60vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: .125rem;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: .125rem;
  }
`

const StyledClient = styled.div`
  height: 100%;
  width: 100%;
  background: lightblue;
`

const StyledPartner = styled.div`
  height: 100%;
  width: 100%;
  background: lightblue;
`

const StyledPerson = styled.div`
  width: 100%;
  height: 100%;
  border-radius: .125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  transition: all .1s ease-out;

  :hover {
    transform: translateY(-.125rem);
  }
`

const StyledPersonPhoto = styled.div`
  width: 100%;
  height: 12rem;
  background: red;
  border-radius: .125rem;

  @media screen and (max-width: 60rem) {
    height: 10rem;
  }
`

const StyledPersonName = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1rem 0 0;

  @media screen and (max-width: 60rem) {
    font-size: 1rem;
  }
`

const StyledPersonPosition = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  margin: .5rem 0;
  color: #37B3FF;

  @media screen and (max-width: 60rem) {
    font-size: 1rem;
  }
`

function Employees(props) {
  const person = props.employees.map((employee) =>
    <StyledPerson key={employee.id}>
      <StyledPersonPhoto></StyledPersonPhoto>
      <StyledPersonName>{employee.name}</StyledPersonName>
      <StyledPersonPosition>{employee.position}</StyledPersonPosition>
    </StyledPerson>
  );

  return (
    <StyledGrid>
      {person}
    </StyledGrid>
  );
}

const employees = [
  {id: 1, name: 'Цабеха Яна', position: 'HR Менеджер'},
  {id: 2, name: 'Ланбіна Ольга', position: 'Директор департаменту проектного менеджменту та бізнес-аналізу'},
  {id: 3, name: 'Сухова Татяна', position: 'Заступник Генерального директора'},
  {id: 4, name: 'Суфтін Євген', position: 'Провідний інженер-програміст департаменту впровадження та супроводження ПЗ'},
  {id: 5, name: 'Сошко Євген', position: 'Директор департаменту впровадження та супроводження ПЗ'},
  {id: 6, name: 'Кобернюк Ярослав', position: 'Заступник директора департаменту впровадження та супроводження ПЗ'},
  {id: 7, name: 'Пастушенко Оксана', position: 'Начальник відділу технічної документації'},
  {id: 8, name: 'Овчарук Анатолій', position: 'Начальник відділу обліку, резервування, фінансової та статистичної звітності'},
  {id: 9, name: 'Музика Олег', position: 'Заступник директора департаменту розробки та тестування ПЗ'},
  {id: 10, name: 'Савченко Андрій', position: 'Менеджер з інформації'},
  {id: 11, name: 'Марценюк Людмила', position: 'Провідний інженер-програміст'},
  {id: 12, name: 'Малоросіянов Михайло', position: 'Інженер-програміст департаменту впровадження та супроводження ПЗ'},
  {id: 13, name: 'Коротков Сергій', position: 'Начальник управління системно-технічної підтримки'},
  {id: 14, name: 'Козачок Віталій', position: 'Провідний інженер-програміст управління проектів ДКСУ'},
  {id: 15, name: 'Гудима Ігор', position: 'Провідний інженер-програміст управління проектів ДКСУ'},
  {id: 16, name: 'Вірко Татяна', position: 'Начальник відділу обліку'},
  {id: 17, name: 'Кадученко Ярослава', position: 'Aдміністративний директор'},
  {id: 18, name: 'Кондаков Валерій', position: 'Генеральний директор'},
]

const Company = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Компанія</StyledTitle>
        <StyledSubtitle>UNITY BARS – провідна українська фінтех компанія, спеціалізована на впровадженні ефективного та сучасного програмного забезпечення для банків та фінансових установ.
</StyledSubtitle>
      </Container>
    </StyledHeader>
    <Container>
      <StyledTopic>Наша Команда</StyledTopic>
      <hr />
      <Employees employees={employees} />
      <StyledTopic>Клієнти та партнери</StyledTopic>
      <hr />
      <StyledSecondGrid>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
        <StyledClient></StyledClient>
      </StyledSecondGrid>
      <br />
      <StyledSecondGrid>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
        <StyledPartner></StyledPartner>
      </StyledSecondGrid>
      <br />
    </Container>
  </StyledBackground>
)

export default Company
