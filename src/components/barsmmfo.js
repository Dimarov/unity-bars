import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import office from '../images/fix/office.jpg'
import bg from '../images/fix/products.jpg'
import abs from '../images/fix/abs_mac.png'

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

  }
`

const StyledHeaderSubTitleHuge = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  font-weight: 300;
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

const StyledTable = styled.table`
  width: 100%;
  border: .0625rem solid #000;
  padding: .5rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    padding: 1rem;
  }
`

const StyledTableBody = styled.tbody`
  width: 100%;
`

const StyledTableRow = styled.tr`
  font-family: myriad-pro, sans-serif;
  font-size: .75rem;
  color: #000;
  font-weight: 400;
  opacity: .6;
  border: .0625rem solid #000;
  padding: .5rem;
  text-align: center;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`

const StyledTableColumn = styled.td`
  border: .0625rem solid #000;
  padding: .5rem;
  text-align: center;
  background: ${props => props.heading ? "#e1e1e1" : "none"};

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`

const Barsmmfo = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>BARS MMFO | Core Banking System</StyledTitle>
        <StyledHeaderSubTitleHuge>Забезпечення роботи декількох МФО в централізованій БД.
        </StyledHeaderSubTitleHuge>
        <StyledDownloadLink href={withPrefix('/documents/BARS-MMFO.pdf')} download="BARS-MMFO.pdf">Завантажити Презентацію</StyledDownloadLink>
      </Container>
    </StyledHeader>
    <ImageContainer>
      <AbsImage src={abs} alt="abs-mockup"/>
    </ImageContainer>
    <Container>

      <StyledHeaderTitle>Можливості та Переваги</StyledHeaderTitle>
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

      <StyledTable>
        <StyledTableBody>
          <StyledTableRow>
            <StyledTableColumn>Код</StyledTableColumn>
            <StyledTableColumn>Назва</StyledTableColumn>
            <StyledTableColumn>Опис</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn heading colspan="3">Група модулів "Основні"</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>KRN</StyledTableColumn>
            <StyledTableColumn>Ядро системи</StyledTableColumn>
            <StyledTableColumn>Модуль забезпечує базову функціональність "платформу", до якої відносяться внутрішні системні механізми та утіліти, адміністрування користувачів та підрозділів організації тощо</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CAC</StyledTableColumn>
            <StyledTableColumn>Облік клієнтів</StyledTableColumn>
            <StyledTableColumn>Модуль здійснює облік клієнтів (ФО, ЮО), пов'язаних осіб.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>GL</StyledTableColumn>
            <StyledTableColumn>Головна книга</StyledTableColumn>
            <StyledTableColumn>Модуль забезпечує облік рахунків, документів, операцій.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CASH</StyledTableColumn>
            <StyledTableColumn>Управління роботою кас</StyledTableColumn>
            <StyledTableColumn>Модуль забезпечує оперативну роботу каси</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>ARCH</StyledTableColumn>
            <StyledTableColumn>Архівація оперативних даних</StyledTableColumn>
            <StyledTableColumn>ARC – Архівація та перенесення даних з оперативної до архівної схеми

              Архівація – це винесення застарілих даних до архівного табличного простору, а також можливість винесення файлів даних таких табличних просторів на менш потужніші носії.

            Архівацію можна виконати для партиційованої таблиці, виносячі архівні партиції в окремі таблиці в окремі табличні простори.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INFO</StyledTableColumn>
            <StyledTableColumn>СМС та E-mail інформування</StyledTableColumn>
            <StyledTableColumn>Модуль забезпечує СМС та Email інформування клієнтів за встановленими подіями.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DEALS</StyledTableColumn>
            <StyledTableColumn>Облік угод</StyledTableColumn>
            <StyledTableColumn>DEALS – єдиний модуль обліку угод всіх типів</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>VEGA2</StyledTableColumn>
            <StyledTableColumn>ЕЦП (VEGA2)</StyledTableColumn>
            <StyledTableColumn>Модуль запезпечує накладання ЕЦП (VEGA)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn heading colspan="3">Група модулів "Бізнес"</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CCK</StyledTableColumn>
            <StyledTableColumn>Кредитний портфель фізичних та юридичних осіб</StyledTableColumn>
            <StyledTableColumn>CCK – Обслуговування кредитних договорів ФО та ЮО, Інвентаризація КП ФО

              Включає в себе

              Фронт – Докредитне обстеження позичальника, Введення та авторизація угод, Додадкові угоди, Реструктуризації. Довідки.

              Бек функціонал - нарахування %%, комісій, пені, амортизацій, рознесення сум погашень по заборгованостям, винесення на простроені, закриття угод. Звітність

              ARJK - АРЖК

            Спеціальний функціонал контролю для частин (пулів) кредитного портфелю облік яких ведеться на балансі банку, але ресурс для яких надано іншою фінансовою установою</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>OVR</StyledTableColumn>
            <StyledTableColumn>Овердрафт Банки, ЮО, ФО</StyledTableColumn>
            <StyledTableColumn>OVR – Овердрафт Банки, ЮО, ФО

            Автоматизація роботи з договорами овердрафтів</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>MBDK</StyledTableColumn>
            <StyledTableColumn>Міжбанківські кредити, депозити</StyledTableColumn>
            <StyledTableColumn>MBDK – Міжбанківські кредити, депозити

              Введення угод МБДК;

              Ведення портфелю угод МБДК (формування платежів по розміщенню/залученню, нарахування %%, пролонгація, ролловер, прив'язка угод забезпечень, формування SWIFT-повідомлень)

              - Угоди з фінансовими інститутами

            Ведення 4 видів угод: Залучення кредитів; Залучення депозитів; Розміщення кредитів; Розміщення депозитів</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CRSOUR</StyledTableColumn>
            <StyledTableColumn>Кредитні ресурси</StyledTableColumn>
            <StyledTableColumn>CRSOUR – обслуговування угод на обмін грошовими ресурсами між ЦА та РУ

              Прийом заявок на виконання операцій по угодам Кредитних ресурсів від Аллегро;

              Обробка заявок, підготовка даних для передачі до АБС РУ та ЦА;

              Передача даних до АБС;

            Налаштування зв’язку ЦБД Кредитних ресурсів з АБС.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>WCS</StyledTableColumn>
            <StyledTableColumn>Докредитне обслуговування</StyledTableColumn>
            <StyledTableColumn>WCS – Докредитне обслуговуання

            Вибір умов кредитування; введення даних; автоматичні операції; розгляд службами РУ, ЦА; реєстрація неавторизованого договору у КП АБС; підписання договорів; видача кредиту</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>FXS</StyledTableColumn>
            <StyledTableColumn>FOREX - угоди</StyledTableColumn>
            <StyledTableColumn>FOREX – угоди

              Автоматизація угод по покупці-продажу валюти на міжбанківському ринку

              введення реквізитів угод

              автоматичне формування відповідних проводок

              друк тікета

              збереження реквізитів партнера по угоді

              перегляд робочих рахунків FOREX

              перегляд архіву FOREX–угод

            перегляд Неттінгу FOREX-угод</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CP</StyledTableColumn>
            <StyledTableColumn>Цінні папери</StyledTableColumn>
            <StyledTableColumn>CP – Облік різноманітних видів операцій з пакетами ЦП</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>FCT</StyledTableColumn>
            <StyledTableColumn>Факторінг</StyledTableColumn>
            <StyledTableColumn>FCT – Факторинг

            Ведення портфелю факторингових договорів з клієнтами</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>REZ</StyledTableColumn>
            <StyledTableColumn>Формування резервного фонду</StyledTableColumn>
            <StyledTableColumn>REZ – Резервний фонд

            Автоматизація розрахунку суми резервного фонду банку; автоматичне формування проводок</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>FCH</StyledTableColumn>
            <StyledTableColumn>Ф'ючерси</StyledTableColumn>
            <StyledTableColumn>робота з ф'ючерсами</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>GRN</StyledTableColumn>
            <StyledTableColumn>Документарні операції, гарантії, акредитиви</StyledTableColumn>
            <StyledTableColumn>GRN – Документарні операції, гарантії, акредитиви

            Модуль дає можливість відслідковувати стан Договорів наданих гарантий (ДГ), які знаходяться в Портфелях банку (ПГ),  ЮО, ФО і банків-партнерів окремо</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INS</StyledTableColumn>
            <StyledTableColumn>Страхування</StyledTableColumn>
            <StyledTableColumn>INS – Страхування

            Контроль страхування заставного майна; автоматизація розрахунку комісійної винагороди; контроль лімітів по партнерах - страхових компаніях.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>FINST</StyledTableColumn>
            <StyledTableColumn>Розрахунок фін. стану клієнта ЮО</StyledTableColumn>
            <StyledTableColumn>FINST – Розрахунок фін. стану клієнта ЮО

            Розрахунок та аналіз фінансового стану клієнта на основі даних офіційної звітності клієнта.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>FINP</StyledTableColumn>
            <StyledTableColumn>Розрахунок фін. стану клієнта ФО</StyledTableColumn>
            <StyledTableColumn>FINP – Розрахунок фін. стану клієнта ФО</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>PAWN</StyledTableColumn>
            <StyledTableColumn>Облік забезпечення</StyledTableColumn>
            <StyledTableColumn>Облік забезпечення, що отримане банком</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DPT</StyledTableColumn>
            <StyledTableColumn>Депозити ФО</StyledTableColumn>
            <StyledTableColumn>DPT – Депозитний портфель ФО

              заведення депозитів

              заведення ДУ

              виплата депозитів

              друк документів по депозитам

              CRNV – Облік нерухомих вкладів

            Робота з депозитними договорами клієнтів ФО.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DPU</StyledTableColumn>
            <StyledTableColumn>Депозити ЮО</StyledTableColumn>
            <StyledTableColumn>DPU – Депозити ЮО

            Робота з депозитними договорами клієнтів ЮО.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>SKN</StyledTableColumn>
            <StyledTableColumn>Депозитні скриньки</StyledTableColumn>
            <StyledTableColumn>Облік параметрів депозитних сейфів.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>ZAY</StyledTableColumn>
            <StyledTableColumn>Біржові операції</StyledTableColumn>
            <StyledTableColumn>Робота за заявками клієнтів на купівлю/продаж/конверсію іноземних валют</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>RKO</StyledTableColumn>
            <StyledTableColumn>Розрахунково-касове обслуговування та абонплата</StyledTableColumn>
            <StyledTableColumn>RKO – Розрахунково-касове обслуговування

              ELT – Угоди електронних послуг.

              Нарахування та списання абонплати як виду комісії. Специфіка застосування різних тарифів щодо

              абонплати. Специфіка методики нарахування абонплати в різних КБ.

              CIN – Підтримка централізованої інкасації

              Розрахунок сум плати (комісії), яку стягує банк з клієнтів за РКО і автоматичне формування необхідних проводок.

            Одноразові комісії</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>LOM</StyledTableColumn>
            <StyledTableColumn>Скупка лому дорогоцінних металів</StyledTableColumn>
            <StyledTableColumn>LOM – Скупка лому дорогоцінних металів

              Введення  поточних операцій по скупці та по прийому на експертизу для оцінки виробів із дорогоцінних металів;

              Автоматичне відображення проводками в бухгалтерському обліку банківської установи.

              <em> </em></StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>BRO</StyledTableColumn>
            <StyledTableColumn>Бронювання коштів на рахунках господарюючих органів</StyledTableColumn>
            <StyledTableColumn>BRO – Бронювання коштів на рахунках господарюючих органів

            Ведення договорів клієнтів на тимчасове незниження залишків на поточних рахунках</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>STO</StyledTableColumn>
            <StyledTableColumn>Регулярні платежі</StyledTableColumn>
            <StyledTableColumn>Автоматичне формування платежів при настанні дат.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>NOS</StyledTableColumn>
            <StyledTableColumn>Корр.рахунки ЛОРО та НОСТРО</StyledTableColumn>
            <StyledTableColumn>Портфель ностро договорів

            Робота позиціонера</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>MT</StyledTableColumn>
            <StyledTableColumn>Внутрішньо-банківські, міжбанківські та міжнародні перекази</StyledTableColumn>
            <StyledTableColumn>Модуль «Перекази» дозволяє виконувати переказ готівкових грошових коштів у національній валюті у внутрішній єдиній автоматизованій банківській системі.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CH_1</StyledTableColumn>
            <StyledTableColumn>Дорожні чеки</StyledTableColumn>
            <StyledTableColumn>Збір з підлеглих у станов, формування, відпрака, контроль посилок в інобанки, покриття та розрахунки

            Прийняття чеків на ІНКАССО: РУ відправляє в ЦА, ЦА консолідує та одним пакетом відправляє в банк-емітент.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>EXCL</StyledTableColumn>
            <StyledTableColumn>Спец функціонал</StyledTableColumn>
            <StyledTableColumn>1) Енерго-ринок

              2) Виплата коштів волонтерам Корпуса Миру

              3) Взаємодія з філіями по передачі виробів з БМ

              4) LOT – Фронт-операції, Розрахунки, Звітність по розповсюдженню лотерей

            5) AVKAS – Сервіс оплати документів</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>NU</StyledTableColumn>
            <StyledTableColumn>Податковий облік</StyledTableColumn>
            <StyledTableColumn>NU – Податковий облік

            Ведення та відображення в системі податкового обліку даних фінансового обліку</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn heading colspan="3">Група модулів "Звітність"</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>NBUR</StyledTableColumn>
            <StyledTableColumn>Звітність НБУ</StyledTableColumn>
            <StyledTableColumn>NSI – Ведення класифікаторів звітності НБУ

              Довідники, класифікатори та кодифікатори НБУ та внутрішні довідники для потреб звітності. Надано можливість перегляду та редагування даних в ручному режимі, а також .Доступна функція "Редагування синхронізованих таблиць", що дозволяє завантажувати оновлені довідники в пакетному режимі чи окремо по кожному довіднику, попередньо переглянувши перелік змінених записів.

              OTC – Звітність НБУ для ком. банків

              АРМ для формування файлів звітності НБУ та внутрішньої звітності . Надає можливість формування файлів, перегляд показників, перегляд детального протоколу, редагування показників та збереження даних, а також вивантаження файлу в текстовий файл спеціального формату для відправлення в НБУ

              AUD – Аудит спецпараметрів НБУ

            Функція перевірки параметрів рахунків та клієнтів . Перевіряється  правильність заповнення (чи проставлені значення для обов'язкових параметрів та відповідність цих значень класифікаторам та кодифікаторам НБУ) та узгодженість параметрів між собою.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INTG_DPA</StyledTableColumn>
            <StyledTableColumn>Звітність до органів</StyledTableColumn>
            <StyledTableColumn>@F – Звітність до ДПА по відкритих рахунках

              Обмін файлами (формування файлів, прийом квитанцій) з ДПА.

            NU – Податковий облік КБ. Звітність до ДПА</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DELOIT</StyledTableColumn>
            <StyledTableColumn>Звіти для аудиторів (з АБС)</StyledTableColumn>
            <StyledTableColumn></StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>ANI</StyledTableColumn>
            <StyledTableColumn>Аналітичні звіти</StyledTableColumn>
            <StyledTableColumn>1) Аналіз балансу

              2) Концентрація ресурсів

              3) Залучення та резерв на кор.рах

              4) Аналіз оборотів по кор.рахунку

              5) Аналіз відповідності АКТ та ПАС

              6) Var-аналіз

              7) Аналіз фін.результату за період по бранчам, клієнтам, угодам

              ANB – Аналіз банків (розрахунок лімітів на активні операції)

              ANL – Аналіз клієнтів

              Відстеження роботи клієнтів по ряду статистичних показників, що розраховуються

            Підрахунок загальних доходів-витрат банку в результаті роботи з клієнтами</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn heading colspan="3">Група модулів "Інтеграційні"</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>MGR</StyledTableColumn>
            <StyledTableColumn>Міграція даних з інших систем</StyledTableColumn>
            <StyledTableColumn>Міграція даних з інших систем</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DEBREG</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з "Реєстром боржників"</StyledTableColumn>
            <StyledTableColumn>Моніторинг/поставка інформації по просрочених процентних активах, загальна сума яких по одному клієнту-боржнику перевищує 10 000.00 грн в еквіваленті, на задану дату.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>NSM</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з НСМЕП</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з НСМЕП</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CIG</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з ПВБКІ (Реєстр позичальників)</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з ПВБКІ

            Забезпечення можливості взаємодії АБС «БАРС» з системою ПВБКІ. Предмет взаємодії – дані позичальників банку: фізичних та юридичних осіб (в форматі ПВБКІ).</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>SWT</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з системою SWIFT</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з системою SWIFT

              Обробка вихідних повідомлень:

              Формування повідомлень: МТ103, МТ200, МТ202

              Формування повідомлень: МТ103 з покриттям

              Введення  документів за повідомленнями  МТ103, МТ200, МТ202

              Підбір коррахунку

              Управління експортом повідомлень

              Журнал повідомлень

              Імпорт повідомлень з SWIFT в АБС:

              Обробка вхідних повідомлень

              Імпортовані повідомлення без аутентифікації

              Обробка/розподіл повідомлень

              Формування повідомлень  МТ940/МТ950

              Обробка виписок

            Імпорт довідника учасників</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>SSV</StyledTableColumn>
            <StyledTableColumn>Взаємодія СЕП-СВІФТ-ВПС</StyledTableColumn>
            <StyledTableColumn>Автоматичне розпізнавання РУ отримувача вхідного СВИФТ-повідомлення. Накопичення фільтрів розпізнавання.

              Переформатування платіжних документів різних транспортних систем СЕП-СВІФТ-ВПС-АБС(внутр).

            Лоро-рахунки.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>VMD</StyledTableColumn>
            <StyledTableColumn>Приймання ВМД (валютно-митних декларацій)</StyledTableColumn>
            <StyledTableColumn>Приймання ВМД (валютно-митних декларацій)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>IBOX</StyledTableColumn>
            <StyledTableColumn>Взаємодія з платіжними терміналами</StyledTableColumn>
            <StyledTableColumn>Взаємодія з платіжними терміналами</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DCPN</StyledTableColumn>
            <StyledTableColumn>Інтеграція з депозитарієм ЦП (НБУ)</StyledTableColumn>
            <StyledTableColumn>Інтеграція з депозитарієм ЦП (НБУ)

              <em> </em></StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>RBNBU</StyledTableColumn>
            <StyledTableColumn>Інтеграція з розрахунковим банком (НБУ)</StyledTableColumn>
            <StyledTableColumn>Інтеграція з розрахунковим банком (НБУ)

              <em> </em></StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>RI</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з реєстром інсайдерів</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з реєстром інсайдерів</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INTG_EA</StyledTableColumn>
            <StyledTableColumn>Інтеграція АБС з електронним архівом</StyledTableColumn>
            <StyledTableColumn>Синхронізація з електронним архівом, передача інформації по клієнтам та рахункам депозитного модулю (ФО/ЮО)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INTG_GMSU</StyledTableColumn>
            <StyledTableColumn>Інтеграція АБС і GMSU</StyledTableColumn>
            <StyledTableColumn>Інтеграція АБС - GMSU. Надсилання sms-повідомлень клієнтам про зміни станів рахунків.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DCP</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з депозитарієм цінних паперів</StyledTableColumn>
            <StyledTableColumn>Інтерфейс з депозитарієм цінних паперів

            Імпорт файлів з ДЦП, формування платежів.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INTG_WB</StyledTableColumn>
            <StyledTableColumn>Інтеграція  WAY4 web banking</StyledTableColumn>
            <StyledTableColumn>Взаємодія АБС "БАРС Millennium" з системою Персонального Банкінгу WAY4.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>NDRCRM</StyledTableColumn>
            <StyledTableColumn>Взаємодія з CRM BPMNOnline</StyledTableColumn>
            <StyledTableColumn>Реєстрація клієнта, кредитної угоди в CRM системі BPMOnline з подальшою передачею даних, реєстрацією клієнта, кредитної угоди в АБС БАРС

              <em> </em></StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn></StyledTableColumn>
            <StyledTableColumn>Взаємодія з Microsoft CRM</StyledTableColumn>
            <StyledTableColumn>Вивантаження даних з АБС у CRM систему на рівні файлового обміну</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>BPK</StyledTableColumn>
            <StyledTableColumn>Інтеграція з ПЦ Way4</StyledTableColumn>
            <StyledTableColumn>Реєстрація договорів БПК

              Взаємодія з системою CardMake (синхронізація продуктів Way4, угод БПК)

            Взаємодія з ПЦ Way4 (обмін файлами по зарахуванню/списанню коштів, балансу карткових рахунків)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CARD</StyledTableColumn>
            <StyledTableColumn>Інтеграція з ПЦ УкрКард (УПБ)</StyledTableColumn>
            <StyledTableColumn>Інтеграція з ПЦ УкрКард (УПБ)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>FGV</StyledTableColumn>
            <StyledTableColumn>Взаємодія з фондом гарантування вкладів</StyledTableColumn>
            <StyledTableColumn>Взаємодія з фондом гарантування вкладів</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>SEP+VPS</StyledTableColumn>
            <StyledTableColumn>Підтримка СЕП НБУ та Внутрішня платіжна система банку(за наявності)</StyledTableColumn>
            <StyledTableColumn>cистема термінових переказів (СТП)

              управління СЕП/ВПС  платежами

              управління корр. Рахунком

              управління нез'ясованими платежами

              обробка інформаційних запитів

              управління файлами

              оновлення ключів НБУ

              робота з системою ІПС(інформаційно-пошукова система НБУ)

              розбір нез'ясованих надходжень(розбір 3720)

              зарахування на рахунки  по майбутній даті

            зарахування на рахунки  по альтернативному рахунку 3720</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CORP2</StyledTableColumn>
            <StyledTableColumn>Корпоративний Клієнт-Банк</StyledTableColumn>
            <StyledTableColumn>CORP-2 – Корпоративний Клієнт-Банк

              CORP-2 – система з широким переліком функціональних можливостей, що дозволяє Клієнтам банку цілодобово управляти рахунками, не виходячи з офісу. В системі виконуються: внутрішні та зовнішні перекази; поповнення рахунків; платежі у SWIFT; заявки на купівлю/продаж валюти; зарплатний проект.<em> </em></StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DWHEXP</StyledTableColumn>
            <StyledTableColumn>Вивантаження даних у Сховище даних (DWH)</StyledTableColumn>
            <StyledTableColumn>Вивантаження даних у Сховище даних (DWH)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CLIM</StyledTableColumn>
            <StyledTableColumn>Моніторинг касових лімітів і залишків</StyledTableColumn>
            <StyledTableColumn>Моніторинг касових лімітів і залишків в касі по географії всього банку з центрального офісу, та можливість встановлювати допустимі ліміти на зберігання готівки у касі та оповіщення при їх порушенні</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CDM(CORP)</StyledTableColumn>
            <StyledTableColumn>Інтегрція з Єдиною базою клієнтів</StyledTableColumn>
            <StyledTableColumn>Інтегрція з Єдиною базою клієнтів</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>KFILE</StyledTableColumn>
            <StyledTableColumn>Консолідація К-файлів</StyledTableColumn>
            <StyledTableColumn>Модуль призначений для формування консолідованих файлів звітності та банківських технічних виписок на основі прийнятих від банківських установ файлів К з даними про рух коштів по рахункам корпоративних клієнтів банку.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CRCA</StyledTableColumn>
            <StyledTableColumn>Централізований реєстр компенсаційних рахунків (ЦРКР)</StyledTableColumn>
            <StyledTableColumn>Централізований реєстр компенсаційних рахунків (ЦРКР)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>BICF</StyledTableColumn>
            <StyledTableColumn>Інтеграція ПЗ АБС "БАРС" та модулю Card Managegement "Кредитна фабрика"</StyledTableColumn>
            <StyledTableColumn>Інтеграція ПЗ АБС "БАРС" та модулю Card Managegement "Кредитна фабрика"</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INTG_CRNV</StyledTableColumn>
            <StyledTableColumn>ЦРНВ (нерухомі вклади)</StyledTableColumn>
            <StyledTableColumn>нерухомі вклади</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INTG_RRODB</StyledTableColumn>
            <StyledTableColumn>Реєстр вкладників Родовід банку</StyledTableColumn>
            <StyledTableColumn>Реєстр вкладників Родовід банку</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>INTG_CRV</StyledTableColumn>
            <StyledTableColumn>ЦРВ (центральний реєстр вкладників СССР)</StyledTableColumn>
            <StyledTableColumn>ЦРВ (центральний реєстр вкладників СССР)</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn heading colspan="3">Група модулів "Управління/Моніторинг/Контроль"</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>KST</StyledTableColumn>
            <StyledTableColumn>Кошторис</StyledTableColumn>
            <StyledTableColumn>KST – Кошторис

            Передавання та приймання даних за проводками по рахункам, необхідних для контролю виконня кошторису.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>BUDG</StyledTableColumn>
            <StyledTableColumn>Бюджетування. План-факт</StyledTableColumn>
            <StyledTableColumn>В розрізі символів (що визначено банком-замовником) та Бранчів-2.

              Функції моделювання та вводу позицій "План" .

            Розрахунок позицій "Факт" та "Відхилення" за різні звітні періоди. Динаміка.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>CIM</StyledTableColumn>
            <StyledTableColumn>Валютний контроль</StyledTableColumn>
            <StyledTableColumn>CIM – Валютний контроль

            Ведення контрактів по експортним і імпортним операціям в розрізі клієнтів, валют контрактів, типів контрактів.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>DBT</StyledTableColumn>
            <StyledTableColumn>Господарська дебіторка</StyledTableColumn>
            <StyledTableColumn>XOZ – Автоматичне відслідковування фактів дебетування окремо визначених котлових рахунків (тип XOZ). Контроль за їх своєчасним та коректним закриттям . Розрахунок резерву на звітну дату згідно 23 постанови НБУ.</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>LCS</StyledTableColumn>
            <StyledTableColumn>Контроль валютообмінних операцій</StyledTableColumn>
            <StyledTableColumn>LCS – Контроль за валютообміннимим операціями

            Контроль за переказами іноземної валюти, що здійснюються за дорученням ФО</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>FINMON</StyledTableColumn>
            <StyledTableColumn>Фінансовий моніторинг - реєстр</StyledTableColumn>
            <StyledTableColumn>1. Реєстр – Обслуговування реєстру операцій, щодо яких здійснюється повідомлення органів СДФМ

              2. Анкети:

              заповнення детальної інформації щодо клієнта;

              заповнення інформації щодо пов'язаних осіб;

              автоматичне формування електронних анкет клієнтів.

            3. Блокування операцій - Ведення реєстру осіб, пов'язаних з тероризмом; здійснення             призупинення та повідмлення про операції, що є підозрілими для ФМ</StyledTableColumn>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableColumn>MTV</StyledTableColumn>
            <StyledTableColumn>Система мотивації персоналу банку</StyledTableColumn>
            <StyledTableColumn>Довідник "операцій банку" з поділом на:

              Автоматичні (такі, що можна вичленити з АБС)

              Ручні (не можна вичленити з АБС, інформація про них вноситься вручну)

            Бальна система оцінки операцій різних типів. Набір звітів про кількість різних операцій та їх бальна оцінка за період в розборі календарних днів та Бранчів-3</StyledTableColumn>
          </StyledTableRow>
        </StyledTableBody>
      </StyledTable>

      <StyledTestMargin/>
    </Container>
  </StyledBackground>
)

export default Barsmmfo
