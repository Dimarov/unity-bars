import React from 'react'
// import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../../images/products.jpg"

import absbars from "../../images/products/absbars.png"
import absbarsmmfo from "../../images/products/absbarsmmfo.png"
import corp2 from "../../images/products/corp2.png"
import corplight from "../../images/products/corplight.png"
import creditmodule from "../../images/products/creditmodule.png"
import datawarehouse from "../../images/products/datawarehouse.png"
import electronicarchive from "../../images/products/electronica.png"

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
  background: #fafafa;
  position: relative;
  transition: all .3s ease-in-out;
  cursor: pointer;

  :focus,
  :hover {
    background: #EEE;
  }

  :focus,
  :hover img {
    filter: brightness(100);
  }

  :focus,
  :hover h2 {
    opacity: 1;
    top: 35%;

    @media (min-width: 40rem) {

    }

    @media (min-width: 80rem) {
      top: 15%;
    }
  }

  :focus,
  :hover p {
    opacity: 0;
    bottom: 5%;

    @media (min-width: 40rem) {

    }

    @media (min-width: 80rem) {
      opacity: 1;
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
  color: #3EC4E1;
  border: .125rem solid #3EC4E1;
  border-radius: .125rem;
  opacity: 0;
  margin: 0;
  z-index: 999;
  transition: all .3s ease-in-out;
`

const ProductSubtitle = styled.h3`
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,-50%);
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #1A1A1A;
  opacity: 0;
  margin: 0;
  transition: all .3s ease-in-out;
`

const ProductImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  transition: all .0s ease-in-out;
`

const Products = (props) => (
  <Background>
    <Header>
      <Container>
        <Title>Продукты../</Title>
        <Subtitle>25 лет успешной работы в сфере разработки банковского программного обеспечения</Subtitle>
      </Container>
    </Header>
    <Grid>
      <Product>
        <ProductTitle>Автоматизированная банковская система BARS</ProductTitle>
        <ProductSubtitle>Система с комплексным или индивидуальным подходом к клиенту. Автоматизирует широкий спектр бизнес-процессов и функций банка</ProductSubtitle>
        <ProductImage src={absbars} />
      </Product>
      <Product>
        <ProductTitle>Автоматизированная банковская система BARS MMFO</ProductTitle>
        <ProductSubtitle>Обеспечение работы нескольких МФО в централизованной БД</ProductSubtitle>
        <ProductImage src={absbarsmmfo} />
      </Product>
      <Product>
        <ProductTitle>Корпоративный клиент-банк </ProductTitle>
        <ProductSubtitle>Система дистанционного обслуживания корпоративных клиентов с многоуровневой структурой на базе Web-технологий</ProductSubtitle>
        <ProductImage src={corp2} />
      </Product>
      <Product>
        <ProductTitle>Клиент-банк</ProductTitle>
        <ProductSubtitle>Универсальная система дистанционного обслуживания юридических и физических лиц</ProductSubtitle>
        <ProductImage src={corplight} />
      </Product>
      <Product>
        <ProductTitle>Кредитный модуль</ProductTitle>
        <ProductSubtitle>Система обслуживания кредитной деятельности и автоматизации кредитного учреждения с полным циклом обслуживания клиентов</ProductSubtitle>
        <ProductImage src={creditmodule} />
      </Product>
      <Product>
        <ProductTitle>Электронное хранилище</ProductTitle>
        <ProductSubtitle>Система класса банковского DWH на платформе и модулях IBM</ProductSubtitle>
        <ProductImage src={datawarehouse} />
      </Product>
      <Product>
        <ProductTitle>Электронный архив</ProductTitle>
        <ProductSubtitle>Обеспечивает хранение первичных документов в электронном виде</ProductSubtitle>
        <ProductImage src={electronicarchive} />
      </Product>
    </Grid>
    </Background>
    )

    export default Products
