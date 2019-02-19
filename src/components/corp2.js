import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import office from '../images/fix/office.jpg'
import bg from '../images/fix/products.jpg'
import corpSignIn from '../images/fix/corp2_sign-in.png'
import oshad from '../images/fix/oshadbank1_1_corp.png'
import dksu from '../images/fix/dksy1_1_corp.png'
import rozrah from '../images/fix/rozrahynkovuicenter1_1_corp.png'
import corpMac2 from '../images/fix/corp2_mac_can.png'
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
  padding: 0 2rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
  padding: 0rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
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

const StyledTitleBlack = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #000;
  margin: 5rem 0 5rem 0;

  @media screen and (max-width: 60rem) {
    margin: 5rem 0 5rem 0rem;
  }
`

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
`

const StyledSubtitleWhite = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 3rem;
  color: #fff;
  margin: 3rem 0 3rem 0;
`

const StyledHeaderTitle = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  color: #000;
  line-height: 2.5rem;
  font-weight: 200;
  margin: 5rem 0 3rem 0;

  @media screen and (max-width: 60rem) {

  }
`

const StyledHeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  color: #000;
  line-height: 30px;
  font-weight: 400;
  margin: 0 0 1.3rem 0;
  opacity: .8;

  @media screen and (max-width: 60rem) {

  }
`

const StyledThereIsWillBeImage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  text-align: center;
  background-color: red;
  height: 32rem;
  color: #000;
  margin: 4rem 0 3rem 0;
`

const ImageContainers = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex-direction: row;
  }
`

const StyledThreeImagesBlock = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  height: 3rem;
  margin: 2rem;
  color: #000;
`

const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`


const CorpSignInImg = styled.img`
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

const UsedByCorpServicesOshad = styled.img`
  height: 6rem;
`
const UsedByCorpServicesDKSU = styled.img`
height: 6rem;
`
const UsedByCorpServicesRozrah = styled.img`
height: 6rem;
`

const MacImg2 = styled.img`
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


class Corp2 extends React.Component {

  render() {
    const { t } = this.props

    return (
      <StyledBackground>
        <StyledHeader>
          <Container>
            <StyledTitle>CORP 2</StyledTitle>
            <StyledSubtitleWhite>{t("Corporate Online Banking")}</StyledSubtitleWhite>
          </Container>
        </StyledHeader>
        <ImageContainer>
          <CorpSignInImg src={corpSignIn} alt="corp-mockup-signin"/>
        </ImageContainer>
        <Container>


          <StyledHeaderTitleParagraph>{t("Description")}</StyledHeaderTitleParagraph>
          <DownloadForm />

          <StyledTitleBlack>{t("Used")}</StyledTitleBlack>

          <ImageContainers>
            <StyledThreeImagesBlock>
              <UsedByCorpServicesOshad src={oshad} alt='oshad'/>
            </StyledThreeImagesBlock>
            <StyledThreeImagesBlock>
              <UsedByCorpServicesDKSU src={dksu} alt='oshad'/>
            </StyledThreeImagesBlock>
            <StyledThreeImagesBlock>
              <UsedByCorpServicesRozrah src={rozrah} alt='oshad'/>
            </StyledThreeImagesBlock>
          </ImageContainers>

          <StyledTitleBlack>
            {t("Capabilities.Title")}
          </StyledTitleBlack>

          <StyledHeaderTitleParagraph>{t("Capabilities.Line1")}</StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>{t("Capabilities.Line2")}</StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>{t("Capabilities.Line3")}</StyledHeaderTitleParagraph>

        </Container>
        <ImageContainer>
          <MacImg2 src={corpMac2} alt="macImg"/>
        </ImageContainer>
        <Container>

          <StyledTitleBlack>{t("Customization.Title")}</StyledTitleBlack>

          <StyledHeaderTitleParagraph>{t("Customization.Line1")}</StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>{t("Customization.Line2")}</StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>{t("Customization.Line3")}</StyledHeaderTitleParagraph>

          <StyledHeaderTitleParagraph>
            {t("Customization.Line4")}
          </StyledHeaderTitleParagraph>

          <StyledTitleBlack>{t("Authentification.Title")}</StyledTitleBlack>

          <StyledHeaderTitleParagraph>
            {t("Authentification.Line1")}
          </StyledHeaderTitleParagraph>

          <StyledHeaderTitleParagraph>
            {t("Authentification.Line2")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Authentification.Line3")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Authentification.Line4")}
          </StyledHeaderTitleParagraph>
          <StyledHeaderTitleParagraph>
            {t("Authentification.Line5")}
          </StyledHeaderTitleParagraph>
          <StyledTestMargin/>
        </Container>
      </StyledBackground>
    )
  }
}

export default translate("Corp2")(Corp2)
