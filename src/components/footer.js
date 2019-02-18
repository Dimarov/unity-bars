import React from 'react'
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
  padding: 0 1rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
  }
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

  @media screen and (max-width: 60rem) {
    flex: 0 0 3rem;
  }
`

const Title = styled.h2`
  font-size: 1rem;
  font-family: myriad-pro, sans-serif;
  font-weight: 400;
  color: #fff;
  opacity: .4;
  margin: 0;

  @media screen and (max-width: 60rem) {
    font-size: .75rem;
  }
`

class Footer extends React.Component {

  render() {
    const { t } = this.props

    return(
      <StyledFooter>
        <Container>
          <FooterContent>
            <Title>{t("Copyright")}</Title>
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

export default translate("Footer")(Footer)
