import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import office from '../images/fix/office.jpg'
import bg from '../images/fix/products.jpg'
import eaMac from '../images/fix/ea_mac.png'
import eaModules from '../images/fix/ea_moduls.png'
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
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
`

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 20px;
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
  }
`

const StyledHeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  line-height: 30px;
  color: #000;
  opacity: .8;
  font-weight: 400;
  margin: 0 0 1.3rem 0;

  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
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

const EaMac = styled.img`
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

const EaMacModules = styled.img`
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

class Electronicarchive extends React.Component {

  render() {
    const { t } = this.props

    return (
      <StyledBackground>
        <StyledHeader>
          <Container>
            <StyledTitle>Electronic archive</StyledTitle>
            <StyledSubtitle>
              {t("Description")}
            </StyledSubtitle>
          </Container>
        </StyledHeader>

        <Container>
          <EaMac src={eaMac} alt="eaMac"/>

          <StyledHeaderTitle>{t("Functionality.Title")}</StyledHeaderTitle>
          <StyledHeaderTitleParagraph>
            {t("Functionality.Line1")}
          </StyledHeaderTitleParagraph>
          {/**/}
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

          <StyledHeaderTitleParagraph>
            {t("Functionality.Line6")}
          </StyledHeaderTitleParagraph>

          <StyledHeaderTitleParagraph>
            {t("Functionality.Line7")}
          </StyledHeaderTitleParagraph>
          <DownloadForm />

          <EaMacModules src={eaModules} alt='modulesOfEa'/>

          <StyledTestMargin/>

        </Container>
      </StyledBackground>
    )
  }
}

export default translate("Electronicarchive")(Electronicarchive)
