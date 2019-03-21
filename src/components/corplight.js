import React from 'react'
import styled from "styled-components"
import { translate } from 'react-i18next'

import DownloadForm from './download-form'


import header from "../images/mockups/corplight-pixels.png"
import about from "../images/mockups/corplight-iphone-2.png"
import security from "../images/mockups/corplight-iphone-3.png"
import banking from "../images/icons/banking.svg"
import functionality from "../images/icons/functionality.svg"
import design from "../images/icons/design.svg"

const Background = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: #FEFEFE;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem;
  max-width: 960px;
  margin: 0 auto;
`

const Header = styled.div`
  width: 100%;
  height: 56rem;
  padding-top: 28rem;

  @media (min-width: 40rem) {
    height: 80rem;
    padding-top: 48rem;
  }

  @media (min-width: 80rem) {
    height: 60rem;
    padding-top: 12rem;
  }
`

const Title = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  font-weight: 600;
  color: #303030;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 8rem;
  }
`

const Span = styled.span`
  color: #3EC4E1;
`

const Subtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 2rem 0;
  color: rgba(48,48,48,.8);

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
    margin: 4rem 0;
    width: 32rem;
    line-height: 2rem;
  }
`

const Text = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem 0;
  color: #3EC4E1;
  opacity: .8;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
    margin: 2rem 0;
    font-weight: 300;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin: .5rem 0;
  justify-content: space-evenly;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 1rem 0;
    justify-content: flex-start;
  }
`

const Button = styled.a`
  text-align: center;
  text-decoration: none;
  outline: none;
  border: .125rem solid #303030;
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : "#303030"};
  padding: .3rem 1.25rem;
  margin: 0 .25rem;
  font-size: .75rem;
  font-family: myriad-pro, sans-serif;
  font-weight: 400;
  color: ${props => props.outline ? "#303030" : "#FEFEFE"};
  cursor: pointer;
  transition: all .3s ease-out;
  z-index: 9000;

  :focus,
  :hover {
    background: ${props => props.outline ? "#303030" : "none"};
    color: ${props => props.outline ? "#FEFEFE" : "#303030"};
  }

  :active {
    transform: translateY(.0625rem);
  }

  @media (min-width: 40rem) {
    padding: .8rem 3rem;
    margin: 0 1rem 0 0;
    font-size: 1.25rem;
  }

  @media (min-width: 80rem) {
    padding: .8rem 3rem;
    margin: 0 1rem 0 0;
    font-size: 1.25rem;
  }
`

const HeaderImage = styled.img`
  position: absolute;
  top: 0rem;
  right: 0;
  width: 47rem;
  
  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {

  }
`

const AboutContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  justify-content: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 30rem;
    height: 40rem;
  }
`

const AboutImage = styled.img`
  height: 20rem;
  width: auto;

  @media (min-width: 40rem) {
    width: 10rem;
    height: auto;
  }

  @media (min-width: 80rem) {
    width: 20rem;
    height: auto;
  }
`

const InfoContainer = styled.div`
  width: 100%;
  padding: 0rem;
  box-sizing: border-box;
  height: auto;
  margin: 4rem 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 36rem;
    height: auto;
    padding: 0 0 0 2rem;
  }
`

const InfoTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  padding: 1rem 2rem;
  background: #3EC4E1;
  width: 100%;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
  }
`

const InfoElementContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const InfoElement = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-content: center;
`

const InfoElementIcon = styled.div`
  flex: 0 0 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoElementIconImage = styled.img`

`

const InfoElementDescription = styled.div`
  height: auto;
  margin-left: 1rem;
`

const InfoElementDescriptionTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #29333E;
  margin: .5rem 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const InfoElementDescriptionText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  color: rgba(41,51,62,.8);

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const FunctionalityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const FunctionalityTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color: #303030;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
    margin: 2rem 0;
  }
`

const FunctionalityTitleSpan = styled.span`
  color: #3EC4E1;
`

const FunctionalitySubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  color: #303030;
  opacity: .8;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
  }
`

const FunctionalityParagraph = styled.p `
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: .5rem 0;
  color: #303030;
  opacity: .6;
  padding-bottom: .5rem;
  border-bottom: .0625rem solid #303030;

  :last-of-type {
    border: none;
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 1rem 0;
    padding-bottom: 1rem;
  }
`

const SecurityContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const SecurityInfoContainer = styled.div`
  margin: 4rem 0;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  height: auto;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 36rem;
    height: 40rem;
    padding: 0;
  }
`

const SecurityInfoTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  padding: 1rem 2rem;
  background: #3EC4E1;
  width: 100%;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
  }
