import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'

import DownloadForm from './download-form'

import office from '../images/fix/office.jpg'

const Background = styled.div`
  width: 100%;
  height: auto;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
`

const DownloadLink = styled.a`
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

const Header = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${office});
  background-size: cover;
  background-attachment: fixed;
  padding: 8rem 1rem;
`

const Title = styled.h2`
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

const HeaderTitle = styled.div`

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

const HeaderTitleParagraph = styled.div`
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
const TestMargin = styled.div`
  margin-bottom: 7rem;
`

class Creditmodule extends React.Component {

  render() {
    const { t } = this.props

    return (
      <Background>
        <Header>
          <Container>
            <Title>Creditmodule</Title>
            <Subtitle>
              {t("Description")}
            </Subtitle>
          </Container>
        </Header>

        <Container>
          <HeaderTitle>{t("Functionality.Title")}</HeaderTitle>
          <HeaderTitleParagraph>
            {t("Functionality.Line1")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Functionality.Line2")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Functionality.Line3")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Functionality.Line4")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Functionality.Line5")}
          </HeaderTitleParagraph>
          <DownloadForm pdfFile="CREDITMODULE.pdf" pdfURL="/documents/CREDITMODULE.pdf" pageURL="/creditmodule"/>

          <HeaderTitle>{t("Specialties.Title")}</HeaderTitle>
          <HeaderTitleParagraph>
            {t("Specialties.Line1")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Specialties.Line2")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Specialties.Line3")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Specialties.Line4")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Specialties.Line5")}
          </HeaderTitleParagraph>


          <HeaderTitle>{t("Capabilities.Title")}</HeaderTitle>
          <HeaderTitleParagraph>
            {t("Capabilities.Line1")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Capabilities.Line2")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Capabilities.Line3")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Capabilities.Line4")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Capabilities.Line5")}
          </HeaderTitleParagraph>
          <HeaderTitleParagraph>
            {t("Capabilities.Line6")}
          </HeaderTitleParagraph>
          <TestMargin/>
        </Container>
      </Background>
    )
  } 
}

export default translate("Creditmodule")(Creditmodule)
