import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import office from '../images/fix/office.jpg'
import bg from '../images/fix/products.jpg'
import DownloadForm from './download-form'
import { translate } from 'react-i18next'


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

const StyledDownloadLink = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: .5rem 0;
  text-decoration: none;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
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

const StyledHeaderTitle = styled.div`

  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  color: #000;
  line-height: 2.5rem;
  font-weight: 400;
  margin: 5rem 0 3rem 0;

  @media screen and (max-width: 60rem) {
   margin: 0.5rem;
   margin-top: 2.5rem;
  }
`

const StyledHeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  color: #000;
  font-weight: 400;
  margin: 0 0 1.3rem 0;
  opacity: .8;

  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
  }
`
const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`

class Creditmodule extends React.Component {

  render() {
    const { t } = this.props

    return (
      <StyledBackground>
        <StyledHeader>
          <Container>
            <StyledTitle>Creditmodule</StyledTitle>
            <StyledSubtitle>
              {t("Description")}
            </StyledSubtitle>
          </Container>
        </StyledHeader>

        <Container>
          <StyledHeaderTitle>{t("Functionality.Title")}</StyledHeaderTitle>
          <StyledHeaderTitleParagraph>
            {t("Functionality.Line1")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Functionality.Line2")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Functionality.Line3")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Functionality.Line4")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Functionality.Line5")}
          </StyledHeaderTitleParagraph>
          <DownloadForm />

          <StyledHeaderTitle>{t("Specialties.Title")}</StyledHeaderTitle>
          <StyledHeaderTitleParagraph>
            {t("Specialties.Line1")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Specialties.Line2")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Specialties.Line3")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Specialties.Line4")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Specialties.Line5")}
          </StyledHeaderTitleParagraph>


          <StyledHeaderTitle>{t("Capabilities.Title")}</StyledHeaderTitle>
          <StyledHeaderTitleParagraph>
            {t("Capabilities.Line1")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Capabilities.Line2")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Capabilities.Line3")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Capabilities.Line4")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Capabilities.Line5")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Capabilities.Line6")}
          </StyledHeaderTitleParagraph>
          <StyledTestMargin/>
        </Container>
      </StyledBackground>
    )
  } 
}

export default translate("Creditmodule")(Creditmodule)
