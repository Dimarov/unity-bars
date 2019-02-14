import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../images/products.jpg"

import absbars from "../images/products/absbars.png"
import absbarsmmfo from "../images/products/absbarsmmfo.png"
import corp2 from "../images/products/corp2.png"
import bone from "../images/products/bone.png"
import creditmodule from "../images/products/creditmodule.png"
import datawarehouse from "../images/products/datawarehouse.png"
import electronicarchive from "../images/products/electronica.png"

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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`

const Product = styled.div`
  width: 100%;
  height: 12rem;
  border-radius: .125rem;
  background: #eee;
  position: relative;
  transition: all .3s ease-in-out;
  cursor: pointer;

  img {
    filter: brightness(.3);
  }

  :focus,
  :hover {
    background: #fafafa;
  }

  :focus,
  :hover img {
    filter: brightness(1);
  }

  :focus,
  :hover h2 {
    opacity: .6;
    top: 20%;

    @media (min-width: 40rem) {

    }

    @media (min-width: 80rem) {
      top: 15%;
    }
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 20rem;
  }
`

const ProductTitle = styled.h2`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%,-50%);
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: .5rem 1rem;
  color: #000;
  border: .125rem solid #000;
  border-radius: .125rem;
  opacity: 0;
  margin: 0;
  z-index: 999;
  transition: all .3s ease-in-out;
`

const ProductImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  transition: all .0s ease-in-out;
`

const ProductLink = styled(Link)`
  text-decoration: none;
`

const Products = (props) => (
  <Background>
    <Header>
      <Container>
        <Title>Продукти</Title>
        <Subtitle>25 років успішної праці у сфері розробки банківського програмного забезпечення</Subtitle>
      </Container>
    </Header>
    <Grid>
      <ProductLink to="absbars">
        <Product>
          <ProductTitle>АБС BARS</ProductTitle>
          <ProductImage src={absbars} />
        </Product>
      </ProductLink>
      <ProductLink to="barsmmfo">
        <Product>
          <ProductTitle>АБС BARS MMFO</ProductTitle>

          <ProductImage src={absbarsmmfo} />
        </Product>
      </ProductLink>
      <ProductLink to="corp2">
        <Product>
          <ProductTitle>Корпоративний клієнт-банк </ProductTitle>

          <ProductImage src={corp2} />
        </Product>
      </ProductLink>
      <ProductLink to="bone">
        <Product>
          <ProductTitle>Клієнт-банк</ProductTitle>

          <ProductImage src={bone} />
        </Product>
      </ProductLink>
      <ProductLink to="creditmodule">
        <Product>
          <ProductTitle>Кредитний модуль</ProductTitle>

          <ProductImage src={creditmodule} />
        </Product>
      </ProductLink>
      <ProductLink to="datawarehouse">
        <Product>
          <ProductTitle>Електронне сховище</ProductTitle>

          <ProductImage src={datawarehouse} />
        </Product>
      </ProductLink>
      <ProductLink to="electronicarchive">
        <Product>
          <ProductTitle>Електронний архів</ProductTitle>

          <ProductImage src={electronicarchive} />
        </Product>
      </ProductLink>
    </Grid>
    </Background>
    )

    export default Products
