import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import office from '../images/fix/office3.jpg'
import officemobile from '../images/fix/office3mobile.jpg'
import { translate } from 'react-i18next'
import one from "../images/news/news1.jpg"
import two from "../images/news/news2.jpg"
import three from "../images/news/news3.jpg"
import four from "../images/news/news4.jpg"
import five from "../images/news/news5.jpg"
import six from "../images/news/news6.jpg"


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
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
`

const Grid = styled.div`
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

const NewsBlock = styled.div`
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
const NewsPhoto = styled.div`
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

const NewsTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem;
  color: #000;
  transition: all .3s ease-in-out;
`

const NewsDate = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem;
  transition: all .3s ease-in-out;
`

const NewsLink = styled(Link)`
  text-decoration: none;
`

class News extends React.Component {

  render() {
    const { t } = this.props

    return(
      <Background>
        <Header>
          <Container>
            <Title>{t("News")}</Title>
            <Subtitle>{t("Latest news in UNITY-BARS")}</Subtitle>
          </Container>
        </Header>
        <Grid>

          <NewsBlock>
            <NewsLink to="news-1">
              <NewsPhoto image={one}></NewsPhoto>
              <NewsTitle>{t("FirstPostTitle")}</NewsTitle>

              <NewsDate>12.02.2019</NewsDate>
            </NewsLink>
          </NewsBlock>


          <NewsBlock>
            <NewsLink to="news-2">
              <NewsPhoto image={two}></NewsPhoto>
              <NewsTitle>{t("SecondPostTitle")}</NewsTitle>

              <NewsDate>23.08.2018</NewsDate>
            </NewsLink>
          </NewsBlock>



          <NewsBlock>
            <NewsLink to="news-3">
              <NewsPhoto image={three}></NewsPhoto>
              <NewsTitle>{t("ThirdPostTitle")}</NewsTitle>

              <NewsDate>16.05.2018</NewsDate>
            </NewsLink>
          </NewsBlock>


          <NewsBlock>
            <NewsLink to="news-4">
              <NewsPhoto image={four}></NewsPhoto>
              <NewsTitle>{t("FourthPostTitle")}</NewsTitle>

              <NewsDate>16.03.2018</NewsDate>
            </NewsLink>
          </NewsBlock>


          <NewsBlock>
            <NewsLink to="news-5">
              <NewsPhoto image={five}></NewsPhoto>
              <NewsTitle>{t("FifthPostTitle")}</NewsTitle>
              <NewsDate>03.03.2018</NewsDate>
            </NewsLink>
          </NewsBlock>


          <NewsBlock>
            <NewsLink to="news-6">
              <NewsPhoto image={six}></NewsPhoto>
              <NewsTitle>{t("SixthPostTitle")}</NewsTitle>
              <NewsDate>21.11.2017</NewsDate>
            </NewsLink>
          </NewsBlock>

        </Grid>
      </Background>
    )
  }
}

export default translate("News")(News)
