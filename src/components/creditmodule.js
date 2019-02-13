import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import bg from '../images/products.jpg'


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
   margin-top: 2.5rem;
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
const StyledTestMargin = styled.div`
  margin-bottom: 7rem;
`

const Creditmodule = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Creditmodule</StyledTitle>
        <StyledSubtitle>Система обслуговування кредитної діяльності та автоматизації кредитної установи з повним циклом
          обслуговування клієнтів
        </StyledSubtitle>
        <Link>
          <StyledSubtitle>Завантажити презентацію
          </StyledSubtitle>
        </Link>
      </Container>
    </StyledHeader>

    <Container>
      <StyledHeaderTitle>ФУНКЦІОНАЛ МОДУЛЯ</StyledHeaderTitle>
      <StyledHeaderTitleParagraph>
        &#8226; Заклад кредитного договору — реєстрація позичальника, параметрів кредитної угоди і забезпечення,
        побудова ГПК,
        розрахунок ефективної ставки, формування друкованих форм, авторизація за правилом «двох рук»
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>&#8226; Видача коштів — переказ на картковий рахунок, по довільним платіжними
        реквізитами або
        видача готівки, викликані
        здійснених операції
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Обслуговування кредитного договору — нарахування відсотків, пені, винесення на прострочення,
        автоматичний розбір
        погашень кредиту і т.д.
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Погашення кредиту — використання рахунку погашення, планове і дострокове погашення, погашення через БПК,
        перерахування по СЕП, використання терміналів самообслуговування (Ibox, Бнк24 і т.д.)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Реструктуризація — підтримка багатьох видів реструктуризації (пролонгація, зміна% ставки, суми кредиту і
        т.д.)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Погашення кредиту — використання рахунку погашення, планове і дострокове погашення, погашення через БПК,
        перерахування по СЕП, використання терміналів самообслуговування (Ibox, Бнк24 і т.д.)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Реструктуризація — підтримка багатьох видів реструктуризації (пролонгація, зміна% ставки, суми кредиту і
        т.д.)
      </StyledHeaderTitleParagraph>


      <StyledHeaderTitle>ТЕХНОЛОГІЧІ ОСОБЛИВОСТІ</StyledHeaderTitle>
      <StyledHeaderTitleParagraph>
        &#8226; Відображення всіх транзакцій в режимі он-лайн
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Рольовий підхід — в модулі передбачено набір ролей для виконання різних дій (кредитний інспектор,
        бухгалтер,
        аналітик і т.д.), розподіл прав доступу відповідно до встановленої ролі
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Параметризація — настройка на базі параметрів довідників кредитних продуктів, бухгалтерської моделі
        обліку,
        друкованих шаблонів, операцій
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Розрахунок резерву — «безшовна» інтеграція з модулем розрахунку резерву, автоматичний розрахунок і облік
        резерву
        згідно з постановою НБУ №23
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Інтеграція зі сторонніми системами — можливість взаємодії зі сторонніми системами зокрема з програмним
        забезпеченням з обліку заробітної плати
      </StyledHeaderTitleParagraph>


      <StyledHeaderTitle>МОЖЛИВОСТІ І ПЕРЕВАГИ</StyledHeaderTitle>
      <StyledHeaderTitleParagraph>
        &#8226;  Автоматизація процесів виконання запитів до зовнішніх систем (БКІ, МВС і т.п.) ручних перевірок заявок
        (дзвінок
        на місце роботи і т.д.), перевірка бізнес правил
      </StyledHeaderTitleParagraph>
      <StyledHeaderTitleParagraph>
        &#8226; Можливість розміщення пунктів по роботі з клієнтами в будь-якому місці (реалізація призначеного для
        користувача інтерфейсу на базі Web-технологій)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226;  Пряма взаємодія з пристроями захоплення зображень
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Адаптація робочого процесу і обробки кредитної заявки до вимог замовника
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226;  Орієнтованість на максимальну швидкість обробки кредитної заявки (видача спожитого кредиту без застави
        за 20 хвилин)
      </StyledHeaderTitleParagraph>

      <StyledHeaderTitleParagraph>
        &#8226; Мінімізація ризиків шахрайства шляхом автоматизації підбору параметрів і мінімізації мануального
        введення даних
      </StyledHeaderTitleParagraph>
      <StyledTestMargin />
    </Container>
  </StyledBackground>
)

export default Creditmodule
