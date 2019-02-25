import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'

import DownloadForm from './download-form'

import office from '../images/fix/office.jpg'
import dwhMac from '../images/fix/dwh_mac.png'
import dwhLogoSVG from '../images/fix/dwh_logo.png'
import macCanDataware from '../images/fix/dwh_mac_can.png'


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
  font-size: 2.8rem;
  font-weight: 400;
  color: #fff;


`

const Subtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;


`

const ParagraphText = styled.div`
  font-family: myriad-pro, sans-serif;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  opacity: .8;
  color: #000;

  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
  }
`

const TitleBlackColor = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: #000;
  margin: 4rem 0 3rem 0;

  @media screen and (max-width: 60rem) {
   margin: 0.5rem;
  }
`

const ThereIsWillBeImage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  text-align: center;
  background-color: red;
  height: 32rem;
  // font-weight: 400;
  color: #000;
  margin: 4rem 0 3rem 0;
`

const TestMargin = styled.div`
  margin-bottom: 7rem;
`

const HeaderTitle = styled.div`
font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: white;
  line-height: 3rem;
  margin-bottom: 1rem;
`

const DwhMac = styled.img`
  margin-top: 2.5rem;
  height: 16rem;
  width: auto;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin-top: 3rem;
    height: 30rem;
    text-align: center;
  }
`

const DwhLogo = styled.img`
  margin-top: 1rem;
  height: 13rem;
  width: auto;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin-top: 3rem;
    height: 30rem;
    text-align: center;
  }
`

const DwhMacCan = styled.img`
margin-top: 3.2rem;
  height: 16rem;
  width: auto;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin-top: 3rem;
    height: 30rem;
    text-align: center;
  }
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

class Datawarehouse extends React.Component {

  render() {
    const { t } = this.props

    return (
      <Background>
        <Header>
          <Container>
            <Title>Datawarehouse</Title>

            <HeaderTitle>{t("Description")}</HeaderTitle>
          </Container>
        </Header>

        <Container>
          <DwhMac src={dwhMac} alt='dwhMacMockup'/>
          <ParagraphText>
            {t("Line1")}
          </ParagraphText>
          <br/>
          <ParagraphText>
            {t("Line2")}
          </ParagraphText>
          <DownloadForm pdfFile="DATAWAREHOUSE.pdf" pdfURL="/documents/DATAWAREHOUSE.pdf" pageURL="/datawarehouse/"/>

          <TitleBlackColor>{t("Components.Title")}</TitleBlackColor>

          <ParagraphText>{t("Components.Line1")}</ParagraphText>
          <ParagraphText>{t("Components.Line2")}</ParagraphText>
          <ParagraphText>{t("Components.Line3")}</ParagraphText>
          <ParagraphText>{t("Components.Line4")}</ParagraphText>
          <ParagraphText>{t("Components.Line5")}</ParagraphText>
          <ParagraphText>{t("Components.Line6")}</ParagraphText>
          <DwhLogo src={dwhLogoSVG} alt='logo'/>
          <ParagraphText>
            {t("Components.Line7")}
          </ParagraphText>
          <br/>
          <ParagraphText>{t("Components.Line8")}</ParagraphText>
          <ParagraphText>{t("Components.Line9")}</ParagraphText>
          <ParagraphText>{t("Components.Line10")}</ParagraphText>
          <ParagraphText>{t("Components.Line11")}</ParagraphText>
          <ParagraphText>{t("Components.Line12")}</ParagraphText>

          <DwhMacCan src={macCanDataware} alt='datawareMacMockup'/>

          <TitleBlackColor>{t("Capabilities.Title")}</TitleBlackColor>

          <ParagraphText>{t("Capabilities.Line1")}</ParagraphText>
          <ParagraphText>{t("Capabilities.Line2")}</ParagraphText>
          <ParagraphText>{t("Capabilities.Line3")}</ParagraphText>
          <ParagraphText>{t("Capabilities.Line4")}</ParagraphText>
          <ParagraphText>{t("Capabilities.Line5")}</ParagraphText>
          <ParagraphText>{t("Capabilities.Line6")}</ParagraphText>
          <TestMargin/>
        </Container>
      </Background>
    )
  }
}

export default translate("Datawarehouse")(Datawarehouse)
