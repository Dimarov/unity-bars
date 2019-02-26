import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { translate } from 'react-i18next'

const StyledBackground = styled.div`
  width: 100%;
  height: 48rem;
  background-size: cover  position: relative;

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

const ThankYouMessage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 3rem;
  font-weight: 500;
  color: #000;
`

const StyledButton = styled.button`
  outline: none;
  border: 0.125rem solid #000;
  border-radius: 0.125rem;
  background: ${props => (props.outline ? 'none' : '#000')};
  padding: 0.4rem 2rem;
  margin: 1rem;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => (props.outline ? '#000' : '#fff')};
  cursor: pointer;
  transition: all 0.3s ease-out;

  :focus,
  :hover {
    background: ${props => (props.outline ? '#000' : 'none')};
    color: ${props => (props.outline ? '#fff' : '#000')};
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

class Success extends React.Component {
    render() {
        const { t } = this.props

        return (
            <StyledBackground>
                <Container>
                    <StyledContent className="content">
                        <ThankYouMessage>{t('Thank You')}</ThankYouMessage>
                        <div>
                            <Link to="/company">
                                <StyledButton>{t('About Us Link')}</StyledButton>
                            </Link>
                            <Link to="/products">
                                <StyledButton outline>{t('Products Link')}</StyledButton>
                            </Link>
                        </div>
                    </StyledContent>
                </Container>
            </StyledBackground>
        )
    }
}

export default translate('Success')(Success)
