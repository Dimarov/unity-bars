import React from 'react'
import styled from "styled-components"
import { translate } from 'react-i18next'

import office from '../images/fix/office4.jpg'
import officemobile from '../images/fix/office4mobile.jpg'

import one from "../images/clients/1.jpg"
import two from "../images/clients/2.jpg"
import three from "../images/clients/3.jpg"
import four from "../images/clients/4.jpg"
import five from "../images/clients/5.jpg"
import six from "../images/clients/6.jpg"
import seven from "../images/clients/7.jpg"
import eight from "../images/clients/8.jpg"
import nine from "../images/clients/9.jpg"
import ten from "../images/clients/10.jpg"
import eleven from "../images/clients/11.jpg"
import twelve from "../images/clients/12.jpg"
import onep from "../images/partners/1.jpg"
import twop from "../images/partners/2.jpg"
import threep from "../images/partners/3.jpg"
import fourp from "../images/partners/4.jpg"
import fivep from "../images/partners/5.jpg"
import sixp from "../images/partners/6.jpg"
import sevenp from "../images/partners/7.jpg"
import eightp from "../images/partners/8.jpg"
import ninep from "../images/partners/9.jpg"
import tenp from "../images/partners/10.jpg"
import elevenp from "../images/partners/11.jpg"
import twelvep from "../images/partners/12.jpg"
import onee from "../images/employees/1.jpg"
import twoe from "../images/employees/2.jpg"
import threee from "../images/employees/3.jpg"
import foure from "../images/employees/4.jpg"
import fivee from "../images/employees/5.jpg"
import sixe from "../images/employees/6.jpg"
import sevene from "../images/employees/7.jpg"
import eighte from "../images/employees/8.jpg"
import ninee from "../images/employees/9.jpg"
import tene from "../images/employees/10.jpg"
import elevene from "../images/employees/11.jpg"
import twelvee from "../images/employees/12.jpg"
import thirteene from "../images/employees/13.jpg"
import fourteene from "../images/employees/14.jpg"
import fifteene from "../images/employees/15.jpg"
import sixteene from "../images/employees/16.jpg"
import seventeene from "../images/employees/17.jpg"
import eighteene from "../images/employees/18.jpg"
import nineteene from "../images/employees/19.jpg"
import twentye from "../images/employees/20.jpg"
import twentyonee from "../images/employees/21.jpg"
import twentytwoe from "../images/employees/22.jpg"
import twentythreee from "../images/employees/23.jpg"
import twentyfoure from "../images/employees/24.jpg"
import twentyfivee from "../images/employees/25.jpg"
import twentysixee from "../images/employees/26.jpg"

const Background = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
  }
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

const Title = styled.h1`
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

const Topic = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 200;
  margin: 2rem 0;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  grid-gap: 1rem .5rem;
  justify-items: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 3rem 1rem;
  }
`

const SecondGrid = styled.div`
  height: 60rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: .125rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: .125rem;
  }
`

const Client = styled.div`
  height: 100%;
  width: 100%;
  background: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(.95);
  transition: all .2s ease-in;
  object-fit: cover;


  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    :hover {
      filter: brightness(1);
    }
  }
`

const Image = styled.img`
  height: 3rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 4rem;
  }
`

const Partner = styled.div`
  height: 100%;
  width: 100%;
  background: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(.95);
  transition: all .2s ease-in;


  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    :hover {
      filter: brightness(1);
    }
  }
`

const Person = styled.div`
  width: 100%;
  height: 100%;
  border-radius: .125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all .1s ease-out;



  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    align-items: baseline;
    :hover {
      transform: translateY(-.125rem);
    }
  }
`

const PersonPhoto = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-image: url(${props => props.person});
  background-size: cover;
  background-position: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 10rem;
    height: 10rem;
  }
`

const PersonName = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
  }
`

const PersonPosition = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 200;
  margin: .5rem 0;
  color: #37B3FF;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    text-align: left;
  }