`

const SecurityInfoParagraph = styled.p `
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: .5rem 0;
  color: #303030;
  opacity: .8;
  padding-bottom: .5rem;
  border-bottom: .0625rem solid #303030;

  :last-of-type {
    border: none;
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 1rem 0;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

const SecurityImage = styled.img`
  height: 20rem;
  width: auto;
  position: absolute;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 40rem;
  }
`

const DownloadContainer = styled.div`
  width: 100%;
  margin: 0 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const DownloadTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #303030;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 3rem;
    margin: 1rem 0;
  }
`

const DownloadSubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: #303030;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`

class Corplight extends React.Component {

  render() {
    const { t } = this.props

    return (
      <Background>
        <Header>
          <Container>
            <HeaderImage src={header} alt="header-mockup" />
            <Title>CorpLight <Span>{t("Oschadbank")}</Span></Title>
            <Text>{t("for SME")}</Text>
            <Subtitle>{t("Online banking products and services control system")}</Subtitle>
            <ButtonContainer>
              <Button target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/ru/app/corplight-osadbank/id1120169675?mt=8" >App Store</Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.unitybars.corplight.oschadbank" >Google Play</Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://cl.oschadbank.ua/auth/logon"  outline >Web Demo</Button>
            </ButtonContainer>
          </Container>
        </Header>
        <Container>
          <AboutContainer>
            <ImageContainer>
              <AboutImage src={about} alt="about-mockup" />
            </ImageContainer>
            <InfoContainer>
              <InfoTitle>{t("Capabilities.Title")}</InfoTitle>
              <InfoElementContainer>
                <InfoElement>
                  <InfoElementIcon>
                    <InfoElementIconImage src={banking} alt="banking-icon" />
                  </InfoElementIcon>
                  <InfoElementDescription>
                    <InfoElementDescriptionTitle>{t("Capabilities.Line1")}</InfoElementDescriptionTitle>
                    <InfoElementDescriptionText>{t("Capabilities.Line2")}</InfoElementDescriptionText>
                  </InfoElementDescription>
                </InfoElement>
                <InfoElement>
                  <InfoElementIcon>
                    <InfoElementIconImage src={functionality} alt="functionality-icon" />
                  </InfoElementIcon>
                  <InfoElementDescription>
                    <InfoElementDescriptionTitle>{t("Capabilities.Line3")}</InfoElementDescriptionTitle>
                    <InfoElementDescriptionText>{t("Capabilities.Line4")}</InfoElementDescriptionText>
                  </InfoElementDescription>
                </InfoElement>
                <InfoElement>
                  <InfoElementIcon>
                    <InfoElementIconImage src={design} alt="design-icon" />
                  </InfoElementIcon>
                  <InfoElementDescription>
                    <InfoElementDescriptionTitle>{t("Capabilities.Line5")}</InfoElementDescriptionTitle>
                    <InfoElementDescriptionText>{t("Capabilities.Line6")}</InfoElementDescriptionText>
                  </InfoElementDescription>
                </InfoElement>
                <InfoElement>
                  <DownloadForm pdfFile="CORPLIGHT.pdf" pdfURL="/documents/CORPLIGHT.pdf" pageURL="/corplight/" />
                </InfoElement>
              </InfoElementContainer>
            </InfoContainer>
            
          </AboutContainer>
          
          <FunctionalityContainer>

            <FunctionalityTitle>{t("Functionality.Title")} <FunctionalityTitleSpan>CorpLight</FunctionalityTitleSpan></FunctionalityTitle>
            <div>
              <FunctionalitySubtitle>{t("Functionality.Subtitle")}</FunctionalitySubtitle>
              <FunctionalityParagraph>{t("Functionality.Line1")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line2")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line3")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line4")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line5")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line6")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line7")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line8")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line9")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line10")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line11")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line12")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line13")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line14")}</FunctionalityParagraph>
            </div>
            <div>
              <FunctionalitySubtitle>{t("Functionality.Subtitle2")}</FunctionalitySubtitle>
              <FunctionalityParagraph>{t("Functionality.Line15")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line16")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line17")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line18")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line19")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line20")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line21")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line22")}</FunctionalityParagraph>
            </div>
            <div>
              <FunctionalitySubtitle>{t("Functionality.Subtitle3")}</FunctionalitySubtitle>
              <FunctionalityParagraph>{t("Functionality.Line23")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line24")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line25")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line26")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line27")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line28")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line29")}</FunctionalityParagraph>
            </div>
            {/* <div>
              <FunctionalitySubtitle>{t("Functionality.Subtitle4")}</FunctionalitySubtitle>
              <FunctionalityParagraph>{t("Functionality.Line30")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line31")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line32")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line33")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line34")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line35")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line36")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line37")}</FunctionalityParagraph>
              <FunctionalityParagraph>{t("Functionality.Line38")}</FunctionalityParagraph>
            </div> */}
          </FunctionalityContainer>
          <SecurityContainer>
            <SecurityInfoContainer>
              <SecurityInfoTitle>{t("Security.Title")}</SecurityInfoTitle>
              <SecurityInfoParagraph>{t("Security.Line1")}</SecurityInfoParagraph>
              <SecurityInfoParagraph>{t("Security.Line2")}</SecurityInfoParagraph>
              <SecurityInfoParagraph>{t("Security.Line3")}</SecurityInfoParagraph>
              <SecurityInfoParagraph>{t("Security.Line4")}</SecurityInfoParagraph>
              <SecurityInfoParagraph>{t("Security.Line5")}</SecurityInfoParagraph>
            </SecurityInfoContainer>

            <ImageContainer>
              <SecurityImage src={security} alt="security-mockup" />
            </ImageContainer>
          </SecurityContainer>
          <DownloadContainer>
            <DownloadTitle>{t("Download")}</DownloadTitle>
            <DownloadSubtitle>{t("Try Web")}</DownloadSubtitle>

            <ButtonContainer>
              <Button target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/ru/app/corplight-osadbank/id1120169675?mt=8" >App Store</Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.unitybars.corplight.oschadbank" >Google Play</Button>
              <Button target="_blank" rel="noopener noreferrer" href="https://cl.oschadbank.ua/auth/logon"  outline >Web Demo</Button>
            </ButtonContainer>
          </DownloadContainer>
        </Container>
      </Background>
    )
  }
}

export default translate("Corplight")(Corplight)
