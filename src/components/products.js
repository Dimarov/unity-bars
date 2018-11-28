import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

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
  background: green;
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
  height: 120vh;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
`

const StyledProduct = styled.div`
  width: 100%;
  height: 100%;
  border-radius: .125rem;
  background: #fafafa;
`

const Products = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Продукти</StyledTitle>
        <StyledSubtitle>25 років успішної праці у сфері розробки банківського програмного забезпечення</StyledSubtitle>
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

export default Products
