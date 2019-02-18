import React from 'react'
import styled from "styled-components"
import office from '../images/fix/office.jpg'
import bg from "../images/products.jpg"
import { translate } from 'react-i18next'

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
  background-image: url(${office});
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

class Vacancies extends React.Component {

  render() {
    const { t } = this.props

    return(
      <StyledBackground>
        <StyledHeader>
          <Container>
            <StyledTitle>{t("Vacancies")}</StyledTitle>
            <StyledSubtitle>hr@unity-bars.com</StyledSubtitle>
          </Container>
        </StyledHeader>
        <StyledGrid>
          <StyledVacancy>
            <StyledVacancyTitle>QA</StyledVacancyTitle>
            <StyledVacancySubtitle>{t("Needed")}:</StyledVacancySubtitle>
            <StyledVacancyText>{t("QA.line1")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line2")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line3")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line4")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line5")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line6")}</StyledVacancyText>

            <StyledVacancySubtitle>{t("Would be an advantage")}:</StyledVacancySubtitle>

            <StyledVacancyText>{t("QA.line7")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line8")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line9")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line10")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line11")}</StyledVacancyText>

            <StyledVacancySubtitle>{t("Responsibilities")}:</StyledVacancySubtitle>
            <StyledVacancyText>{t("QA.line12")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line13")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line14")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line15")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line16")}</StyledVacancyText>
            <StyledVacancyText>{t("QA.line17")}</StyledVacancyText>
          </StyledVacancy>
          <StyledVacancy>
            <StyledVacancyTitle>Project Manager</StyledVacancyTitle>
            <StyledVacancySubtitle>{t("Needed")}:</StyledVacancySubtitle>
            <StyledVacancyText>{t("Project Manager.line1")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line2")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line3")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line4")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line5")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line6")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line7")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line8")}</StyledVacancyText>

            <StyledVacancySubtitle>{t("Would be an advantage")}:</StyledVacancySubtitle>


            <StyledVacancyText>{t("Project Manager.line9")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line10")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line11")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line12")}</StyledVacancyText>

            <StyledVacancySubtitle>{t("Responsibilities")}:</StyledVacancySubtitle>

            <StyledVacancyText>{t("Project Manager.line13")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line14")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line15")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line16")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line17")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line18")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line19")}</StyledVacancyText>
            <StyledVacancyText>{t("Project Manager.line20")}</StyledVacancyText>
          </StyledVacancy>
          <StyledVacancy>
            <StyledVacancyTitle>ORACLE DBA</StyledVacancyTitle>
            <StyledVacancySubtitle>{t("Needed")}:</StyledVacancySubtitle>
            <StyledVacancyText>{t("ORACLE DBA.line1")}</StyledVacancyText>
            <StyledVacancyText>{t("ORACLE DBA.line2")}</StyledVacancyText>
            <StyledVacancyText>{t("ORACLE DBA.line3")}</StyledVacancyText>
            <StyledVacancyText>{t("ORACLE DBA.line4")}</StyledVacancyText>
            <StyledVacancyText>{t("ORACLE DBA.line5")}</StyledVacancyText>
            <StyledVacancyText>{t("ORACLE DBA.line6")}</StyledVacancyText>

            <StyledVacancySubtitle>{t("Would be an advantage")}:</StyledVacancySubtitle>

            <StyledVacancyText>{t("ORACLE DBA.line7")}</StyledVacancyText>
            <StyledVacancyText>{t("ORACLE DBA.line8")}</StyledVacancyText>
            <StyledVacancyText>{t("ORACLE DBA.line9")}</StyledVacancyText>


          </StyledVacancy>
        </StyledGrid>
      </StyledBackground>
    )
  }
}

export default translate("Vacancies")(Vacancies)
