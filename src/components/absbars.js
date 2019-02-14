import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import office from '../images/fix/office.jpg'
import bg from '../images/fix/products.jpg'
import abs from '../images/fix/abs_mac.png'
import absr from '../images/fix/abs_r.png'

const StyledBackground = styled.div`
  width: 100%;
  height: auto;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
  padding: 0rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 0;
  }
`

const StyledHeader = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${office});
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

const StyledDownloadLink = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: .5rem 0;
  text-decoration: none;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const StyledParagraphText = styled.div`
  font-family: myriad-pro, sans-serif;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 200;
  color: #000;

  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
  }
`

const StyledTitleBlackColor = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  // font-weight: 400;
  line-height: 2.5rem;
  color: #000;
  margin: 4rem 0 3rem 0;

  @media screen and (max-width: 60rem) {
   margin: 0.5rem;
  }
`

const StyledThereIsWillBeImage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  text-align: center;
  background-color: red;
  height: 32rem;
  // font-weight: 400;
  color: #000;
  margin: 4rem 0 3rem 0;
`

const StyledHeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  color: #000;
  font-weight: 400;
  margin: 0 0 1.3rem 0;
  opacity: .8;

  @media screen and (max-width: 60rem) {
    margin: 1rem 0;
  }
`

const StyledHeaderSubTitleHuge = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  line-height: 32px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 2rem;

`

const StyledHeaderTitle = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  color: #000;
  line-height: 2.5rem;
  font-weight: 400;
  margin: 5rem 0 3rem 0;

  @media screen and (max-width: 60rem) {
   margin: 0.5rem 0;
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
        <StyledTitle>ABS BARS | Core Banking System</StyledTitle>
        <StyledHeaderSubTitleHuge>Автоматизована банківська система з комплексним або індивідуальним підходом до клієнта
        </StyledHeaderSubTitleHuge>
        <StyledDownloadLink href={withPrefix('/documents/ABS-BARS.pdf')} download="ABS-BARS.pdf">
          Завантажити Презентацію
        </StyledDownloadLink>
      </Container>
    </StyledHeader>
    <ImageContainer>
      <AbsImage src={abs} alt="abs-mockup"/>
    </ImageContainer>

    <Container>


      <StyledHeaderTitle>Можливості та Переваги</StyledHeaderTitle>
      <StyledHeaderTitleParagraph>
        Орієнтація на промислові сервера баз даних Oracle
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        Гнучка система адміністрування
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        Багаторівнева система роздільного доступу до фінансових і технічних ресурсів банку
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        Швидка інтеграція із іншими системи за рахунок використання SAOP
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        Сучасні засоби розробки
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        Багаторівнева система візування
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        Web інтерфейс
      </StyledHeaderTitleParagraph>
      <br />
      <br />
      <StyledHeaderTitleParagraph>
        - Легка інтеграція з держустановами, де використовується наш продукт UNITY-BARS (НБУ, Державна Казначейська Служба України, Держмитниця, Розрахунковий центр (Всеукраїнський депозитарій цінних паперів))
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        - ІІІ — рівнева модель архітектури
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        - Робота з великими об’ємами інформації (15 млн. клієнтів, 25 млн. рахунків, 10 тис. користувачів; щоденно обробляється більше ніж 600 тис. документів)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        - Інтерфейс користувача на базі веб- технологій, забезпечує роботу через повільні канали зв’язку
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        - Відповідність до сучасних вимог інформаційної безпеки
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        - Використання сучасних засобів розробки (ASP.NET,ANGULAR, KENDO). СКБД Oracle
      </StyledHeaderTitleParagraph>

    </Container>
    <ImageContainer>
      <AbsImage src={absr} alt="abs-mockup"/>
    </ImageContainer>
    <Container>
      <StyledHeaderTitleParagraph>
        Логічна організація функціоналу здійснюється за принципом модульності, що дозволяє використання тільки необхідних функційАБС здійснює автоматизацію повного спектра функціоналу банку всіх напрямків:
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>
        - фронт і бек-офісів
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>
        - РБ, МСБ та КБ, казначейство, бухгалтерія
      </StyledHeaderTitleParagraph>
      <StyledTestMargin />
    </Container>
  </StyledBackground>


)

export default Absbars
