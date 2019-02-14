import React from 'react'
import styled from "styled-components"

import background from "../images/company.jpg"

import one from "../images/clients/1.jpg"
import two from "../images/clients/2.jpg"
import three from "../images/clients/3.jpg"
import four from "../images/clients/4.jpg"
import five from "../images/clients/5.jpg"
import six from "../images/clients/6.jpg"
import seven from "../images/clients/7.jpg"
import eight from "../images/clients/8.jpg"
import nine from "../images/clients/9.jpg"
import ten from "../images/clients/10.jpg"
import eleven from "../images/clients/11.jpg"
import twelve from "../images/clients/12.jpg"
import onep from "../images/partners/1.jpg"
import twop from "../images/partners/2.jpg"
import threep from "../images/partners/3.jpg"
import fourp from "../images/partners/4.jpg"
import fivep from "../images/partners/5.jpg"
import sixp from "../images/partners/6.jpg"
import sevenp from "../images/partners/7.jpg"
import eightp from "../images/partners/8.jpg"
import ninep from "../images/partners/9.jpg"
import tenp from "../images/partners/10.jpg"
import elevenp from "../images/partners/11.jpg"
import twelvep from "../images/partners/12.jpg"

const Background = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
  }
`

const Header = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  padding-top: 8rem;
`

const Title = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
`

const Subtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
`

const Topic = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 200;
  margin: 2rem 0;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem .5rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 3rem 1rem;
  }
`

const SecondGrid = styled.div`
  height: 60rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: .125rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: .125rem;
  }
`

const Client = styled.div`
  height: 100%;
  width: 100%;
  background: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(.95);
  transition: all .2s ease-in;

  :hover {
    filter: brightness(1);
  }
`

const Image = styled.img`

`

const Partner = styled.div`
  height: 100%;
  width: 100%;
  background: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(.95);
  transition: all .2s ease-in;

  :hover {
    filter: brightness(1);
  }
`

const Person = styled.div`
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

const PersonPhoto = styled.div`
  width: 100%;
  height: 10rem;
  background: lightgrey;
  border-radius: .125rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 12rem;
  }
`

const PersonName = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
  }
`

const PersonPosition = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 200;
  margin: .5rem 0;
  color: #37B3FF;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
  }
`

function Employees(props) {
  const person = props.employees.map((employee) =>
    <Person key={employee.id}>
      <PersonPhoto></PersonPhoto>
      <PersonName>{employee.name}</PersonName>
      <PersonPosition>{employee.position}</PersonPosition>
    </Person>
  );

  return (
    <Grid>
      {person}
    </Grid>
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
  <Background>
    <Header>
      <Container>
        <Title>Компанія</Title>
        <Subtitle>UNITY BARS – провідна українська фінтех компанія, спеціалізована на впровадженні ефективного та сучасного програмного забезпечення для банків та фінансових установ.
        </Subtitle>
      </Container>
    </Header>
    <Container>
      <Topic>Наша Команда</Topic>
      <hr />
      <Employees employees={employees} />
      <Topic>Клієнти та партнери</Topic>
      <hr />
      <SecondGrid>
        <Client>
          <Image src={one} />
        </Client>
        <Client>
          <Image src={two} />
        </Client>
        <Client>
          <Image src={three} />
        </Client>
        <Client>
          <Image src={four} />
        </Client>
        <Client>
          <Image src={five} />
        </Client>
        <Client>
          <Image src={six} />
        </Client>
        <Client>
          <Image src={seven} />
        </Client>
        <Client>
          <Image src={eight} />
        </Client>
        <Client>
          <Image src={nine} />
        </Client>
        <Client>
          <Image src={ten} />
        </Client>
        <Client>
          <Image src={eleven} />
        </Client>
        <Client>
          <Image src={twelve} />
        </Client>
      </SecondGrid>
      <br />
      <SecondGrid>
        <Partner>
          <Image src={onep} />
        </Partner>
        <Partner>
          <Image src={twop} />
        </Partner>
        <Partner>
          <Image src={threep} />
        </Partner>
        <Partner>
          <Image src={fourp} />
        </Partner>
        <Partner>
          <Image src={fivep} />
        </Partner>
        <Partner>
          <Image src={sixp} />
        </Partner>
        <Partner>
          <Image src={sevenp} />
        </Partner>
        <Partner>
          <Image src={eightp} />
        </Partner>
        <Partner>
          <Image src={ninep} />
        </Partner>
        <Partner>
          <Image src={tenp} />
        </Partner>
        <Partner>
          <Image src={elevenp} />
        </Partner>
        <Partner>
          <Image src={twelvep} />
        </Partner>
      </SecondGrid>
      <br />
    </Container>
  </Background>
)

export default Company
