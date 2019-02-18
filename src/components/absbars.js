import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import bg from '../images/products.jpg'
import abs from '../images/abs_mac.png'

const StyledBackground = styled.div`
  width: 100%;
  height: auto;
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

const StyledHeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  color: #000;
  font-weight: 400;
  margin: 0 0 1.3rem 0;
  
  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
  }
`

const StyledHeaderSubTitleHuge = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  line-height: 32px;
  // font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;
 
`

const StyledHeaderTitle = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  color: #000;
  line-height: 2.5rem;
  font-weight: 200;
  margin: 5rem 0 3rem 0;
  
  @media screen and (max-width: 60rem) {
   margin: 0.5rem;
  }
`

const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`

const AbsImage = styled.img`
  margin-top: 2.5rem;
  height: 16rem;
  width: auto;
  text-align: center;
  
  @media (min-width: 40rem) {
    
  }

  @media (min-width: 80rem) {
    margin-top: 3rem;
    height: 30rem;
    text-align: center;
  }
`

const Absbars = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>ABS BARS | CORE BANKING SYSTEM</StyledTitle>
        <StyledHeaderSubTitleHuge>Автоматизована банківська система з комплексним або індивідуальним підходом до клієнта
        </StyledHeaderSubTitleHuge>
        <Link>
          <StyledSubtitle>Завантажити презентацію
          </StyledSubtitle>
        </Link>
      </Container>
    </StyledHeader>

    <Container>
      <AbsImage src={abs} alt="abs-mockup"/>

      <StyledHeaderTitle>МОЖЛИВОСТІ І ПЕРЕВАГИ</StyledHeaderTitle>
      <StyledHeaderTitleParagraph>
        &#8226; Орієнтація на промислові сервера баз даних Oracle
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Гнучка система адміністрування
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Багаторівнева система роздільного доступу до фінансових і технічних ресурсів банку
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Швидка інтеграція із іншими системи за рахунок використання SAOP
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Сучасні засоби розробки
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Багаторівнева система візування
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Web інтерфейс
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Модульність</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Багатонаціональність</StyledHeaderTitleParagraph>

      <StyledHeaderTitle>Модульність</StyledHeaderTitle>

      <StyledTestMargin/>
    </Container>
  </StyledBackground>


)

export default Absbars