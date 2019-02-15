import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import office from '../images/fix/office3.jpg'
import bg from "../images/products.jpg"
import { translate } from 'react-i18next'
import one from "../images/news/news1.jpg"
import two from "../images/news/news2.jpg"
import three from "../images/news/news3.jpg"
import four from "../images/news/news4.jpg"
import five from "../images/news/news5.jpg"
import six from "../images/news/news6.jpg"


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
`

const StyledHeader = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${office});
  background-position: bottom;
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

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
`

const StyledGrid = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: .5rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
`

const StyledNews = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .3s ease-in-out;
  cursor: pointer;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
    filter: grayscale(100);

    :hover {
      background: #fafafa;
      filter: grayscale(0);
    }
  }
`
const StyledNewsPhoto = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: .125rem;
  width: 100%;
  height: 20rem;
  transition: all .3s ease-in-out;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {

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
  width: 18rem;
  transition: all .3s ease-in-out;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 24rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`

class News extends React.Component {

  render() {
    const { t } = this.props

    return(
      <StyledBackground>
        <StyledHeader>
          <Container>
            <StyledTitle>{t("News")}</StyledTitle>
            <StyledSubtitle>{t("Latest news in UNITY-BARS")}</StyledSubtitle>
          </Container>
        </StyledHeader>
        <StyledGrid>

          <StyledNews>
            <StyledLink to="news-1">
              <StyledNewsPhoto image={one}></StyledNewsPhoto>
              <StyledNewsTitle>{t("FirstPostTitle")}</StyledNewsTitle>

              <StyledNewsDate>12.02.2019</StyledNewsDate>
            </StyledLink>
          </StyledNews>


          <StyledNews>
            <StyledLink to="news-2">
              <StyledNewsPhoto image={two}></StyledNewsPhoto>
              <StyledNewsTitle>{t("SecondPostTitle")}</StyledNewsTitle>

              <StyledNewsDate>23.08.2018</StyledNewsDate>
            </StyledLink>
          </StyledNews>



          <StyledNews>
            <StyledLink to="news-3">
              <StyledNewsPhoto image={three}></StyledNewsPhoto>
              <StyledNewsTitle>{t("ThirdPostTitle")}</StyledNewsTitle>

              <StyledNewsDate>16.05.2018</StyledNewsDate>
            </StyledLink>
          </StyledNews>


          <StyledNews>
            <StyledLink to="news-4">
              <StyledNewsPhoto image={four}></StyledNewsPhoto>
              <StyledNewsTitle>{t("FourthPostTitle")}</StyledNewsTitle>

              <StyledNewsDate>16.03.2018</StyledNewsDate>
            </StyledLink>
          </StyledNews>


          <StyledNews>
            <StyledLink to="news-5">
              <StyledNewsPhoto image={five}></StyledNewsPhoto>
              <StyledNewsTitle>{t("FifthPostTitle")}</StyledNewsTitle>
              <StyledNewsDate>03.03.2018</StyledNewsDate>
            </StyledLink>
          </StyledNews>


          <StyledNews>
            <StyledLink to="news-6">
              <StyledNewsPhoto image={six}></StyledNewsPhoto>
              <StyledNewsTitle>{t("SixthPostTitle")}</StyledNewsTitle>
              <StyledNewsDate>21.11.2017</StyledNewsDate>
            </StyledLink>
          </StyledNews>

        </StyledGrid>
      </StyledBackground>
    )
  }
}

export default translate("News")(News)
