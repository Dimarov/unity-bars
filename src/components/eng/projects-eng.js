import React from 'react'
import styled from "styled-components"

import bg from "../../images/products.jpg"

import bankid from "../../images/projects/bankid.png"
import prozorro from "../../images/projects/prozorro.png"
import edata from "../../images/projects/edata.png"
import eauction from "../../images/projects/eauction.png"

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
  background-image: url(${bg});
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

const ProjectTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
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

const Projects = (props) => (
  <Background>
    <Header>
      <Container>
        <Title>Projects</Title>
        <Subtitle>Unity-Bars takes part in the latest projects of Ukraine</Subtitle>
      </Container>
    </Header>
    <Grid>
      <Project>
        <ProjectPhoto image={bankid} />
        <ProjectInfo>
          <ProjectTitle>BANKID</ProjectTitle>
          <ProjectSubtitle>
            The method of electronic identification of citizens via Ukrainian banks for the provision of administrative services via the Internet
          </ProjectSubtitle>
          <ProjectText>
            Reliable and user-friendly verification of the user through its own Internet banking on the administrative services portals. As of today, at Oschadbank landfill, a working copy of the BankID system with a full cycle of data is deployed (taking into account the receipt of data on the client from the banking database by the number of the bank card). At present, the system is expected to connect to the SMS provider (it is currently connected to the test mode), after which the site will be launched in the pilot operation on the portal of the Lviv City Council, the Personal Cabinet of Lviv. BankID Oschadbank button will be available in the interface of the site, whereby users will be able to log in to the system and provide help and access from an accessible list of information. Also open access to the GitHub resource, provides up-to-date schemes and documentation on the BankID system with the ability to comment and edit.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={prozorro} />
        <ProjectInfo>
          <ProjectTitle>Prozorro</ProjectTitle>
          <ProjectSubtitle>
            System reform of the tender process in electronic public and public procurement
          </ProjectSubtitle>
          <ProjectText>
            Public procurement reform can be considered an example of successful change in the country. The goal of the reform is based on a significant reduction in corruption during public procurement, maximizing efficiency and saving. Successful implementation of the project should restore business confidence to the state and encourage it to participate in state tenders. The main principle of the ProZorro system is "everyone sees everything." Now, one can find out who and how they buy for taxpayers money. An average citizen can track what exactly the district policlinic or school purchases to which its children go.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={edata} />
        <ProjectInfo>
          <ProjectTitle>E-DATA</ProjectTitle>
          <ProjectSubtitle>
            The only web portal for using public funds is the official state information resource on the Internet, in which information is published in accordance with the Law "On the openness of the use of public funds"
          </ProjectSubtitle>
          <ProjectText>
            Access to the information published on a single web-portal for using public funds is free and free of charge, which provides an opportunity to satisfy public interest in the control, creation, distribution and use of public funds by managers and recipients of the State Budget of Ukraine, the budget of the Autonomous Republic of Crimea and local budgets, bodies of the Pension Fund, enterprises, as well as funds of compulsory state social insurance.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={eauction} />
        <ProjectInfo>
          <ProjectTitle>EAUCTION</ProjectTitle>
          <ProjectSubtitle>
            Automated system of conducting electronic auctions for rent and sale of state property
          </ProjectSubtitle>
          <ProjectText>
            After the Revolution of Dignity in Ukrainian society there were great hopes for a radical transformation of the country. New global technological changes and prospects for European integration open up new opportunities for Ukrainians, which we are obliged to use. In parallel, Ukraine fights on two fronts: against the military aggression on the part of the Russian Federation and against the corruption that depletes the country. One of the main areas where corruption is flourishing are the sale and lease of state property, as well as other rights through "paper" auctions. It negatively affects the development of business and, in general, the economy, and the state loses huge money. International experience shows that the transition from "paper", closed procedures to open online systems improves the efficiency of the state administration and replenishes the state budget by 15-20%, while the use of distributed systems (Blockchain) minimizes the manipulation of officials, creating a positive financial and moral effect. The e-Auction 3.0 implementation will create transparent conditions for state auctions at all levels and will make it impossible to exist corruption in this area. UNITY-BARS joins the goal of effective and rapid reform, implementation and development of relevant mechanisms!
          </ProjectText>
        </ProjectInfo>
      </Project>
    </Grid>
  </Background>
)

export default Projects
