import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import test from "../images/Notebook.png"

const StyledProductPreviews = styled.div`
  width: 100%;
  height: auto;
  background: #ececec;
`

const StyledBackground = styled.div`
  width: 100%;
  height: 32rem;
  margin: .5rem 0;
  background: ${props => props.themeColor || "#1A1A1A"};
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
  order: ${props => props.order || "1"};
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledImageContainer = styled.div`
  flex: 1 1 50%;
  height: 100%;
  position: relative;
`

const StyledImage = styled.img`
  position: absolute;
  left: 4rem;
  top: 4rem;
  height: 24rem;
`

const StyledTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};
`

const StyledSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: myriad-pro, sans-serif;
  color: ${props => props.themeColorSecondary || "#FFF"};
`

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
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
  font-size: 1.25rem;
  margin: 2rem 0;
  text-decoration: none;
  color: ${props => props.themeColorSecondary};
  transition: all .3s ease-out;

  :focus,
  :hover {
    filter: contrast(50%);
  }
`

function Products(props) {
  const product = props.products.map((product) =>
    <StyledBackground key={product.id} themeColor={product.themeColor}>
      <StyledContent>
        <StyledInfo order={product.order}>
          <StyledTitle themeColorSecondary={product.themeColorSecondary}>{product.title}</StyledTitle>
          <StyledSubtitle themeColorSecondary={product.themeColorSecondary}>{product.subtitle}</StyledSubtitle>
          <StyledButtonContainer>
            <StyledButton themeColor={product.themeColor} themeColorSecondary={product.themeColorSecondary}>App Store</StyledButton>
            <StyledButton themeColor={product.themeColor} themeColorSecondary={product.themeColorSecondary}>Google Play</StyledButton>
            <StyledButton outline themeColor={product.themeColor} themeColorSecondary={product.themeColorSecondary}>Web Demo</StyledButton>
          </StyledButtonContainer>
          <StyledMoreButton themeColorSecondary={product.themeColorSecondary}>Більше</StyledMoreButton>
        </StyledInfo>
        <StyledImageContainer>
          <StyledImage src={test} />
        </StyledImageContainer>
      </StyledContent>
    </StyledBackground>
  );

  return (
    <StyledProductPreviews>
      {product}
    </StyledProductPreviews>
  );
}

const products = [
  {id: 1, title: 'Bone', subtitle: 'Інтернет банкінг для МСП та приватних клієнтів', themeColor: '#1A1A1A', themeColorSecondary: '#FFF', order: '1'},
  {id: 2, title: 'Corplight Ощадбанк', subtitle: 'Онлайн система управління банківськими рахунками та продуктами', themeColor: '#FEFEFE', themeColorSecondary: '#303030', order: '0'},
  {id: 3, title: 'Forward Online', subtitle: '24/7 доступ до Ваших банківських сервісів', themeColor: '#991F3A', themeColorSecondary: '#FEFEFE', order: '1'},
]

const ProductPreview = (props) => (
  <Products products={products} />
)

export default ProductPreview
