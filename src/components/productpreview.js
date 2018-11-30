import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import test from "../images/Notebook.png"

import boneImage from "../images/bone.png"
import corpImage from "../images/corp.png"
import forwardImage from "../images/forward.png"

import testti from "../images/01.jpg"

const StyledProductPreviews = styled.div`
  width: 100%;
  height: auto;
  background: #ececec;
`

const StyledBackground = styled.div`
  width: 100%;
  height: 40rem;
  margin: .5rem 0;
  background: url(${props => props.themeColor || "#000"});
  background-size: cover;
`

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledInfo = styled.div`
  flex: 1 1 50%;
  height: 100%;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledImageContainer = styled.div`
  flex: 1 1 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const StyledImage = styled.img`
  height: 100%;
`

const StyledTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};
`

const StyledSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};
`

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
`

const StyledButton = styled.button`
  outline: none;
  border: .125rem solid ${props => props.themeColorSecondary};
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : props.themeColorSecondary};
  padding: .4rem 2rem;
  margin-right: 1rem;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.outline ? props.themeColorSecondary : props.themeColor};
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    background: ${props => props.outline ? props.themeColorSecondary : "none"};
    color: ${props => props.outline ? props.themeColor : props.themeColorSecondary};
  }

  :active {
    transform: translateY(.0625rem);
  }
`

const StyledMoreButton = styled(Link)`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 2rem 0;
  text-decoration: none;
  color: ${props => props.themeColorSecondary};
  transition: all .3s ease-out;

  :focus,
  :hover {
    filter: contrast(50%);
  }
`

const products = [
  {id: 1, title: 'Bone', subtitle: 'Інтернет банкінг для МСП та приватних клієнтів', themeColor: '#1A1A1A', themeColorSecondary: '#FFF', order: '1', image: '../images/bone.png'},
  {id: 2, title: 'Corplight Ощадбанк', subtitle: 'Онлайн система управління банківськими рахунками та продуктами', themeColor: '#FEFEFE', themeColorSecondary: '#303030', order: '0', image: {corpImage}},
  {id: 3, title: 'Forward Online', subtitle: '24/7 доступ до Ваших банківських сервісів', themeColor: '#991F3A', themeColorSecondary: '#FEFEFE', order: '1', image: {forwardImage}},
]

const ProductPreview = (props) => (
  <div>
    <StyledBackground themeColor={testti}>
      <StyledContent>
        <StyledImageContainer>
          <StyledImage src={corpImage} />
        </StyledImageContainer>
        <StyledInfo>
          <StyledTitle themeColorSecondary='#FFF'>Bone</StyledTitle>
          <StyledSubtitle themeColorSecondary='#FFF'>Інтернет банкінг для МСП та приватних клієнтів</StyledSubtitle>
          <StyledButtonContainer>
            <StyledButton themeColor='#000' themeColorSecondary='#FFF'>App Store</StyledButton>
            <StyledButton themeColor='#000' themeColorSecondary='#FFF'>Google Play</StyledButton>
            <StyledButton outline themeColor='#000' themeColorSecondary='#FFF'>Web Demo</StyledButton>
          </StyledButtonContainer>
          <StyledMoreButton themeColorSecondary='#FFF'>Більше</StyledMoreButton>
        </StyledInfo>
      </StyledContent>
    </StyledBackground>
    <StyledBackground themeColor='#FEFEFE'>
      <StyledContent>
        <StyledInfo>
          <StyledTitle themeColorSecondary='#303030'>CorpLight Ощадбанк</StyledTitle>
          <StyledSubtitle themeColorSecondary='#303030'>Онлайн система управління банківськими рахунками та продуктами</StyledSubtitle>
          <StyledButtonContainer>
            <StyledButton themeColor='#FEFEFE' themeColorSecondary='#303030'>App Store</StyledButton>
            <StyledButton themeColor='#FEFEFE' themeColorSecondary='#303030'>Google Play</StyledButton>
            <StyledButton outline themeColor='#FEFEFE' themeColorSecondary='#303030'>Web Demo</StyledButton>
          </StyledButtonContainer>
          <StyledMoreButton themeColorSecondary='#303030'>Більше</StyledMoreButton>
        </StyledInfo>
        <StyledImageContainer>
          <StyledImage src={corpImage} />
        </StyledImageContainer>
      </StyledContent>
    </StyledBackground>
  </div>
  // <StyledBackground key={product.id} themeColor={product.themeColor}>
  //   <StyledContent>
  //     <StyledInfo order={product.order}>
  //       <StyledTitle themeColorSecondary={product.themeColorSecondary}>{product.title}</StyledTitle>
  //       <StyledSubtitle themeColorSecondary={product.themeColorSecondary}>{product.subtitle}</StyledSubtitle>
  //       <StyledButtonContainer>
  //         <StyledButton themeColor={product.themeColor} themeColorSecondary={product.themeColorSecondary}>App Store</StyledButton>
  //         <StyledButton themeColor={product.themeColor} themeColorSecondary={product.themeColorSecondary}>Google Play</StyledButton>
  //         <StyledButton outline themeColor={product.themeColor} themeColorSecondary={product.themeColorSecondary}>Web Demo</StyledButton>
  //       </StyledButtonContainer>
  //       <StyledMoreButton themeColorSecondary={product.themeColorSecondary}>Більше</StyledMoreButton>
  //     </StyledInfo>
  //     <StyledImageContainer>
  //       <StyledImage src={test} />
  //     </StyledImageContainer>
  //   </StyledContent>
  // </StyledBackground>
)

export default ProductPreview
