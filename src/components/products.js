import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import bg from "../images/products.jpg"

import absbars from "../images/products/absbars.png"
import absbarsmmfo from "../images/products/absbarsmmfo.png"
import corp2 from "../images/products/corp2.png"
import corplight from "../images/products/corplight.png"
import creditmodule from "../images/products/creditmodule.png"
import datawarehouse from "../images/products/datawarehouse.png"
import electronicarchive from "../images/products/electronica.png"

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
  position: relative;
  transition: all .3s ease-in-out;
  cursor: pointer;

  :hover {
    background: #EEE;
  }

  :hover img {
    filter: brightness(100);
  }

  :hover h2 {
    opacity: 1;
    top: 15%;

    @media screen and (max-width: 60rem) {
      top: 35%;
    }
  }

  :hover p {
    opacity: 1;
    bottom: 5%;

    @media screen and (max-width: 60rem) {
      opacity: 0;
    }
  }

  @media screen and (max-width: 60rem) {
    height: 12rem;
  }
`

const StyledProductTitle = styled.h2`
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

const StyledProductSubtitle = styled.p`
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

const StyledProductImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  transition: all .0s ease-in-out;
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
      <StyledProduct>
        <StyledProductTitle>Автоматизована банківська система BARS</StyledProductTitle>
        <StyledProductSubtitle>Система з комплексним або індивідуальним підходом до клієнта. Автоматизує широкий спектр бізнес-процесів і функцій банку</StyledProductSubtitle>
        <StyledProductImage src={absbars} />
      </StyledProduct>
      <StyledProduct>
        <StyledProductTitle>Автоматизована банківська система BARS MMFO</StyledProductTitle>
        <StyledProductSubtitle>Забезпечення роботи декількох МФО в централізованій БД</StyledProductSubtitle>
        <StyledProductImage src={absbarsmmfo} />
      </StyledProduct>
      <StyledProduct>
        <StyledProductTitle>Корпоративний клієнт-банк </StyledProductTitle>
        <StyledProductSubtitle>Система дистанційного обслуговування корпоративних клієнтів з багаторівневою структурою на базі Web-технологій</StyledProductSubtitle>
        <StyledProductImage src={corp2} />
      </StyledProduct>
      <StyledProduct>
        <StyledProductTitle>Клієнт-банк</StyledProductTitle>
        <StyledProductSubtitle>Універсальна система дистанційного обслуговування юридичних і фізичних осіб</StyledProductSubtitle>
        <StyledProductImage src={corplight} />
      </StyledProduct>
      <StyledProduct>
        <StyledProductTitle>Кредитний модуль</StyledProductTitle>
        <StyledProductSubtitle>Система обслуговування кредитної діяльності та автоматизації кредитної установи з повним циклом обслуговування клієнтів</StyledProductSubtitle>
        <StyledProductImage src={creditmodule} />
      </StyledProduct>
      <StyledProduct>
        <StyledProductTitle>Електронне сховище</StyledProductTitle>
        <StyledProductSubtitle>Система класу банківського DWH на платформі і модулях IBM</StyledProductSubtitle>
        <StyledProductImage src={datawarehouse} />
      </StyledProduct>
      <StyledProduct>
        <StyledProductTitle>Електронний архів</StyledProductTitle>
        <StyledProductSubtitle>Забезпечує зберігання первинних документів в електронному вигляді</StyledProductSubtitle>
        <StyledProductImage src={electronicarchive} />
      </StyledProduct>
    </StyledGrid>
  </StyledBackground>
)

export default Products
