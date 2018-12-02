import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import bg from '../images/products.jpg'
import ElectronicarchivePage from '../pages/electronicarchive'
// import CreditmodulePage from '../pages/creditmodule'

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

const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`

const Electronicarchive = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Electronic archive</StyledTitle>
        <StyledSubtitle>Забезпечує зберігання первинних документів в електронному вигляді
        </StyledSubtitle>
        <Link>
          <StyledSubtitle>Завантажити презентацію
          </StyledSubtitle>
        </Link>
      </Container>
    </StyledHeader>

    <Container>
      <StyledThereIsWillBeImage>IMAGE SOON</StyledThereIsWillBeImage>

      <StyledHeaderTitle>ФУНКЦІОНАЛ МОДУЛЯ</StyledHeaderTitle>
      <StyledHeaderTitleParagraph>
        &#8226; Виконання операцій над файлами в рамках певного технологічного процесу: перегляд, перевірка, розміщення
        файлів в пакети різних типів і інші)
      </StyledHeaderTitleParagraph>
      {/**/}
      <StyledHeaderTitleParagraph>&#8226; Формування, редагування, видалення пакетів файлів
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Підтримка ЕЦП файлів і пакетів файлів
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Створення нових папок; редагування і видалення існуючих папок; угруповання документів у папки
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Веб-сервіс прийому документів (файлів) з зовнішніх джерел — АБС і віртуального принтера —
        BarsPrintProcessor
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Погашення кредиту — використання рахунку погашення, планове і дострокове погашення, погашення через БПК,
        перерахування по СЕП, використання терміналів самообслуговування (Ibox, Бнк24 і т.д.)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Реструктуризація — підтримка багатьох видів реструктуризації (пролонгація, зміна% ставки, суми кредиту і
        т.д.)
      </StyledHeaderTitleParagraph>

      <StyledThereIsWillBeImage>IMAGE SOON</StyledThereIsWillBeImage>

      <StyledTestMargin />

    </Container>
    {/*<StyledGrid>*/}
    {/*/!*<StyledContact>*!/*/}
    {/*/!*<StyledContactTitle>Контакти</StyledContactTitle>*!/*/}
    {/*/!*<StyledContactText>02152, м. Київ, проспект Павла Тичини, 1В, офіс А</StyledContactText>*!/*/}
    {/*/!*<StyledContactSubtitle>(044) 568-52-11</StyledContactSubtitle>*!/*/}
    {/*/!*<StyledContactText>bars@unity-bars.com</StyledContactText>*!/*/}
    {/*/!*</StyledContact>*!/*/}
    {/*<StyledContact>*/}
    {/*<StyledContactForm>*/}
    {/*<StyledContactFormTitle>Відправити повідомлення</StyledContactFormTitle>*/}
    {/*<StyledContactInput placeholder="Ваше Ім'я"/>*/}
    {/*<StyledContactInput placeholder="Ваш Email"/>*/}
    {/*<StyledContactInput placeholder="Ваш Телефон"/>*/}
    {/*<StyledContactTextarea placeholder="Ваше Повідомлення"/>*/}
    {/*<StyledContactSubmit type="submit" value="Надіслати"/>*/}
    {/*</StyledContactForm>*/}
    {/*</StyledContact>*/}
    {/*</StyledGrid>*/}
  </StyledBackground>
)

export default Electronicarchive
