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
  // font-weight: 400;
  color: #fff;
  line-height: 32px;
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

const Barsmmfo = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>BARS MMFO | CORE BANKING SYSTEM</StyledTitle>
        <StyledHeaderSubTitleHuge>Забезпечення роботи декількох МФО в централізованій БД.
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
        &#8226; Відповідність сучасним тенденціям, ринкових позиціях і стратегіям банківських установ
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Зменшення операційних ризиків і підвищення прозорості
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Централізація функцій, операцій і бізнес-процесів Банку
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Збереження незмінного коду МФО
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Забезпечення роботи в єдиній централізованій Базі Даних всіх структурних одиниць банку
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Централізація широкого спектру процесів взаємодії
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Консолідація процесів адміністрування
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Полегшення інтеграції зі сторонніми завданнями</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Можливість побудови балансу і звітності в розрізі окремих
        МФО</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Зменшення інформаційних ризиків і підвищення захищеності інформаційних систем
        Банку</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Оптимізація організаційної структури Банку</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Забезпечення онлайн доступу до всього масиву даних в єдиній базі, розмежування
        доступу
        за рівнями доступу</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Можливість проведення безвиїзного аудиту</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Забезпечення ефективності та прозорості процесу управління
        Банком</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Скорочення витрат Банку через централізацію
        процесів</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Консолідація даних і показників по всій системі
        Банку</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Забезпечення ідентичності настройки системи за всіма структурними одиницями
        (ідентичність продуктів, їх параметрів, лімітів та шаблонів і т.д.)</StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Можливість складання централізованих звітних файлів по всій системі
        Банку</StyledHeaderTitleParagraph>


      <StyledHeaderTitle>Модульність</StyledHeaderTitle>

      <StyledTestMargin/>
    </Container>
  </StyledBackground>
)

export default Barsmmfo
