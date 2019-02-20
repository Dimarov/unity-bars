import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { translate } from 'react-i18next'

import unitybarslogobackground from '../images/unitybarslogobackground.png'
import ub from '../images/ub-background.jpg'

const StyledBackground = styled.div`
  width: 100%;
  height: 48rem;
  background-color: #000;
  background-image: url(${ub});
  background-size: cover;
  box-shadow: inset 0rem -10rem 10rem rgba(0, 0, 0, 0.8);
  filter: grayscale(0.5);
  position: relative;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    height: 100vh;
  }
`

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
`

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BackgroundImage = styled.img`
  width: 16rem;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    width: 32rem;
  }
`

const StyledButton = styled.button`
  outline: none;
  border: 0.125rem solid #fff;
  border-radius: 0.125rem;
  background: ${props => (props.outline ? 'none' : '#FFF')};
  padding: 0.4rem 2rem;
  margin: 1rem;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => (props.outline ? '#FFF' : '#000')};
  cursor: pointer;
  transition: all 0.3s ease-out;

  :focus,
  :hover {
    background: ${props => (props.outline ? '#FFF' : 'none')};
    color: ${props => (props.outline ? '#000' : '#FFF')};
  }

  :active {
    transform: translateY(0.0625rem);
  }

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    padding: 0.5rem 3rem;
  }
`

class Background extends React.Component {
  render() {
    const { t } = this.props

    return (
      <StyledBackground>
        <Container>
          <StyledContent className="content">
            <BackgroundImage src={unitybarslogobackground} alt="city-view" />
            <div>
              <Link to="/company">
                <StyledButton>{t('About Us')}</StyledButton>
              </Link>
              <Link to="/products">
                <StyledButton outline>{t('Products')}</StyledButton>
              </Link>
            </div>
          </StyledContent>
        </Container>
      </StyledBackground>
    )
  }
}

export default translate('Background')(Background)
