import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import boneImage from "../../images/mockups/bone-macbook.png"
import corpImage from "../../images/mockups/corplight-iphone.png"
import forwardImage from "../../images/mockups/forward-samsung.png"

const Background = styled.div`
  width: 100%;
  height: 32rem;
  background: ${props => props.themeColor || "#000"};
  background-size: cover;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 40rem;
  }
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0 14rem;
  }
`

const Info = styled.div`
  flex: 0 0 100%;
  height: 50%;
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex: 1 1 50%;
    height: 100%;
    padding: 3rem 4rem;
    align-items: flex-start;
  }
`

const ImageContainer = styled.div`
  flex: 0 0 100%;
  height: 50%;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex: 1 1 50%;
    height: 100%;
    order: 0;
  }
`

const ImageBone = styled.img`
  height: 16rem;
  margin: 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
  }
`

const ImageCorp = styled.img`
  height: 16rem;
  margin: 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
  }
`

const ImageForward = styled.img`
  height: 20rem;
  margin: 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 32rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  margin: .25rem 0;
  font-weight: 600;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 4rem;
    margin: 1rem 0;
  }
`

const Span = styled.span`
  color: ${props => props.color || props.themeColorSecondary};
`

const Subtitle = styled.h2`
  font-size: 1rem;
  margin: .5rem 0;
  text-align: center;
  font-weight: 400;
  opacity: .8;
  line-height: 3alt="bone"rem;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
    text-align: left;
    font-weight: 300;
    margin: 1rem 0;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: .5rem 0;
  justify-content: space-evenly;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    margin: 1rem 0;
    justify-content: flex-start;
  }
`

const Button = styled.button`
  outline: none;
  border: .125rem solid ${props => props.themeColorSecondary};
  border-radius: .125rem;
  background: ${props => props.outline ? "none" : props.themeColorSecondary};
  padding: .3rem 1.25rem;
  margin: 0 .5rem;
  font-size: .65rem;
  font-family: myriad-pro, sans-serif;
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

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1rem;
    margin: 0 1rem 0 0;
    padding: .4rem 2rem;
  }
`

const MoreButton = styled(Link)`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 300;
  text-decoration: none;
  color: ${props => props.themeColorSecondary};
  transition: all .3s ease-out;

  :focus,
  :hover {
    filter: contrast(50%);
  }

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
    margin: 2rem 0;
  }
`

const ProductPreview = (props) => (
  <div>
    <Background themeColor='#000'>
      <Content>
        <ImageContainer>
          <ImageBone src={boneImage} alt="bone"/>
        </ImageContainer>
        <Info>
          <Title themeColorSecondary='#FFF'>B.One</Title>
          <Subtitle themeColorSecondary='#FFF'>Internet banking for SMB and private clients</Subtitle>
          <ButtonContainer>
            <Button themeColor='#000' themeColorSecondary='#FFF'>App Store</Button>
            <Button themeColor='#000' themeColorSecondary='#FFF'>Google Play</Button>
            <Button outline themeColor='#000' themeColorSecondary='#FFF'>Web Demo</Button>
          </ButtonContainer>
          <MoreButton themeColorSecondary='#3EC4E1'>More</MoreButton>
        </Info>
      </Content>
    </Background>
    <Background themeColor='#FEFEFE'>
      <Content>
        <Info>
          <Title themeColorSecondary='#303030'>CorpLight <Span color="#3EC4E1">Ощадбанк</Span></Title>
          <Subtitle themeColorSecondary='#303030'>Online bank account management system and products</Subtitle>
          <ButtonContainer>
            <Button themeColor='#FEFEFE' themeColorSecondary='#303030'>App Store</Button>
            <Button themeColor='#FEFEFE' themeColorSecondary='#303030'>Google Play</Button>
            <Button outline themeColor='#FEFEFE' themeColorSecondary='#303030'>Web Demo</Button>
          </ButtonContainer>
          <MoreButton to="/corplight" themeColorSecondary='#3EC4E1'>Більше</MoreButton>
        </Info>
        <ImageContainer>
          <ImageCorp src={corpImage} alt="corplight" />
        </ImageContainer>
      </Content>
    </Background>
    <Background themeColor='#FAFAFA'>
      <Content>
        <ImageContainer>
          <ImageForward src={forwardImage} alt="forward" />
        </ImageContainer>
        <Info>
          <Title themeColorSecondary='#29333E'><Span color="#991F3A">Forward</Span> Online</Title>
          <Subtitle themeColorSecondary='#29333E'>24/7 access to your banking services</Subtitle>
          <ButtonContainer>
            <Button themeColor='#FAFAFA' themeColorSecondary='#29333E'>App Store</Button>
            <Button themeColor='#FAFAFA' themeColorSecondary='#29333E'>Google Play</Button>
            <Button outline themeColor='#FAFAFA' themeColorSecondary='#29333E'>Web Demo</Button>
          </ButtonContainer>
          <MoreButton themeColorSecondary='#3EC4E1'>More</MoreButton>
        </Info>
      </Content>
    </Background>
  </div>
)

export default ProductPreview
