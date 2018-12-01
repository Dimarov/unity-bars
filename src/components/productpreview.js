import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import boneImage from "../images/bone.png"
import corpImage from "../images/corp.png"
import forwardImage from "../images/forward.png"

const StyledProductPreviews = styled.div`
  width: 100%;
  height: auto;
  background: #ececec;
`

const StyledBackground = styled.div`
  width: 100%;
  height: 40rem;
  background: ${props => props.themeColor || "#000"};
  background-size: cover;

  @media screen and (max-width: 60rem) {
    height: 32rem;
  }
`

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 60rem) {
    padding: 0 1rem;
  }
`

const StyledInfo = styled.div`
  flex: 1 1 50%;
  height: 100%;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 60rem) {
    flex: 0 0 100%;
    height: 50%;
    padding: 0;
    align-items: center;
  }
`

const StyledImageContainer = styled.div`
  flex: 1 1 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 60rem) {
    flex: 0 0 100%;
    height: 50%;
    order: 2;
  }
`

const StyledImageBone = styled.img`
  height: 24rem;

  @media screen and (max-width: 60rem) {
    height: 10rem;
  }
`

const StyledImageCorp = styled.img`
  height: 28rem;

  @media screen and (max-width: 60rem) {
    height: 12rem;
  }
`

const StyledImageForward = styled.img`
  height: 36rem;

  @media screen and (max-width: 60rem) {
    height: 14rem;
  }
`

const StyledTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};

  @media screen and (max-width: 60rem) {
    font-size: 2rem;
    margin: .25rem 0;
  }
`

const StyledSpan = styled.span`
  color: ${props => props.color || props.themeColorSecondary};
`

const StyledSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3alt="bone"rem;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};

  @media screen and (max-width: 60rem) {
    font-size: 1rem;
    margin: .25rem 0;
    text-align: center;
  }
`

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;

  @media screen and (max-width: 60rem) {
    margin: .5rem 0;
    justify-content: space-evenly;
  }
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

  @media screen and (max-width: 60rem) {
    padding: .3rem 1.25rem;
    margin: 0 .5rem;
    font-size: .65rem;
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

  @media screen and (max-width: 60rem) {
    font-size: 1rem;
    margin: 1rem 0;
  }
`

const ProductPreview = (props) => (
  <div>
    <StyledBackground themeColor='#000'>
      <StyledContent>
        <StyledImageContainer>
          <StyledImageBone src={boneImage} alt="bone"/>
        </StyledImageContainer>
        <StyledInfo>
          <StyledTitle themeColorSecondary='#FFF'>Bone</StyledTitle>
          <StyledSubtitle themeColorSecondary='#FFF'>Інтернет банкінг для МСП та приватних клієнтів</StyledSubtitle>
          <StyledButtonContainer>
            <StyledButton themeColor='#000' themeColorSecondary='#FFF'>App Store</StyledButton>
            <StyledButton themeColor='#000' themeColorSecondary='#FFF'>Google Play</StyledButton>
            <StyledButton outline themeColor='#000' themeColorSecondary='#FFF'>Web Demo</StyledButton>
          </StyledButtonContainer>
          <StyledMoreButton themeColorSecondary='#3EC4E1'>Більше</StyledMoreButton>
        </StyledInfo>
      </StyledContent>
    </StyledBackground>
    <StyledBackground themeColor='#FEFEFE'>
      <StyledContent>
        <StyledInfo>
          <StyledTitle themeColorSecondary='#303030'>CorpLight <StyledSpan color="#3EC4E1">Ощадбанк</StyledSpan></StyledTitle>
          <StyledSubtitle themeColorSecondary='#303030'>Онлайн система управління банківськими рахунками та продуктами</StyledSubtitle>
          <StyledButtonContainer>
            <StyledButton themeColor='#FEFEFE' themeColorSecondary='#303030'>App Store</StyledButton>
            <StyledButton themeColor='#FEFEFE' themeColorSecondary='#303030'>Google Play</StyledButton>
            <StyledButton outline themeColor='#FEFEFE' themeColorSecondary='#303030'>Web Demo</StyledButton>
          </StyledButtonContainer>
          <StyledMoreButton themeColorSecondary='#3EC4E1'>Більше</StyledMoreButton>
        </StyledInfo>
        <StyledImageContainer>
          <StyledImageCorp src={corpImage} alt="corplight" />
        </StyledImageContainer>
      </StyledContent>
    </StyledBackground>
    <StyledBackground themeColor='#FAFAFA'>
      <StyledContent>
        <StyledImageContainer>
          <StyledImageForward src={forwardImage} alt="forward" />
        </StyledImageContainer>
        <StyledInfo>
          <StyledTitle themeColorSecondary='#29333E'><StyledSpan color="#991F3A">Forward</StyledSpan> Online</StyledTitle>
          <StyledSubtitle themeColorSecondary='#29333E'>24/7 доступ до Ваших банківських сервісів</StyledSubtitle>
          <StyledButtonContainer>
            <StyledButton themeColor='#FAFAFA' themeColorSecondary='#29333E'>App Store</StyledButton>
            <StyledButton themeColor='#FAFAFA' themeColorSecondary='#29333E'>Google Play</StyledButton>
            <StyledButton outline themeColor='#FAFAFA' themeColorSecondary='#29333E'>Web Demo</StyledButton>
          </StyledButtonContainer>
          <StyledMoreButton themeColorSecondary='#3EC4E1'>Більше</StyledMoreButton>
        </StyledInfo>
      </StyledContent>
    </StyledBackground>
  </div>
)

export default ProductPreview
