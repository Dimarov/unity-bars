import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import DownloadForm from './download-form'

import office from '../images/fix/office.jpg'
import officemobile from '../images/fix/officemobile.jpg'
import abs from '../images/fix/abs_mac.png'


const Background = styled.div`
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

const Title = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
`

const Subtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;
  line-height: 2rem;
`

const HeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  color: #000;
  font-weight: 400;
  margin: 0 0 1.3rem 0;
  opacity: 0.8;

  @media screen and (max-width: 60rem) {
    margin: 1rem 0;
  }
`

const HeaderTitle = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  color: #000;
  font-weight: 500;
  margin: 4rem 0 2rem 0;

  @media screen and (max-width: 60rem) {
    margin: 0.5rem 0;
  }
`


const TestMargin = styled.div`
  margin-bottom: 7rem;
`

const AbsImage = styled.img`
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

const Table = styled.table`
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0 0;
  border: none;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    padding: 1rem;
  }
`

const TableBody = styled.tbody`
  width: 100%;
`

const TableRow = styled.tr`
  font-family: myriad-pro, sans-serif;
  font-size: 0.75rem;
  color: #000;
  font-weight: 400;
  opacity: 0.6;
  padding: 0.5rem;
  text-align: center;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`

const TableColumn = styled.td`
  border: 0.0625rem solid #e1e1e1;
  padding: 0 !important;
  text-align: center;
  background: ${props => (props.heading ? '#e1e1e1' : 'none')};
  border-radius: .125rem;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    font-weight: 500;
    padding: 1.5rem 3rem !important;
    text-align: left;
    border: none;
    border-bottom: 0.0625rem solid #e1e1e1;
  }
`

class Barsmmfo extends React.Component {

