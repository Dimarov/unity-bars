import React from 'react'
import styled from "styled-components"

import bg from "../../images/products.jpg"

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
  margin: 2rem 2rem 1rem;
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
        <StyledTitle>Вакансии</StyledTitle>
        <StyledSubtitle>hr@unity-bars.com</StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledVacancy>
        <StyledVacancyTitle>QA</StyledVacancyTitle>
        <StyledVacancySubtitle>Необходимо:</StyledVacancySubtitle>
        <StyledVacancyText>Знание теории тестирования, методологий и техник.</StyledVacancyText>
        <StyledVacancyText>Опыт создания тестовой документации (тест-план, чек-листы, тест-кейсы).</StyledVacancyText>
        <StyledVacancyText>Опыт работы с Jira, Confluence.</StyledVacancyText>
        <StyledVacancyText>Умение работать сInternet Explorer, Chrome developer tools.</StyledVacancyText>
        <StyledVacancyText>Базовые знания SQL (Oracle).</StyledVacancyText>
        <StyledVacancyText>Базовые знания клиент-серверной архитектуры.</StyledVacancyText>
        <StyledVacancySubtitle>Будет преимуществом:</StyledVacancySubtitle>
        <StyledVacancyText>Техническое образование (Информационные технологии, компьютерные науки и др.).</StyledVacancyText>
        <StyledVacancyText>Опыт работы с банковским программным обеспечением.</StyledVacancyText>
        <StyledVacancyText>Умение тестировать веб-сервисы специальными программными средствами (Postman, SoapUI).</StyledVacancyText>
        <StyledVacancyText>Умение проводить тестирование нагрузки (Jmeter).</StyledVacancyText>
        <StyledVacancyText>Опыт работы с Git или SVN.</StyledVacancyText>
        <StyledVacancySubtitle>Обязаности:</StyledVacancySubtitle>
        <StyledVacancyText>Тестирование банковского программного обеспечения.</StyledVacancyText>
        <StyledVacancyText>Создание тестовой документации: чек-листы и детализированные тест-кейсы.</StyledVacancyText>
        <StyledVacancyText>Документирования инцидентов.</StyledVacancyText>
        <StyledVacancyText>Работа с базой данных, написание SQL-запросов.</StyledVacancyText>
        <StyledVacancyText>Участие в приемном тестировании на площадке заказчика.</StyledVacancyText>
        <StyledVacancyText>Тесное сотрудничество с заказчиком и разработчиками.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>Project Manager</StyledVacancyTitle>
        <StyledVacancySubtitle>Необходимо:</StyledVacancySubtitle>
        <StyledVacancyText>Техническая высшее образование.</StyledVacancyText>
        <StyledVacancyText>Опыт управления проектами по разработке и внедрению ПО от 3-х лет.</StyledVacancyText>
        <StyledVacancyText>Теоретические знания в области проектного менеджмента и опыт их применения.</StyledVacancyText>
        <StyledVacancyText>Понимание основных принципов и бизнес-процессов функционирования систем банковской автоматизации.</StyledVacancyText>
        <StyledVacancyText>Опыт написания проектной и технической документации.</StyledVacancyText>
        <StyledVacancyText>Опыт руководства и координации работы внутренних рабочих групп.</StyledVacancyText>
        <StyledVacancyText>Коммуникабельность, высокий уровень самоорганизации и мотивации, способность и желание к самообучению, стрессоустойчивость.</StyledVacancyText>
        <StyledVacancyText>Умение работать в режиме многозадачности.</StyledVacancyText>
        <StyledVacancySubtitle>Будет преимуществом:</StyledVacancySubtitle>
        <StyledVacancyText>Опыт управления проектами по разработке ПО в банковском секторе.</StyledVacancyText>
        <StyledVacancyText>Опыт работы разработчиком и/или архитектором ПО.</StyledVacancyText>
        <StyledVacancyText>Опыт работы бизнес-аналитиком в банковской сфере.</StyledVacancyText>
        <StyledVacancyText>Знание прикладных банковских модулей.</StyledVacancyText>
        <StyledVacancySubtitle>Обязаности:</StyledVacancySubtitle>
        <StyledVacancyText>Обнаруживание и детализация требований Заказчика.</StyledVacancyText>
        <StyledVacancyText>Составление плана и бюджета проекта.</StyledVacancyText>
        <StyledVacancyText>Участие в формировании команды, организация, мотивация команды проекта.</StyledVacancyText>
        <StyledVacancyText>Оценка рисков проекта и вариантов их предотвращения.</StyledVacancyText>
        <StyledVacancyText>Подготовка детального технического задания и сопутствующей документации по проекту, в том числе по ГОСТ.</StyledVacancyText>
        <StyledVacancyText>Постановка задач разработчикам.</StyledVacancyText>
        <StyledVacancyText>Исследование и анализ рынка банковских услуг.</StyledVacancyText>
        <StyledVacancyText>Тесное взаимодействие с Заказчиками и Партнерами.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>ORACLE DBA</StyledVacancyTitle>
        <StyledVacancySubtitle>Необходимо:</StyledVacancySubtitle>
        <StyledVacancyText>Высшее образование;</StyledVacancyText>
        <StyledVacancyText>Опыт работы администратором баз данных от 5-ти лет.</StyledVacancyText>
        <StyledVacancyText>Опыт администрирования ОС сертифицированой для СУБД Oracle.</StyledVacancyText>
        <StyledVacancyText>Опыт работы по настройке конфигураций и оптимизации производительности СУБД.</StyledVacancyText>
        <StyledVacancyText>Опыт работы с резервным копированием, восстановлением баз данных.</StyledVacancyText>
        <StyledVacancyText>Знание серверного оборудования и кластерных технологий.</StyledVacancyText>
        <StyledVacancySubtitle>Будет преимуществом:</StyledVacancySubtitle>
        <StyledVacancyText>Опыт работы с PL/SQL.</StyledVacancyText>
        <StyledVacancyText>Опыт работы в финансово-банковском секторе;</StyledVacancyText>
        <StyledVacancyText>Наличие сертификатов или подтверждение квалификации по СУБД Oracle.</StyledVacancyText>
      </StyledVacancy>
    </StyledGrid>
  </StyledBackground>
)

export default Vacancies
