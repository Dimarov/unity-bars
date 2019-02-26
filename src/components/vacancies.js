import React from 'react'
import styled from "styled-components"
import office from '../images/fix/office.jpg'
import officemobile from '../images/fix/officemobile.jpg'
import { translate } from 'react-i18next'

const Background = styled.div`
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

const Header = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${officemobile});
  background-size: 32rem auto;
  background-attachment: fixed;
  padding: 8rem 1rem;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    background-image: url(${office});
    background-size: cover;
  }
`

const Title = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
`

const Subtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  color: #fff;
`

const Grid = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Vacancy = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #fafafa;
  margin-bottom: 1rem;
  padding: 2rem 1rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 2rem 3rem;
  }
`

const VacancyTitle = styled.h2`
  display: inline;
  padding: .25rem .5rem;
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #3EC4E1;
  margin: 1rem 0;
  border: .125rem solid #3EC4E1;
  border-radius: .125rem;
`

const VacancySubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 2rem 0 1rem;
`

const VacancyText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #1A1A1A;
  margin: .25rem 0;
`

class Vacancies extends React.Component {

  render() {
    const { t } = this.props

    return(
      <Background>
        <Header>
          <Container>
            <Title>{t("Vacancies")}</Title>
            <Subtitle>hr@unity-bars.com</Subtitle>
          </Container>
        </Header>
        <Grid>
          <Vacancy>
            <VacancyTitle>Business analyst</VacancyTitle>
            <VacancySubtitle>{t("Needed")}:</VacancySubtitle>
            <VacancyText>{t("Business Analyst.line1")}</VacancyText>
            <VacancyText>{t("Business Analyst.line2")}</VacancyText>
            <VacancyText>{t("Business Analyst.line3")}</VacancyText>
            <VacancyText>{t("Business Analyst.line4")}</VacancyText>
            <VacancyText>{t("Business Analyst.line5")}</VacancyText>


            <VacancySubtitle>{t("Would be an advantage")}:</VacancySubtitle>

            <VacancyText>{t("Business Analyst.line6")}</VacancyText>

            <VacancySubtitle>{t("We offer")}:</VacancySubtitle>
            <VacancyText>{t("Business Analyst.line7")}</VacancyText>
            <VacancyText>{t("Business Analyst.line8")}</VacancyText>
            <VacancyText>{t("Business Analyst.line9")}</VacancyText>
            <VacancyText>{t("Business Analyst.line10")}</VacancyText>
            <VacancyText>{t("Business Analyst.line11")}</VacancyText>
            <VacancyText>{t("Business Analyst.line12")}</VacancyText>
          </Vacancy>
          <Vacancy>
            <VacancyTitle>QA</VacancyTitle>
            <VacancySubtitle>{t("Needed")}:</VacancySubtitle>
            <VacancyText>{t("QA.line1")}</VacancyText>
            <VacancyText>{t("QA.line2")}</VacancyText>
            <VacancyText>{t("QA.line3")}</VacancyText>
            <VacancyText>{t("QA.line4")}</VacancyText>
            <VacancyText>{t("QA.line5")}</VacancyText>
            <VacancyText>{t("QA.line6")}</VacancyText>

            <VacancySubtitle>{t("Would be an advantage")}:</VacancySubtitle>

            <VacancyText>{t("QA.line7")}</VacancyText>
            <VacancyText>{t("QA.line8")}</VacancyText>
            <VacancyText>{t("QA.line9")}</VacancyText>
            <VacancyText>{t("QA.line10")}</VacancyText>
            <VacancyText>{t("QA.line11")}</VacancyText>

            <VacancySubtitle>{t("Responsibilities")}:</VacancySubtitle>
            <VacancyText>{t("QA.line12")}</VacancyText>
            <VacancyText>{t("QA.line13")}</VacancyText>
            <VacancyText>{t("QA.line14")}</VacancyText>
            <VacancyText>{t("QA.line15")}</VacancyText>
            <VacancyText>{t("QA.line16")}</VacancyText>
            <VacancyText>{t("QA.line17")}</VacancyText>
          </Vacancy>
          <Vacancy>
            <VacancyTitle>Project Manager</VacancyTitle>
            <VacancySubtitle>{t("Needed")}:</VacancySubtitle>
            <VacancyText>{t("Project Manager.line1")}</VacancyText>
            <VacancyText>{t("Project Manager.line2")}</VacancyText>
            <VacancyText>{t("Project Manager.line3")}</VacancyText>
            <VacancyText>{t("Project Manager.line4")}</VacancyText>
            <VacancyText>{t("Project Manager.line5")}</VacancyText>
            <VacancyText>{t("Project Manager.line6")}</VacancyText>
            <VacancyText>{t("Project Manager.line7")}</VacancyText>
            <VacancyText>{t("Project Manager.line8")}</VacancyText>

            <VacancySubtitle>{t("Would be an advantage")}:</VacancySubtitle>


            <VacancyText>{t("Project Manager.line9")}</VacancyText>
            <VacancyText>{t("Project Manager.line10")}</VacancyText>
            <VacancyText>{t("Project Manager.line11")}</VacancyText>
            <VacancyText>{t("Project Manager.line12")}</VacancyText>

            <VacancySubtitle>{t("Responsibilities")}:</VacancySubtitle>

            <VacancyText>{t("Project Manager.line13")}</VacancyText>
            <VacancyText>{t("Project Manager.line14")}</VacancyText>
            <VacancyText>{t("Project Manager.line15")}</VacancyText>
            <VacancyText>{t("Project Manager.line16")}</VacancyText>
            <VacancyText>{t("Project Manager.line17")}</VacancyText>
            <VacancyText>{t("Project Manager.line18")}</VacancyText>
            <VacancyText>{t("Project Manager.line19")}</VacancyText>
            <VacancyText>{t("Project Manager.line20")}</VacancyText>
          </Vacancy>
          <Vacancy>
            <VacancyTitle>ORACLE DBA</VacancyTitle>
            <VacancySubtitle>{t("Needed")}:</VacancySubtitle>
            <VacancyText>{t("ORACLE DBA.line1")}</VacancyText>
            <VacancyText>{t("ORACLE DBA.line2")}</VacancyText>
            <VacancyText>{t("ORACLE DBA.line3")}</VacancyText>
            <VacancyText>{t("ORACLE DBA.line4")}</VacancyText>
            <VacancyText>{t("ORACLE DBA.line5")}</VacancyText>
            <VacancyText>{t("ORACLE DBA.line6")}</VacancyText>

            <VacancySubtitle>{t("Would be an advantage")}:</VacancySubtitle>

            <VacancyText>{t("ORACLE DBA.line7")}</VacancyText>
            <VacancyText>{t("ORACLE DBA.line8")}</VacancyText>
            <VacancyText>{t("ORACLE DBA.line9")}</VacancyText>


          </Vacancy>

          
        </Grid>
      </Background>
    )
  }
}

export default translate("Vacancies")(Vacancies)
