import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../images/products.jpg"

const StyledBackground = styled.div`
  width: 100%;
  height: auto;
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
  padding-top: 8rem;
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`

const StyledProduct = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: .125rem;
  background: #fafafa;

  @media screen and (max-width: 60rem) {
    height: 12rem;
  }
`

const Contacts = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Контакти</StyledTitle>
        <StyledSubtitle>Зв'яжіться з нами і дізнайтеся, як ми можемо допомогти вашому бізнесу досягти високих результатів
</StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledProduct></StyledProduct>
      <StyledProduct></StyledProduct>
      <StyledProduct></StyledProduct>
      <StyledProduct></StyledProduct>
      <StyledProduct></StyledProduct>
      <StyledProduct></StyledProduct>
      <StyledProduct></StyledProduct>
    </StyledGrid>
  </StyledBackground>
)

export default Contacts
