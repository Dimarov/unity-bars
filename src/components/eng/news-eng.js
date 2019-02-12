import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../../images/products.jpg"

import one from "../../images/news/news1.jpg"
import two from "../../images/news/news2.jpg"
import three from "../../images/news/news3.jpg"
import four from "../../images/news/news4.jpg"
import five from "../../images/news/news5.jpg"
import six from "../../images/news/news6.jpg"


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
  background-image: url(${bg});
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
  background: #fafafa;
  display: flex;
  flex-direction: column;
  transition: all .3s ease-in-out;
  cursor: pointer;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 36rem;
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
    filter: grayscale(100);

    :hover {
      filter: grayscale(0);
    }
  }
`

const StyledNewsTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem;
  color: #3EC4E1;
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

const News = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>News</StyledTitle>
        <StyledSubtitle>Latest news in Unity-Bars</StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledNews>
        <StyledNewsPhoto image={one}></StyledNewsPhoto>
        <StyledNewsTitle>Happy Independence Day, Ukraine!</StyledNewsTitle>
        <StyledNewsText>The friendly team of UNITY BARS congratulates all clients on Independence Day. Together, we make our country stronger</StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={two}></StyledNewsPhoto>
        <StyledNewsTitle>New Transfer of Data to BARS MMFO</StyledNewsTitle>
        <StyledNewsText>
          Another data transfer, now for the regions of Vinnytsia and Zhytomyr, has just been updated.
        </StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={three}></StyledNewsPhoto>
        <StyledNewsTitle>From now on, getting a pension is even more convenient and safer thanks to our PFU Data Exchange SystemУ</StyledNewsTitle>
        <StyledNewsText>The friendly team of UNITY BARS congratulates all clients on Independence Day. Together, we make our country stronger</StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={four}></StyledNewsPhoto>
        <StyledNewsTitle>Happy Independence Day, Ukraine!</StyledNewsTitle>
        <StyledNewsText>The friendly team of UNITY BARS congratulates all clients on Independence Day. Together, we make our country stronger</StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={five}></StyledNewsPhoto>
        <StyledNewsTitle>Happy Independence Day, Ukraine!</StyledNewsTitle>
        <StyledNewsText>The friendly team of UNITY BARS congratulates all clients on Independence Day. Together, we make our country stronger</StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
      <StyledNews>
        <StyledNewsPhoto image={six}></StyledNewsPhoto>
        <StyledNewsTitle>Happy Independence Day, Ukraine!</StyledNewsTitle>
        <StyledNewsText>The friendly team of UNITY BARS congratulates all clients on Independence Day. Together, we make our country stronger</StyledNewsText>
        <StyledNewsDate>26.11.2018</StyledNewsDate>
      </StyledNews>
    </StyledGrid>
  </StyledBackground>
)

export default News