  render() {
    const { t } = this.props

    return (
      <Background>
        <Header>
          <Container>
            <Title>BARS MMFO | Core Banking System</Title>
            <Subtitle>
              {t("Description")}
            </Subtitle>
          </Container>
        </Header>
        <ImageContainer>
          <AbsImage src={abs} alt="abs-mockup"/>
        </ImageContainer>
        <Container>

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

          <HeaderTitleParagraph>
            {t("Capabilities.Line7")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line8")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line9")}
          </HeaderTitleParagraph>
          
          <HeaderTitleParagraph>
            {t("Capabilities.Line10")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line11")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line12")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line13")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line14")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line15")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line16")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line17")}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t("Capabilities.Line18")}
          </HeaderTitleParagraph>

          <DownloadForm pdfFile="BARS-MMFO.pdf" pdfURL="/documents/BARS-MMFO.pdf" pageURL="/barsmmfo/" />
          <Table>
            <TableBody>
              <TableRow>
                <TableColumn>{t("Table.Col1")}</TableColumn>
                <TableColumn>{t("Table.Col2")}</TableColumn>
                <TableColumn>{t("Table.Col3")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col4")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col5")}</TableColumn>
                <TableColumn>{t("Table.Col6")}</TableColumn>
                <TableColumn>
                  {t("Table.Col7")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col8")}</TableColumn>
                <TableColumn>{t("Table.Col9")}</TableColumn>
                <TableColumn>
                  {t("Table.Col10")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col11")}</TableColumn>
                <TableColumn>{t("Table.Col12")}</TableColumn>
                <TableColumn>
                  {t("Table.Col13")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col14")}</TableColumn>
                <TableColumn>{t("Table.Col15")}</TableColumn>
                <TableColumn>
                  {t("Table.Col16")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col17")}</TableColumn>
                <TableColumn>{t("Table.Col18")}</TableColumn>
                <TableColumn>
                  {t("Table.Col19")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col20")}</TableColumn>
                <TableColumn>{t("Table.Col21")}</TableColumn>
                <TableColumn>
                  {t("Table.Col22")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col23")}</TableColumn>
                <TableColumn>{t("Table.Col24")}</TableColumn>
                <TableColumn>
                  {t("Table.Col25")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col26")}</TableColumn>
                <TableColumn>{t("Table.Col27")}</TableColumn>
                <TableColumn>
                  {t("Table.Col28")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col29")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col30")}</TableColumn>
                <TableColumn>
                  {t("Table.Col31")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col32")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col33")}</TableColumn>
                <TableColumn>{t("Table.Col34")}</TableColumn>
                <TableColumn>
                  {t("Table.Col35")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col36")}</TableColumn>
                <TableColumn>{t("Table.Col37")}</TableColumn>
                <TableColumn>
                  {t("Table.Col38")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col39")}</TableColumn>
                <TableColumn>{t("Table.Col40")}</TableColumn>
                <TableColumn>
                  {t("Table.Col41")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col42")}</TableColumn>
                <TableColumn>{t("Table.Col43")}</TableColumn>
                <TableColumn>
                  {t("Table.Col44")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col45")}</TableColumn>
                <TableColumn>{t("Table.Col46")}</TableColumn>
                <TableColumn>
                  {t("Table.Col47")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col48")}</TableColumn>
                <TableColumn>{t("Table.Col49")}</TableColumn>
                <TableColumn>
                  {t("Table.Col50")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col51")}</TableColumn>
                <TableColumn>{t("Table.Col52")}</TableColumn>
                <TableColumn>
                  {t("Table.Col53")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col54")}</TableColumn>
                <TableColumn>{t("Table.Col55")}</TableColumn>
                <TableColumn>
                  {t("Table.Col56")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col57")}</TableColumn>
                <TableColumn>{t("Table.Col58")}</TableColumn>
                <TableColumn>{t("Table.Col59")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col60")}</TableColumn>
                <TableColumn>
                  {t("Table.Col61")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col62")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col63")}</TableColumn>
                <TableColumn>{t("Table.Col64")}</TableColumn>
                <TableColumn>
                  {t("Table.Col65")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col66")}</TableColumn>
                <TableColumn>{t("Table.Col67")}</TableColumn>
                <TableColumn>
                  {t("Table.Col68")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col69")}</TableColumn>
                <TableColumn>{t("Table.Col70")}</TableColumn>
                <TableColumn>
                  {t("Table.Col71")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col72")}</TableColumn>
                <TableColumn>{t("Table.Col73")}</TableColumn>
                <TableColumn>
                  {t("Table.Col74")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col75")}</TableColumn>
                <TableColumn>{t("Table.Col76")}</TableColumn>
                <TableColumn>
                  {t("Table.Col77")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col78")}</TableColumn>
                <TableColumn>{t("Table.Col79")}</TableColumn>
                <TableColumn>
                  {t("Table.Col80")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col81")}</TableColumn>
                <TableColumn>{t("Table.Col82")}</TableColumn>
                <TableColumn>{t("Table.Col83")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col84")}</TableColumn>
                <TableColumn>{t("Table.Col85")}</TableColumn>
                <TableColumn>
                  {t("Table.Col86")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col87")}</TableColumn>
                <TableColumn>
                  {t("Table.Col88")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col89")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col90")}</TableColumn>
                <TableColumn>{t("Table.Col91")}</TableColumn>
                <TableColumn>
                  {t("Table.Col92")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col93")}</TableColumn>
                <TableColumn>
                  {t("Table.Col94")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col95")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col96")}</TableColumn>
                <TableColumn>{t("Table.Col97")}</TableColumn>
                <TableColumn>
                  {t("Table.Col98")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col99")}</TableColumn>
                <TableColumn>{t("Table.Col100")}</TableColumn>
                <TableColumn>
                  {t("Table.Col101")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col102")}</TableColumn>
                <TableColumn>
                  {t("Table.Col103")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col104")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col105")}</TableColumn>
                <TableColumn>{t("Table.Col106")}</TableColumn>
                <TableColumn>
                  {t("Table.Col107")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col108")}</TableColumn>
                <TableColumn>{t("Table.Col109")}</TableColumn>
                <TableColumn>
                  {t("Table.Col110")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col111")}</TableColumn>
                <TableColumn>{t("Table.Col112")}</TableColumn>
                <TableColumn>
                  {t("Table.Col113")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col114")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col115")}</TableColumn>
                <TableColumn>{t("Table.Col116")}</TableColumn>
                <TableColumn>
                  {t("Table.Col117")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col118")}</TableColumn>
                <TableColumn>{t("Table.Col119")}</TableColumn>
                <TableColumn>
                  {t("Table.Col120")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col121")}</TableColumn>
                <TableColumn>{t("Table.Col122")}</TableColumn>
                <TableColumn>{t("TableCol123")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col124")}</TableColumn>
                <TableColumn>{t("Table.Col125")}</TableColumn>
                <TableColumn>
                  {t("Table.Col126")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col127")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col128")}</TableColumn>
                <TableColumn>{t("Table.Col129")}</TableColumn>
                <TableColumn>{t("Table.Col130")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col131")}</TableColumn>
                <TableColumn>{t("Table.Col132")}</TableColumn>
                <TableColumn>
                  {t("Table.Col133")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col134")}</TableColumn>
                <TableColumn>{t("Table.Col135")}</TableColumn>
                <TableColumn>{t("Table.Col136")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col137")}</TableColumn>
                <TableColumn>
                  {t("Table.Col138")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col139")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col140")}</TableColumn>
                <TableColumn>{t("Table.Col141")}</TableColumn>
                <TableColumn>
                  {t("Table.Col142")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col143")}</TableColumn>
                <TableColumn>{t("Table.Col144")}</TableColumn>
                <TableColumn>
                  {t("Table.Col145")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col146")}</TableColumn>
                <TableColumn>
                  {t("Table.Col147")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col148")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col149")}</TableColumn>
                <TableColumn>{t("Table.Col150")}</TableColumn>
                <TableColumn>{t("Table.Col151")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col152")}</TableColumn>
                <TableColumn>{t("Table.Col153")}</TableColumn>
                <TableColumn>
                  {t("Table.Col154")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col155")}</TableColumn>
                <TableColumn>
                  {t("Table.Col156")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col157")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col158")}</TableColumn>
                <TableColumn>{t("Table.Col159")}</TableColumn>
                <TableColumn>{t("Table.Col160")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col161")}</TableColumn>
                <TableColumn>{t("Table.Col162")}</TableColumn>
                <TableColumn>
                  {t("Table.Col163")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col164")}</TableColumn>
                <TableColumn>{t("Table.Col165")}</TableColumn>
                <TableColumn>
                  {t("Table.Col166")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col167")}</TableColumn>
                <TableColumn>
                  {t("Table.Col168")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col169")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col170")}</TableColumn>
                <TableColumn>{t("Table.Col171")}</TableColumn>
                <TableColumn>
                  {t("Table.Col172")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col173")}</TableColumn>
                <TableColumn>{t("Table.Col174")}</TableColumn>
                <TableColumn>
                  {t("Table.Col175")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col176")}</TableColumn>
                <TableColumn>{t("Table.Col177")}</TableColumn>
                <TableColumn>
                  {t("Table.Col178")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col179")}</TableColumn>
                <TableColumn>{t("Table.Col180")}</TableColumn>
                <TableColumn>
                  {t("Table.Col181")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col182")}</TableColumn>
                <TableColumn>{t("Table.Col183")}</TableColumn>
                <TableColumn>{t("Table.Col184")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col185")}</TableColumn>
                <TableColumn>
                  {t("Table.Col186")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col187")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col188")}</TableColumn>
                <TableColumn>
                  {t("Table.Col189")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col190")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col191")}</TableColumn>
                <TableColumn>{t("Table.Col192")}</TableColumn>
                <TableColumn>
                  {t("Table.Col193")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col194")}</TableColumn>
                <TableColumn>
                  {t("Table.Col195")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col196")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col197")}</TableColumn>
                <TableColumn>{t("Table.Col198")}</TableColumn>
                <TableColumn>
                  {t("Table.Col199")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col200")}</TableColumn>
                <TableColumn>{t("Table.Col201")}</TableColumn>
                <TableColumn>{t("Table.Col202")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col203")}</TableColumn>
                <TableColumn>{t("Table.Col204")}</TableColumn>
                <TableColumn>
                  {t("Table.Col205")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col206")}</TableColumn>
                <TableColumn>
                  {t("Table.Col207")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col208")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col209")}</TableColumn>
                <TableColumn>
                  {t("Table.Col210")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col211")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col212")}</TableColumn>
                <TableColumn>{t("Table.Col213")}</TableColumn>
                <TableColumn>{t("Table.Col214")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col215")}</TableColumn>
                <TableColumn>{t("Table.Col216")}</TableColumn>
                <TableColumn>{t("Table.Col217")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col218")}</TableColumn>
                <TableColumn>
                  {t("Table.Col219")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col220")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col221")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col222")}</TableColumn>
                <TableColumn>{t("Table.Col223")}</TableColumn>
                <TableColumn>
                  {t("Table.Col224")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col225")}</TableColumn>
                <TableColumn>{t("Table.Col226")}</TableColumn>
                <TableColumn>
                  {t("Table.Col227")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col228")}</TableColumn>
                <TableColumn>{t("Table.Col229")}</TableColumn>
                <TableColumn>
                  {t("Table.Col230")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col231")}</TableColumn>
                <TableColumn>{t("Table.Col232")}</TableColumn>
                <TableColumn>
                  {t("Table.Col233")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col234")}</TableColumn>
                <TableColumn>{t("Table.Col235")}</TableColumn>
                <TableColumn>
                  {t("Table.Col236")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col237")}</TableColumn>
                <TableColumn>{t("Table.Col238")}</TableColumn>
                <TableColumn>
                  {t("Table.Col239")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col240")}</TableColumn>
                <TableColumn>{t("Table.Col241")}</TableColumn>
                <TableColumn>
                  {t("Table.Col242")}
                </TableColumn>
              </TableRow>
            </TableBody>
          </Table>

          <TestMargin/>
        </Container>
      </Background>
    )
  }
}

export default translate("Barsmmfo")(Barsmmfo)
