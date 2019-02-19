import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"
import { translate } from 'react-i18next'
import four from "../../images/news/news4.jpg"


const StyledBackground = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 0;
`

const StyledHeader = styled.div`
  width: 100%;
  height: 24rem;
  background-image: url(${four});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 8rem 1rem;
  filter: brightness(.4);
`


const StyledNews = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  transition: all .3s ease-in-out;
  cursor: pointer;
  padding: 4rem 2rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    min-height: 32rem;
  }
`

const StyledNewsTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem;
  color: #000;
  transition: all .3s ease-in-out;
`

const StyledNewsText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem;
  color: #1A1A1A;
  transition: all .3s ease-in-out;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {

  }
`

const StyledNewsDate = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem;
  transition: all .3s ease-in-out;
`

class News4 extends React.Component {

  render() {
    const { t } = this.props

    return (
      <StyledBackground>
        <StyledHeader>
        </StyledHeader>
        <Container>
          <StyledNews>
            <StyledNewsTitle>{t("FourthPostTitle")}</StyledNewsTitle>
            <StyledNewsText>
              {t("Fourth.Line1")} <br />
              {t("Fourth.Line2")} <br />
              {t("Fourth.Line3")} <br />
              {t("Fourth.Line4")} <br />
              {t("Fourth.Line5")} <br />
              <br />
              {t("Fourth.Line6")} <br />
              {t("Fourth.Line7")} <br />
              {t("Fourth.Line8")} <br />
              {t("Fourth.Line9")} <br />
              {t("Fourth.Line10")} <br />
            </StyledNewsText>
            <StyledNewsDate>23.08.2018</StyledNewsDate>
          </StyledNews>
        </Container>
      </StyledBackground>
    )
  }
}

export default translate("News")(News4)
