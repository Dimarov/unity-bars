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
        <StyledTitle>Vacancies</StyledTitle>
        <StyledSubtitle>hr@unity-bars.com</StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledVacancy>
        <StyledVacancyTitle>QA</StyledVacancyTitle>
        <StyledVacancySubtitle>Required:</StyledVacancySubtitle>
        <StyledVacancyText>Knowledge of the theory of testing, methodologies and techniques.</StyledVacancyText>
        <StyledVacancyText>Experience in the creation of test documentation (test-plan, check-lists, test cases).</StyledVacancyText>
        <StyledVacancyText>Experience with Jira, Confluence.</StyledVacancyText>
        <StyledVacancyText>Ability to work with Internet Explorer, Chrome developer tools.</StyledVacancyText>
        <StyledVacancyText>Basic knowledge SQL (Oracle).</StyledVacancyText>
        <StyledVacancyText>Basic knowledge of client-server architecture.</StyledVacancyText>
        <StyledVacancySubtitle>It will be an advantage:</StyledVacancySubtitle>
        <StyledVacancyText>Technical education (Information technology, computer science, etc.).</StyledVacancyText>
        <StyledVacancyText>Experience in working with banking software.</StyledVacancyText>
        <StyledVacancyText>Ability to test web services with special software (Postman, SoapUI).</StyledVacancyText>
        <StyledVacancyText>Ability to conduct load testing (Jmeter).</StyledVacancyText>
        <StyledVacancyText>Experience with Git or SVN.</StyledVacancyText>
        <StyledVacancySubtitle>Duties:</StyledVacancySubtitle>
        <StyledVacancyText>Banking software testing.</StyledVacancyText>
        <StyledVacancyText>Creation of test documentation: check-lists and detailed test-cases.</StyledVacancyText>
        <StyledVacancyText>Documentation of incidents.</StyledVacancyText>
        <StyledVacancyText>Working with the database, writing SQL queries.</StyledVacancyText>
        <StyledVacancyText>Participation in the acceptance testing on the customer's site.</StyledVacancyText>
        <StyledVacancyText>Close cooperation with customer and developers.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>Project Manager</StyledVacancyTitle>
        <StyledVacancySubtitle>Required:</StyledVacancySubtitle>
        <StyledVacancyText>Technical higher education.</StyledVacancyText>
        <StyledVacancyText>Experience in project management on the development and implementation of software from 3 years.</StyledVacancyText>
        <StyledVacancyText>Theoretical knowledge in the field of project management and experience of their application.</StyledVacancyText>
        <StyledVacancyText>Understanding of the basic principles and business processes of the functioning of banking automation systems.</StyledVacancyText>
        <StyledVacancyText>Experience in writing design and technical documentation.</StyledVacancyText>
        <StyledVacancyText>Experience in managing and coordinating the work of internal working groups.</StyledVacancyText>
        <StyledVacancyText>Sociability, high level of self-organization and motivation, ability and desire for self-education, stress resistance.</StyledVacancyText>
        <StyledVacancyText>Ability to work in multitasking mode.</StyledVacancyText>
        <StyledVacancySubtitle>It will be an advantage:</StyledVacancySubtitle>
        <StyledVacancyText>Experience in managing software development projects in the banking sector.</StyledVacancyText>
        <StyledVacancyText>Work experience by developer and/or software architect.</StyledVacancyText>
        <StyledVacancyText>Experience of work as a business analyst in the banking sector.</StyledVacancyText>
        <StyledVacancyText>Knowledge of applied banking modules.</StyledVacancyText>
        <StyledVacancySubtitle>Duties:</StyledVacancySubtitle>
        <StyledVacancyText>Identification and detail of the Customer's requirements.</StyledVacancyText>
        <StyledVacancyText>Drafting of the plan and budget of the project.</StyledVacancyText>
        <StyledVacancyText>Participation in the formation of a team, organization, motivation of the project team.</StyledVacancyText>
        <StyledVacancyText>Assessment of project risks and their avoidance options.</StyledVacancyText>
        <StyledVacancyText>Preparation of detailed technical specification and accompanying documentation for the project, including according to GOST.</StyledVacancyText>
        <StyledVacancyText>Setting up tasks for developers.</StyledVacancyText>
        <StyledVacancyText>Research and analysis of the banking services market.</StyledVacancyText>
        <StyledVacancyText>Close cooperation with Customers and Partners.</StyledVacancyText>
      </StyledVacancy>
      <StyledVacancy>
        <StyledVacancyTitle>ORACLE DBA</StyledVacancyTitle>
        <StyledVacancySubtitle>Required:</StyledVacancySubtitle>
        <StyledVacancyText>Higher Education;</StyledVacancyText>
        <StyledVacancyText>Experience of working with database administrator from 5 years.</StyledVacancyText>
        <StyledVacancyText>The experience of OS administration is certified for Oracle DBMS.</StyledVacancyText>
        <StyledVacancyText>Experience in configuring configurations and optimizing DBMS performance.</StyledVacancyText>
        <StyledVacancyText>Experience in backing up, database recovery.</StyledVacancyText>
        <StyledVacancyText>Knowledge of server equipment and cluster technologies.</StyledVacancyText>
        <StyledVacancySubtitle>It will be an advantage:</StyledVacancySubtitle>
        <StyledVacancyText>Experience with PL / SQL.</StyledVacancyText>
        <StyledVacancyText>Experience in the financial and banking sector;</StyledVacancyText>
        <StyledVacancyText>Availability of certificates or qualification confirmation with Oracle DBMS</StyledVacancyText>
      </StyledVacancy>
    </StyledGrid>
  </StyledBackground>
)

export default Vacancies