`

class Company extends React.Component {

  render() {
    const { t } = this.props

    return(
      <Background>
        <Header>
          <Container>
            <Title>{t("Company")}</Title>
            <Subtitle>
              {t("UNITY BARS is a leading Ukrainian company specializing in the implementation of efficient and up-to-date software for banks and financial institutions")}
            </Subtitle>
          </Container>
        </Header>
        <Container>
          <Topic>{t("Our Team")}</Topic>
          <hr />
          <Grid>
            <Person>
              <PersonPhoto person={onee}></PersonPhoto>
              <PersonName>{t("Team.Name1")}</PersonName>
              <PersonPosition>{t("Team.Position1")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twoe}></PersonPhoto>
              <PersonName>{t("Team.Name2")}</PersonName>
              <PersonPosition>{t("Team.Position2")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={threee}></PersonPhoto>
              <PersonName>{t("Team.Name3")}</PersonName>
              <PersonPosition>{t("Team.Position3")}</PersonPosition>
            </Person>
                        <Person>
              <PersonPhoto person={foure}></PersonPhoto>
              <PersonName>{t("Team.Name4")}</PersonName>
              <PersonPosition>{t("Team.Position4")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={fivee}></PersonPhoto>
              <PersonName>{t("Team.Name5")}</PersonName>
              <PersonPosition>{t("Team.Position5")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={sixe}></PersonPhoto>
              <PersonName>{t("Team.Name6")}</PersonName>
              <PersonPosition>{t("Team.Position6")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={sevene}></PersonPhoto>
              <PersonName>{t("Team.Name7")}</PersonName>
              <PersonPosition>{t("Team.Position7")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={eighte}></PersonPhoto>
              <PersonName>{t("Team.Name8")}</PersonName>
              <PersonPosition>{t("Team.Position8")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={ninee}></PersonPhoto>
              <PersonName>{t("Team.Name9")}</PersonName>
              <PersonPosition>{t("Team.Position9")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={tene}></PersonPhoto>
              <PersonName>{t("Team.Name10")}</PersonName>
              <PersonPosition>{t("Team.Position10")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={elevene}></PersonPhoto>
              <PersonName>{t("Team.Name11")}</PersonName>
              <PersonPosition>{t("Team.Position11")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twelvee}></PersonPhoto>
              <PersonName>{t("Team.Name12")}</PersonName>
              <PersonPosition>{t("Team.Position12")}</PersonPosition>
            </Person>
                        <Person>
              <PersonPhoto person={thirteene}></PersonPhoto>
              <PersonName>{t("Team.Name13")}</PersonName>
              <PersonPosition>{t("Team.Position13")}</PersonPosition>
            </Person>
                        <Person>
              <PersonPhoto person={fourteene}></PersonPhoto>
              <PersonName>{t("Team.Name14")}</PersonName>
              <PersonPosition>{t("Team.Position14")}</PersonPosition>
            </Person>
                        <Person>
              <PersonPhoto person={fifteene}></PersonPhoto>
              <PersonName>{t("Team.Name15")}</PersonName>
              <PersonPosition>{t("Team.Position15")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={sixteene}></PersonPhoto>
              <PersonName>{t("Team.Name16")}</PersonName>
              <PersonPosition>{t("Team.Position16")}</PersonPosition>
            </Person>
                        <Person>
              <PersonPhoto person={seventeene}></PersonPhoto>
              <PersonName>{t("Team.Name17")}</PersonName>
              <PersonPosition>{t("Team.Position17")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={eighteene}></PersonPhoto>
              <PersonName>{t("Team.Name18")}</PersonName>
              <PersonPosition>{t("Team.Position18")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={nineteene}></PersonPhoto>
              <PersonName>{t("Team.Name19")}</PersonName>
              <PersonPosition>{t("Team.Position19")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twentye}></PersonPhoto>
              <PersonName>{t("Team.Name20")}</PersonName>
              <PersonPosition>{t("Team.Position20")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twentyonee}></PersonPhoto>
              <PersonName>{t("Team.Name21")}</PersonName>
              <PersonPosition>{t("Team.Position21")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twentytwoe}></PersonPhoto>
              <PersonName>{t("Team.Name22")}</PersonName>
              <PersonPosition>{t("Team.Position22")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twentythreee}></PersonPhoto>
              <PersonName>{t("Team.Name23")}</PersonName>
              <PersonPosition>{t("Team.Position23")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twentyfoure}></PersonPhoto>
              <PersonName>{t("Team.Name24")}</PersonName>
              <PersonPosition>{t("Team.Position24")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twentyfivee}></PersonPhoto>
              <PersonName>{t("Team.Name25")}</PersonName>
              <PersonPosition>{t("Team.Position25")}</PersonPosition>
            </Person>
            <Person>
              <PersonPhoto person={twentysixee}></PersonPhoto>
              <PersonName>{t("Team.Name26")}</PersonName>
              <PersonPosition>{t("Team.Position26")}</PersonPosition>
            </Person>
          </Grid>
          <Topic>{t("Clients and partners")}</Topic>
          <hr />
          <SecondGrid>
            <Client>
              <Image src={one} />
            </Client>
            <Client>
              <Image src={two} />
            </Client>
            <Client>
              <Image src={three} />
            </Client>
            <Client>
              <Image src={four} />
            </Client>
            <Client>
              <Image src={five} />
            </Client>
            <Client>
              <Image src={six} />
            </Client>
            <Client>
              <Image src={seven} />
            </Client>
            <Client>
              <Image src={eight} />
            </Client>
            <Client>
              <Image src={nine} />
            </Client>
            <Client>
              <Image src={ten} />
            </Client>
            <Client>
              <Image src={eleven} />
            </Client>
            <Client>
              <Image src={twelve} />
            </Client>
          </SecondGrid>
          <br />
          <SecondGrid>
            <Partner>
              <Image src={onep} />
            </Partner>
            <Partner>
              <Image src={twop} />
            </Partner>
            <Partner>
              <Image src={threep} />
            </Partner>
            <Partner>
              <Image src={fourp} />
            </Partner>
            <Partner>
              <Image src={fivep} />
            </Partner>
            <Partner>
              <Image src={sixp} />
            </Partner>
            <Partner>
              <Image src={sevenp} />
            </Partner>
            <Partner>
              <Image src={eightp} />
            </Partner>
            <Partner>
              <Image src={ninep} />
            </Partner>
            <Partner>
              <Image src={tenp} />
            </Partner>
            <Partner>
              <Image src={elevenp} />
            </Partner>
            <Partner>
              <Image src={twelvep} />
            </Partner>
          </SecondGrid>
          <br />
        </Container>
      </Background>
    )
  }
}

export default translate("Company")(Company)
