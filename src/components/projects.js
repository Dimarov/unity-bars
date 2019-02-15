import React from 'react'
import styled from "styled-components"
import { translate } from 'react-i18next'
import bg from "../images/products.jpg"
import office from '../images/fix/office4.jpg'
import bankid from "../images/projects/bankid.png"
import prozorro from "../images/projects/prozorro.png"
import edata from "../images/projects/edata.png"
import eauction from "../images/projects/eauction.png"

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
  background-image: url(${office});
  background-size: cover;
  background-attachment: fixed;
  padding: 8rem 1rem;
`

const Title = styled.h1`
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

const Grid = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Project = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #F0F0F0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 2rem 0;
  margin-bottom: 1.5rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 20rem;
    padding: 1rem;
  }
`

const ProjectPhoto = styled.div`
  height: 6rem;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  flex: 0 0 100%;
  margin: 1rem 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 16rem;
    flex: 0 0 20%;
  }
`

 const ProjectInfo = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex: 0 0 80%;
  }
 `

const ProjectTitle = styled.a`
  text-decoration: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: 1rem 2rem .5rem;
  cursor: pointer;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
  }
`

const ProjectSubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #1A1A1A;
  opacity: .8;
  margin: .5rem 2rem .5rem;
`

const ProjectText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #1A1A1A;
  margin: .25rem 2rem;
  opacity: .6;
`

class Projects extends React.Component {

  render() {
    const { t } = this.props

    return(
      <Background>
        <Header>
          <Container>
            <Title>{t("Projects")}</Title>
            <Subtitle>{t("UNITY-BARS takes part in the latest projects in Ukraine")}</Subtitle>
          </Container>
        </Header>
        <Grid>
          <Project>
            <ProjectPhoto image={bankid} />
            <ProjectInfo>
              <ProjectTitle href="https://id.bank.gov.ua/" >BANKID</ProjectTitle>
              <ProjectSubtitle>
                {t("FirstTitle")}
              </ProjectSubtitle>
              <ProjectText>
                {t("FirstDescription")}
              </ProjectText>
            </ProjectInfo>
          </Project>
          <Project>
            <ProjectPhoto image={prozorro} />
            <ProjectInfo>
              <ProjectTitle href="https://prozorro.gov.ua/">Prozorro</ProjectTitle>
              <ProjectSubtitle>
                {t("SecondTitle")}
              </ProjectSubtitle>
              <ProjectText>
                {t("SecondDescription")}
              </ProjectText>
            </ProjectInfo>
          </Project>
          <Project>
            <ProjectPhoto image={edata} />
            <ProjectInfo>
              <ProjectTitle href="https://e-data.gov.ua/">E-DATA</ProjectTitle>
              <ProjectSubtitle>
                {t("ThirdTitle")}
              </ProjectSubtitle>
              <ProjectText>
                {t("ThirdDescription")}
            </ProjectInfo>
          </Project>
          <Project>
            <ProjectPhoto image={eauction} />
            <ProjectInfo>
              <ProjectTitle href="https://www.eauction.idf.solutions/">EAUCTION</ProjectTitle>
              <ProjectSubtitle>
                {t("FourthTitle")}
              </ProjectSubtitle>
              <ProjectText>
                {t("FourthDescription")}
              </ProjectText>
            </ProjectInfo>
          </Project>
        </Grid>
      </Background>
    )
  }
}

export default translate("Projects")(Projects)
