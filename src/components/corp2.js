import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import bg from '../images/fix/products.jpg'
import corpSignIn from '../images/fix/corp2_sign-in.png'
import oshad from '../images/fix/oshadbank1_1_corp.png'
import dksu from '../images/fix/dksy1_1_corp.png'
import rozrah from '../images/fix/rozrahynkovuicenter1_1_corp.png'
import corpMac2 from '../images/fix/corp2_mac_can.png'

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

const StyledDownloadLink = styled(Link)`
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

const StyledTitleBlack = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #000;
  margin: 5rem 0 5rem 0;

  @media screen and (max-width: 60rem) {
    margin: 5rem 0 5rem 0rem;
  }
`

const StyledSubtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
`

const StyledSubtitleWhite = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 3rem;
  color: #fff;
  margin: 3rem 0 3rem 0;
`

const StyledHeaderTitle = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  color: #000;
  line-height: 2.5rem;
  font-weight: 200;
  margin: 5rem 0 3rem 0;

  @media screen and (max-width: 60rem) {

  }
`

const StyledHeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  color: #000;
  line-height: 30px;
  font-weight: 400;
  margin: 0 0 1.3rem 0;
  opacity: .8;

  @media screen and (max-width: 60rem) {

  }
`

const StyledThereIsWillBeImage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  text-align: center;
  background-color: red;
  height: 32rem;
  color: #000;
  margin: 4rem 0 3rem 0;
`

const ImageContainers = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex-direction: row;
  }
`

const StyledThreeImagesBlock = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  height: 3rem;
  margin: 2rem;
  color: #000;
`

const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`


const CorpSignInImg = styled.img`
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

const UsedByCorpServicesOshad = styled.img`
`
const UsedByCorpServicesDKSU = styled.img`
`
const UsedByCorpServicesRozrah = styled.img`
`

const MacImg2 = styled.img`
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


const Corp2 = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>CORP 2</StyledTitle>
        <StyledSubtitleWhite>Корпоративний Online-Banking</StyledSubtitleWhite>
        <StyledDownloadLink>Завантажити Презентацію</StyledDownloadLink>
      </Container>
    </StyledHeader>
    <ImageContainer>
      <CorpSignInImg src={corpSignIn} alt="corp-mockup-signin"/>
    </ImageContainer>
    <Container>


      <StyledHeaderTitleParagraph>Corp 2 — надійна і перевірена часом система дистанційного обслуговування з широким
        переліком функціональних можливостей, що дозволяє клієнтам банку цілодобово управляти власними рахунками, не
        виходячи з офісу. За допомогою системи Клієнти мають можливість постійного доступу та оперативного отримання
        повного обсягу інформації про стан рахунків. При цьому вся інформація, якою обмінюються Клієнт і Банк, надійно
        захищена системою і недоступна для сторонніх осіб. Система постійно розвивається та вдосконалюється, завдяки
        чому
        стала основою для наступних продуктів компанії, оновленої системи Corp 3 та Corp
      Light</StyledHeaderTitleParagraph>

      <StyledTitleBlack>Використовуеться</StyledTitleBlack>

      <ImageContainers>
        <StyledThreeImagesBlock>
          <UsedByCorpServicesOshad src={oshad} alt='oshad'/>
        </StyledThreeImagesBlock>
        <StyledThreeImagesBlock>
          <UsedByCorpServicesDKSU src={dksu} alt='oshad'/>
        </StyledThreeImagesBlock>
        <StyledThreeImagesBlock>
          <UsedByCorpServicesRozrah src={rozrah} alt='oshad'/>
        </StyledThreeImagesBlock>
      </ImageContainers>

      <StyledTitleBlack>
        Можливотсі та Досягнення Системи
      </StyledTitleBlack>

      <StyledHeaderTitleParagraph>&#8226; Витримує навантаження в час пік 2000 — 3000 одночасно працюючих
      користувачів</StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>&#8226; Корпоративний клієнт-банк має більше ніж 46 000
      користувачів</StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>&#8226; Містить 200 000 рахунків та 300 000 — 400 000 документів в
      день</StyledHeaderTitleParagraph>

    </Container>
    <ImageContainer>
      <MacImg2 src={corpMac2} alt="macImg"/>
    </ImageContainer>
    <Container>

      <StyledTitleBlack>Кастомізація Візування</StyledTitleBlack>

      <StyledHeaderTitleParagraph>&#8226; Єдина віза (використовується за фізичних осіб та
        СПД)
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>&#8226; Подвійна віза (стандартно для юридичних осіб (бухгалтер,
        директор)
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>&#8226; Потрійна віза (використовується для корпоративного контролю (бухгалтер,
        директор, контролер)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>Віза Контролера у потрійній візі позначається як “послідовна”. Це означає, що вона
        може бути накладена тільки після віз Бухгалтера та Директора. На відміну, візи Бухгалтера та Директора можуть
        накладатися у довільному порядку. Загальна кількість віз може бути збільшена до 10 з установкою порядку та
        пріорітету. Також підтримують умовні візи – згідно вказаного правила (наприклад при перевищені певної суми, чи
        на певний номер рахунку\отримувача\банк тощо) – лише при виконанні умови віза буде присвоєна
        документові.
      </StyledHeaderTitleParagraph>

      <StyledTitleBlack>Багаторівненва Аутентифікація</StyledTitleBlack>

      <StyledHeaderTitleParagraph>Кожен тип входу можна окремо дозволити чи заборонити. Підтримуються різноманітні носії
        таємного ключа (токен, смарт-карта, та ін.). Можливість додатково шифрування каналу власним таємним ключем (за
        допомогою крипто-шлюзу Bars Gataway)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Логін користувача та звичайний пароль
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>&#8226; Токен для генерації одноразового паролю (додатково для багаторазового)
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>&#8226; Одноразовий пароль по SMS, згенерований віртуальним токеном (додатково до
        багаторазового)
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>&#8226; Електронно-цифровий ключ для використання у криптографічних перетвореннях
        (вхід по ключу). Цим же ключем відбувається накладення ЕЦП на документи
      </StyledHeaderTitleParagraph>
      <StyledTestMargin/>
    </Container>
  </StyledBackground>
)

export default Corp2
