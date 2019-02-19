import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"
import { translate } from 'react-i18next'
import two from "../../images/news/news2.jpg"


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
  background-image: url(${two});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(.4);
  padding: 8rem 1rem;
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

class News2 extends React.Component {

  render() {
    const { t } = this.props

    return (
      <StyledBackground>
        <StyledHeader>
        </StyledHeader>
        <Container>
          <StyledNews>
            <StyledNewsTitle>{t("SecondPostTitle")}</StyledNewsTitle>
            <StyledNewsText>{t("Second.Line1")}</StyledNewsText>
            <StyledNewsDate>23.08.2018</StyledNewsDate>
          </StyledNews>
        </Container>
      </StyledBackground>
    )
  }
}

export default translate("News")(News2)
