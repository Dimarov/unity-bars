import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'

import office from '../images/fix/office.jpg'
import abs from '../images/fix/abs_mac.png'
import absr from '../images/fix/abs_r.png'

import DownloadForm from './download-form'

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

const DownloadLink = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3ec4e1;
  margin: 0.5rem 0;
  text-decoration: none;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const ParagraphText = styled.div`
  font-family: myriad-pro, sans-serif;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 200;
  color: #000;

  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
  }
`

const TitleBlackColor = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
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
  color: #000;
  margin: 4rem 0 3rem 0;
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

const HeaderSubTitleHuge = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  line-height: 32px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 2rem;
`

const HeaderTitle = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  color: #000;
  line-height: 2.5rem;
  font-weight: 400;
  margin: 5rem 0 3rem 0;

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
  border: 0.0625rem solid #000;
  padding: 0.5rem;
  margin: 1rem 0 0;

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
  border: 0.0625rem solid #000;
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
  border: 0.0625rem solid #000;
  padding: 0.5rem;
  text-align: center;
  background: ${props => (props.heading ? '#e1e1e1' : 'none')};

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`

class Absbars extends React.Component {
  render() {
    const { t } = this.props

    return (
      <Background>
        <Header>
          <Container>
            <Title>ABS BARS | Core Banking System</Title>
            <HeaderSubTitleHuge>{t('Description')}</HeaderSubTitleHuge>
          </Container>
        </Header>
        <ImageContainer>
          <AbsImage src={abs} alt="abs-mockup" />
        </ImageContainer>

        <Container>
          <HeaderTitle>{t('Capabilities.Title')}</HeaderTitle>
          <HeaderTitleParagraph>{t('Capabilities.Line1')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line2')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line3')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line4')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line5')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line6')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line7')}</HeaderTitleParagraph>
          <br />
          <br />
          <HeaderTitleParagraph>{t('Capabilities.Line8')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line9')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line10')}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line11')}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line12')}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line13')}
          </HeaderTitleParagraph>
          <DownloadForm pdfFile="ABS-BARS.pdf" pdfURL="/documents/ABS-BARS.pdf" pageURL="/absbars/" />
        </Container>
        <Container>
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
                <TableColumn>{t("Table.Col4")}</TableColumn>
                <TableColumn>{t("Table.Col5")}</TableColumn>
                <TableColumn>
                  {t("Table.Col6")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col7")}</TableColumn>
                <TableColumn>{t("Table.Col8")}</TableColumn>
                <TableColumn>
                  {t("Table.Col9")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col10")}</TableColumn>
                <TableColumn>{t("Table.Col11")}</TableColumn>
                <TableColumn>
                  {t("Table.Col12")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col13")}</TableColumn>
                <TableColumn>{t("Table.Col14")}</TableColumn>
                <TableColumn>
                  {t("Table.Col15")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col16")}</TableColumn>
                <TableColumn>{t("Table.Col17")}</TableColumn>
                <TableColumn>
                  {t("Table.Col18")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col19")}</TableColumn>
                <TableColumn>{t("Table.Col20")}</TableColumn>
                <TableColumn>
                  {t("Table.Col21")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col22")}</TableColumn>
                <TableColumn>{t("Table.Col23")}</TableColumn>
                <TableColumn>
                  {t("Table.Col24")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col25")}</TableColumn>
                <TableColumn>{t("Table.Col26")}</TableColumn>
                <TableColumn>
                  {t("Table.Col27")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col28")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col29")}</TableColumn>
                <TableColumn>
                  {t("Table.Col30")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col31")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col32")}</TableColumn>
                <TableColumn>{t("Table.Col33")}</TableColumn>
                <TableColumn>
                  {t("Table.Col34")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col35")}</TableColumn>
                <TableColumn>{t("Table.Col36")}</TableColumn>
                <TableColumn>
                  {t("Table.Col37")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col38")}</TableColumn>
                <TableColumn>{t("Table.Col39")}</TableColumn>
                <TableColumn>
                  {t("Table.Col40")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col41")}</TableColumn>
                <TableColumn>{t("Table.Col42")}</TableColumn>
                <TableColumn>
                  {t("Table.Col43")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col44")}</TableColumn>
                <TableColumn>{t("Table.Col45")}</TableColumn>
                <TableColumn>
                  {t("Table.Col46")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col47")}</TableColumn>
                <TableColumn>{t("Table.Col48")}</TableColumn>
                <TableColumn>
                  {t("Table.Col49")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col50")}</TableColumn>
                <TableColumn>{t("Table.Col51")}</TableColumn>
                <TableColumn>
                  {t("Table.Col52")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col53")}</TableColumn>
                <TableColumn>{t("Table.Col54")}</TableColumn>
                <TableColumn>
                  {t("Table.Col55")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col56")}</TableColumn>
                <TableColumn>{t("Table.Col57")}</TableColumn>
                <TableColumn>{t("Table.Col58")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col59")}</TableColumn>
                <TableColumn>
                  {t("Table.Col60")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col61")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col62")}</TableColumn>
                <TableColumn>{t("Table.Col63")}</TableColumn>
                <TableColumn>
                  {t("Table.Col64")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col65")}</TableColumn>
                <TableColumn>{t("Table.Col66")}</TableColumn>
                <TableColumn>
                  {t("Table.Col67")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col68")}</TableColumn>
                <TableColumn>{t("Table.Col69")}</TableColumn>
                <TableColumn>
                  {t("Table.Col70")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col71")}</TableColumn>
                <TableColumn>{t("Table.Col72")}</TableColumn>
                <TableColumn>
                  {t("Table.Col73")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col74")}</TableColumn>
                <TableColumn>{t("Table.Col75")}</TableColumn>
                <TableColumn>
                  {t("Table.Col76")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col77")}</TableColumn>
                <TableColumn>{t("Table.Col78")}</TableColumn>
                <TableColumn>
                  {t("Table.Col79")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col80")}</TableColumn>
                <TableColumn>{t("Table.Col81")}</TableColumn>
                <TableColumn>{t("Table.Col82")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col83")}</TableColumn>
                <TableColumn>{t("Table.Col84")}</TableColumn>
                <TableColumn>
                  {t("Table.Col85")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col86")}</TableColumn>
                <TableColumn>
                  {t("Table.Col87")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col88")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col89")}</TableColumn>
                <TableColumn>{t("Table.Col90")}</TableColumn>
                <TableColumn>
                  {t("Table.Col91")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col92")}</TableColumn>
                <TableColumn>
                  {t("Table.Col93")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col94")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col95")}</TableColumn>
                <TableColumn>{t("Table.Col96")}</TableColumn>
                <TableColumn>
                  {t("Table.Col97")}      
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col98")}</TableColumn>
                <TableColumn>{t("Table.Col99")}</TableColumn>
                <TableColumn>
                  {t("Table.Col100")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col101")}</TableColumn>
                <TableColumn>
                  {t("Table.Col102")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col103")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col104")}</TableColumn>
                <TableColumn>{t("Table.Col105")}</TableColumn>
                <TableColumn>
                  {t("Table.Col106")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col107")}</TableColumn>
                <TableColumn>{t("Table.Col108")}</TableColumn>
                <TableColumn>
                  {t("Table.Col109")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col110")}</TableColumn>
                <TableColumn>{t("Table.Col111")}</TableColumn>
                <TableColumn>
                  {t("Table.Col112")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col113")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col114")}</TableColumn>
                <TableColumn>{t("Table.Col115")}</TableColumn>
                <TableColumn>
                  {t("Table.Col116")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col117")}</TableColumn>
                <TableColumn>{t("Table.Col118")}</TableColumn>
                <TableColumn>
                  {t("Table.Col119")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col120")}</TableColumn>
                <TableColumn>{t("Table.Col121")}</TableColumn>
                <TableColumn />
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col122")}</TableColumn>
                <TableColumn>{t("Table.Col123")}</TableColumn>
                <TableColumn>
                  {t("Table.Col124")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col125")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col126")}</TableColumn>
                <TableColumn>{t("Table.Col127")}</TableColumn>
                <TableColumn>{t("Table.Col128")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col129")}</TableColumn>
                <TableColumn>{t("Table.Col130")}</TableColumn>
                <TableColumn>
                  {t("Table.Col131")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col132")}</TableColumn>
                <TableColumn>{t("Table.Col133")}</TableColumn>
                <TableColumn>{t("Table.Col134")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col135")}</TableColumn>
                <TableColumn>
                  {t("Table.Col136")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col137")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col138")}</TableColumn>
                <TableColumn>{t("Table.Col139")}</TableColumn>
                <TableColumn>
                  {t("Table.Col140")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col141")}</TableColumn>
                <TableColumn>{t("Table.Col142")}</TableColumn>
                <TableColumn>
                  {t("Table.Col143")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col144")}</TableColumn>
                <TableColumn>
                  {t("Table.Col145")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col146")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col147")}</TableColumn>
                <TableColumn>{t("Table.Col148")}</TableColumn>
                <TableColumn>{t("Table.Col149")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col150")}</TableColumn>
                <TableColumn>{t("Table.Col151")}</TableColumn>
                <TableColumn>
                  {t("Table.Col152")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col153")}</TableColumn>
                <TableColumn>
                  {t("Table.Col154")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col155")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col156")}</TableColumn>
                <TableColumn>{t("Table.Col157")}</TableColumn>
                <TableColumn>{t("Table.Col158")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col159")}</TableColumn>
                <TableColumn>{t("Table.Col160")}</TableColumn>
                <TableColumn>
                  {t("Table.Col161")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col162")}</TableColumn>
                <TableColumn>{t("Table.Col163")}</TableColumn>
                <TableColumn>
                  {t("Table.Col164")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col165")}</TableColumn>
                <TableColumn>
                  {t("Table.Col166")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col167")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col168")}</TableColumn>
                <TableColumn>{t("Table.Col169")}</TableColumn>
                <TableColumn>
                  {t("Table.Col170")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col171")}</TableColumn>
                <TableColumn>{t("Table.Col172")}</TableColumn>
                <TableColumn>
                  {t("Table.Col173")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn />
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
                <TableColumn>{t("Table.Col181")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col182")}</TableColumn>
                <TableColumn>
                  {t("Table.Col183")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col184")}
                </TableColumn>
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
                <TableColumn>{t("Table.Col189")}</TableColumn>
                <TableColumn>
                  {t("Table.Col190")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col191")}</TableColumn>
                <TableColumn>
                  {t("Table.Col192")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col193")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col194")}</TableColumn>
                <TableColumn>{t("Table.Col195")}</TableColumn>
                <TableColumn>
                  {t("Table.Col196")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col197")}</TableColumn>
                <TableColumn>{t("Table.Col198")}</TableColumn>
                <TableColumn>{t("Table.Col199")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col200")}</TableColumn>
                <TableColumn>{t("Table.Col201")}</TableColumn>
                <TableColumn>
                  {t("Table.Col202")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col203")}</TableColumn>
                <TableColumn>
                  {t("Table.Col204")}
                </TableColumn>
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
                <TableColumn>{t("Table.Col210")}</TableColumn>
                <TableColumn>{t("Table.Col211")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col212")}</TableColumn>
                <TableColumn>{t("Table.Col213")}</TableColumn>
                <TableColumn>{t("Table.Col214")}</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col215")}</TableColumn>
                <TableColumn>
                  {t("Table.Col216")}
                </TableColumn>
                <TableColumn>
                  {t("Table.Col217")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  {t("Table.Col218")}
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>{t("Table.Col219")}</TableColumn>
                <TableColumn>{t("Table.Col220")}</TableColumn>
                <TableColumn>
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
            </TableBody>
          </Table>
        </Container>
        <ImageContainer>
          <AbsImage src={absr} alt="abs-mockup" />
        </ImageContainer>
        <Container>
          <HeaderTitleParagraph>{t('Line1')}</HeaderTitleParagraph>
          <HeaderTitleParagraph>{t('Line2')}</HeaderTitleParagraph>
          <HeaderTitleParagraph>{t('Line3')}</HeaderTitleParagraph>
          <TestMargin />
        </Container>
      </Background>
    )
  }
}

export default translate('Absbars')(Absbars)
