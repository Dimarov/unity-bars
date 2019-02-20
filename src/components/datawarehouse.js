import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import office from '../images/fix/office.jpg'
import bg from '../images/fix/products.jpg'
import dwhMac from '../images/fix/dwh_mac.png'
import dwhLogoSVG from '../images/fix/dwh_logo.png'
import macCanDataware from '../images/fix/dwh_mac_can.png'
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
  font-size: 2.8rem;
  font-weight: 400;
  color: #fff;


`

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;


`

const StyledParagraphText = styled.div`
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

const StyledTitleBlackColor = styled.div`
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

const StyledThereIsWillBeImage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  text-align: center;
  background-color: red;
  height: 32rem;
  // font-weight: 400;
  color: #000;
  margin: 4rem 0 3rem 0;
`

const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`

const StyledHeaderTitle = styled.div`
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

class Datawarehouse extends React.Component {

  render() {
    const { t } = this.props

    return (
      <StyledBackground>
        <StyledHeader>
          <Container>
            <StyledTitle>Datawarehouse</StyledTitle>

            <StyledHeaderTitle>{t("Description")}</StyledHeaderTitle>
          </Container>
        </StyledHeader>

        <Container>
          <DwhMac src={dwhMac} alt='dwhMacMockup'/>
          <StyledParagraphText>
            {t("Line1")}
          </StyledParagraphText>
          <br/>
          <StyledParagraphText>
            {t("Line2")}
          </StyledParagraphText>
          <DownloadForm />

          <StyledTitleBlackColor>{t("Components.Title")}</StyledTitleBlackColor>

          <StyledParagraphText>{t("Components.Line1")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line2")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line3")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line4")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line5")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line6")}</StyledParagraphText>
          <DwhLogo src={dwhLogoSVG} alt='logo'/>
          <StyledParagraphText>
            {t("Components.Line7")}
          </StyledParagraphText>
          <br/>
          <StyledParagraphText>{t("Components.Line8")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line9")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line10")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line11")}</StyledParagraphText>
          <StyledParagraphText>{t("Components.Line12")}</StyledParagraphText>

          <DwhMacCan src={macCanDataware} alt='datawareMacMockup'/>

          <StyledTitleBlackColor>{t("Capabilities.Title")}</StyledTitleBlackColor>

          <StyledParagraphText>{t("Capabilities.Line1")}</StyledParagraphText>
          <StyledParagraphText>{t("Capabilities.Line2")}</StyledParagraphText>
          <StyledParagraphText>{t("Capabilities.Line3")}</StyledParagraphText>
          <StyledParagraphText>{t("Capabilities.Line4")}</StyledParagraphText>
          <StyledParagraphText>{t("Capabilities.Line5")}</StyledParagraphText>
          <StyledParagraphText>{t("Capabilities.Line6")}</StyledParagraphText>
          <StyledTestMargin/>
        </Container>
      </StyledBackground>
    )
  }
}

export default translate("Datawarehouse")(Datawarehouse)
