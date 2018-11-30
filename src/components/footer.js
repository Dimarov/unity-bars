import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.div`
  width: 100%;
  height: 6rem;
  background: rgba(0,0,0,1);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: myriad-pro, sans-serif;
`;

const IconContainer = styled.div`
  flex: 0 0 5%;
  display: flex;
  justify-content: space-between;
  opacity: .4;
`

const Title = styled.h2`
  font-size: 1rem;
  font-family: myriad-pro, sans-serif;
  font-weight: 400;
  color: #fff;
  opacity: .4;
  margin: 0;
`

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <Container>
      <FooterContent>
        <Title>Copyright © 2018 {siteTitle}. All Rights Reserved.</Title>
        <IconContainer>
          <a href="https://www.facebook.com/unitybars/">
            <FontAwesomeIcon icon={faFacebook} size="lg" color="#fff"/>
          </a>
          <a href="https://www.instagram.com/unitybars/">
            <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff"/>
          </a>
        </IconContainer>
        </FooterContent>
    </Container>
  </StyledFooter>
)

export default Footer
