import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'

import office from '../images/fix/office.jpg'
import abs from '../images/fix/abs_mac.png'
import absr from '../images/fix/abs_r.png'

import DownloadForm from './download-form'

const Background = styled.div`
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

const Header = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${office});
  background-size: cover;
  background-attachment: fixed;
  padding: 8rem 1rem;
`

const Title = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
`

const Subtitle = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
`

const DownloadLink = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3ec4e1;
  margin: 0.5rem 0;
  text-decoration: none;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const ParagraphText = styled.div`
  font-family: myriad-pro, sans-serif;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 200;
  color: #000;

  @media screen and (max-width: 60rem) {
    margin: 1.3rem;
  }
`

const TitleBlackColor = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: #000;
  margin: 4rem 0 3rem 0;

  @media screen and (max-width: 60rem) {
    margin: 0.5rem;
  }
`

const ThereIsWillBeImage = styled.h1`
  font-family: myriad-pro, sans-serif;
  font-size: 4rem;
  text-align: center;
  background-color: red;
  height: 32rem;
  color: #000;
  margin: 4rem 0 3rem 0;
`

const HeaderTitleParagraph = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 1.25rem;
  color: #000;
  font-weight: 400;
  margin: 0 0 1.3rem 0;
  opacity: 0.8;

  @media screen and (max-width: 60rem) {
    margin: 1rem 0;
  }
`

const HeaderSubTitleHuge = styled.div`
  font-family: myriad-pro, sans-serif;
  font-size: 2rem;
  line-height: 32px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 2rem;
`

const HeaderTitle = styled.div`
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

const TestMargin = styled.div`
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

const Table = styled.table`
  width: 100%;
  border: 0.0625rem solid #000;
  padding: 0.5rem;
  margin: 1rem 0 0;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    padding: 1rem;
  }
`

const TableBody = styled.tbody`
  width: 100%;
`

const TableRow = styled.tr`
  font-family: myriad-pro, sans-serif;
  font-size: 0.75rem;
  color: #000;
  font-weight: 400;
  opacity: 0.6;
  border: 0.0625rem solid #000;
  padding: 0.5rem;
  text-align: center;

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`

const TableColumn = styled.td`
  border: 0.0625rem solid #000;
  padding: 0.5rem;
  text-align: center;
  background: ${props => (props.heading ? '#e1e1e1' : 'none')};

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`

class Absbars extends React.Component {
  render() {
    const { t } = this.props

    return (
      <Background>
        <Header>
          <Container>
            <Title>ABS BARS | Core Banking System</Title>
            <HeaderSubTitleHuge>{t('Description')}</HeaderSubTitleHuge>
          </Container>
        </Header>
        <ImageContainer>
          <AbsImage src={abs} alt="abs-mockup" />
        </ImageContainer>

        <Container>
          <HeaderTitle>{t('Capabilities.Title')}</HeaderTitle>
          <HeaderTitleParagraph>{t('Capabilities.Line1')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line2')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line3')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line4')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line5')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line6')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line7')}</HeaderTitleParagraph>
          <br />
          <br />
          <HeaderTitleParagraph>{t('Capabilities.Line8')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>{t('Capabilities.Line9')}</HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line10')}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line11')}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line12')}
          </HeaderTitleParagraph>

          <HeaderTitleParagraph>
            {t('Capabilities.Line13')}
          </HeaderTitleParagraph>
          <DownloadForm pdfFile="ABS-BARS.pdf" pdfURL="/documents/ABS-BARS.pdf" pageURL="/pages/absbars" />
        </Container>
        <Container>
          <Table>
            <TableBody>
              <TableRow>
                <TableColumn>Код</TableColumn>
                <TableColumn>Назва</TableColumn>
                <TableColumn>Опис</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  Група модулів "Основні"
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>KRN</TableColumn>
                <TableColumn>Ядро системи</TableColumn>
                <TableColumn>
                  Модуль забезпечує базову функціональність "платформу", до якої
                  відносяться внутрішні системні механізми та утіліти,
                  адміністрування користувачів та підрозділів організації тощо
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CAC</TableColumn>
                <TableColumn>Облік клієнтів</TableColumn>
                <TableColumn>
                  Модуль здійснює облік клієнтів (ФО, ЮО), пов'язаних осіб.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>GL</TableColumn>
                <TableColumn>Головна книга</TableColumn>
                <TableColumn>
                  Модуль забезпечує облік рахунків, документів, операцій.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CASH</TableColumn>
                <TableColumn>Управління роботою кас</TableColumn>
                <TableColumn>
                  Модуль забезпечує оперативну роботу каси
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>ARCH</TableColumn>
                <TableColumn>Архівація оперативних даних</TableColumn>
                <TableColumn>
                  ARC – Архівація та перенесення даних з оперативної до архівної
                  схеми Архівація – це винесення застарілих даних до архівного
                  табличного простору, а також можливість винесення файлів даних
                  таких табличних просторів на менш потужніші носії. Архівацію
                  можна виконати для партиційованої таблиці, виносячі архівні
                  партиції в окремі таблиці в окремі табличні простори.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INFO</TableColumn>
                <TableColumn>СМС та E-mail інформування</TableColumn>
                <TableColumn>
                  Модуль забезпечує СМС та Email інформування клієнтів за
                  встановленими подіями.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DEALS</TableColumn>
                <TableColumn>Облік угод</TableColumn>
                <TableColumn>
                  DEALS – єдиний модуль обліку угод всіх типів
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>VEGA2</TableColumn>
                <TableColumn>ЕЦП (VEGA2)</TableColumn>
                <TableColumn>
                  Модуль запезпечує накладання ЕЦП (VEGA)
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  Група модулів "Бізнес"
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CCK</TableColumn>
                <TableColumn>
                  Кредитний портфель фізичних та юридичних осіб
                </TableColumn>
                <TableColumn>
                  CCK – Обслуговування кредитних договорів ФО та ЮО,
                  Інвентаризація КП ФО Включає в себе Фронт – Докредитне
                  обстеження позичальника, Введення та авторизація угод,
                  Додадкові угоди, Реструктуризації. Довідки. Бек функціонал -
                  нарахування %%, комісій, пені, амортизацій, рознесення сум
                  погашень по заборгованостям, винесення на простроені, закриття
                  угод. Звітність ARJK - АРЖК Спеціальний функціонал контролю
                  для частин (пулів) кредитного портфелю облік яких ведеться на
                  балансі банку, але ресурс для яких надано іншою фінансовою
                  установою
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>OVR</TableColumn>
                <TableColumn>Овердрафт Банки, ЮО, ФО</TableColumn>
                <TableColumn>
                  OVR – Овердрафт Банки, ЮО, ФО Автоматизація роботи з
                  договорами овердрафтів
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>MBDK</TableColumn>
                <TableColumn>Міжбанківські кредити, депозити</TableColumn>
                <TableColumn>
                  MBDK – Міжбанківські кредити, депозити Введення угод МБДК;
                  Ведення портфелю угод МБДК (формування платежів по
                  розміщенню/залученню, нарахування %%, пролонгація, ролловер,
                  прив'язка угод забезпечень, формування SWIFT-повідомлень) -
                  Угоди з фінансовими інститутами Ведення 4 видів угод:
                  Залучення кредитів; Залучення депозитів; Розміщення кредитів;
                  Розміщення депозитів
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CRSOUR</TableColumn>
                <TableColumn>Кредитні ресурси</TableColumn>
                <TableColumn>
                  CRSOUR – обслуговування угод на обмін грошовими ресурсами між
                  ЦА та РУ Прийом заявок на виконання операцій по угодам
                  Кредитних ресурсів від Аллегро; Обробка заявок, підготовка
                  даних для передачі до АБС РУ та ЦА; Передача даних до АБС;
                  Налаштування зв’язку ЦБД Кредитних ресурсів з АБС.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>WCS</TableColumn>
                <TableColumn>Докредитне обслуговування</TableColumn>
                <TableColumn>
                  WCS – Докредитне обслуговуання Вибір умов кредитування;
                  введення даних; автоматичні операції; розгляд службами РУ, ЦА;
                  реєстрація неавторизованого договору у КП АБС; підписання
                  договорів; видача кредиту
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FXS</TableColumn>
                <TableColumn>FOREX - угоди</TableColumn>
                <TableColumn>
                  FOREX – угоди Автоматизація угод по покупці-продажу валюти на
                  міжбанківському ринку введення реквізитів угод автоматичне
                  формування відповідних проводок друк тікета збереження
                  реквізитів партнера по угоді перегляд робочих рахунків FOREX
                  перегляд архіву FOREX–угод перегляд Неттінгу FOREX-угод
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CP</TableColumn>
                <TableColumn>Цінні папери</TableColumn>
                <TableColumn>
                  CP – Облік різноманітних видів операцій з пакетами ЦП
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FCT</TableColumn>
                <TableColumn>Факторінг</TableColumn>
                <TableColumn>
                  FCT – Факторинг Ведення портфелю факторингових договорів з
                  клієнтами
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>REZ</TableColumn>
                <TableColumn>Формування резервного фонду</TableColumn>
                <TableColumn>
                  REZ – Резервний фонд Автоматизація розрахунку суми резервного
                  фонду банку; автоматичне формування проводок
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FCH</TableColumn>
                <TableColumn>Ф'ючерси</TableColumn>
                <TableColumn>робота з ф'ючерсами</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>GRN</TableColumn>
                <TableColumn>
                  Документарні операції, гарантії, акредитиви
                </TableColumn>
                <TableColumn>
                  GRN – Документарні операції, гарантії, акредитиви Модуль дає
                  можливість відслідковувати стан Договорів наданих гарантий
                  (ДГ), які знаходяться в Портфелях банку (ПГ), ЮО, ФО і
                  банків-партнерів окремо
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INS</TableColumn>
                <TableColumn>Страхування</TableColumn>
                <TableColumn>
                  INS – Страхування Контроль страхування заставного майна;
                  автоматизація розрахунку комісійної винагороди; контроль
                  лімітів по партнерах - страхових компаніях.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FINST</TableColumn>
                <TableColumn>Розрахунок фін. стану клієнта ЮО</TableColumn>
                <TableColumn>
                  FINST – Розрахунок фін. стану клієнта ЮО Розрахунок та аналіз
                  фінансового стану клієнта на основі даних офіційної звітності
                  клієнта.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FINP</TableColumn>
                <TableColumn>Розрахунок фін. стану клієнта ФО</TableColumn>
                <TableColumn>
                  FINP – Розрахунок фін. стану клієнта ФО
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>PAWN</TableColumn>
                <TableColumn>Облік забезпечення</TableColumn>
                <TableColumn>
                  Облік забезпечення, що отримане банком
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DPT</TableColumn>
                <TableColumn>Депозити ФО</TableColumn>
                <TableColumn>
                  DPT – Депозитний портфель ФО заведення депозитів заведення ДУ
                  виплата депозитів друк документів по депозитам CRNV – Облік
                  нерухомих вкладів Робота з депозитними договорами клієнтів ФО.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DPU</TableColumn>
                <TableColumn>Депозити ЮО</TableColumn>
                <TableColumn>
                  DPU – Депозити ЮО Робота з депозитними договорами клієнтів ЮО.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>SKN</TableColumn>
                <TableColumn>Депозитні скриньки</TableColumn>
                <TableColumn>Облік параметрів депозитних сейфів.</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>ZAY</TableColumn>
                <TableColumn>Біржові операції</TableColumn>
                <TableColumn>
                  Робота за заявками клієнтів на купівлю/продаж/конверсію
                  іноземних валют
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>RKO</TableColumn>
                <TableColumn>
                  Розрахунково-касове обслуговування та абонплата
                </TableColumn>
                <TableColumn>
                  RKO – Розрахунково-касове обслуговування ELT – Угоди
                  електронних послуг. Нарахування та списання абонплати як виду
                  комісії. Специфіка застосування різних тарифів щодо абонплати.
                  Специфіка методики нарахування абонплати в різних КБ. CIN –
                  Підтримка централізованої інкасації Розрахунок сум плати
                  (комісії), яку стягує банк з клієнтів за РКО і автоматичне
                  формування необхідних проводок. Одноразові комісії
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>LOM</TableColumn>
                <TableColumn>Скупка лому дорогоцінних металів</TableColumn>
                <TableColumn>
                  LOM – Скупка лому дорогоцінних металів Введення поточних
                  операцій по скупці та по прийому на експертизу для оцінки
                  виробів із дорогоцінних металів; Автоматичне відображення
                  проводками в бухгалтерському обліку банківської установи.
                  <em> </em>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>BRO</TableColumn>
                <TableColumn>
                  Бронювання коштів на рахунках господарюючих органів
                </TableColumn>
                <TableColumn>
                  BRO – Бронювання коштів на рахунках господарюючих органів
                  Ведення договорів клієнтів на тимчасове незниження залишків на
                  поточних рахунках
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>STO</TableColumn>
                <TableColumn>Регулярні платежі</TableColumn>
                <TableColumn>
                  Автоматичне формування платежів при настанні дат.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>NOS</TableColumn>
                <TableColumn>Корр.рахунки ЛОРО та НОСТРО</TableColumn>
                <TableColumn>
                  Портфель ностро договорів Робота позиціонера
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>MT</TableColumn>
                <TableColumn>
                  Внутрішньо-банківські, міжбанківські та міжнародні перекази
                </TableColumn>
                <TableColumn>
                  Модуль «Перекази» дозволяє виконувати переказ готівкових
                  грошових коштів у національній валюті у внутрішній єдиній
                  автоматизованій банківській системі.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CH_1</TableColumn>
                <TableColumn>Дорожні чеки</TableColumn>
                <TableColumn>
                  Збір з підлеглих у станов, формування, відпрака, контроль
                  посилок в інобанки, покриття та розрахунки Прийняття чеків на
                  ІНКАССО: РУ відправляє в ЦА, ЦА консолідує та одним пакетом
                  відправляє в банк-емітент.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>EXCL</TableColumn>
                <TableColumn>Спец функціонал</TableColumn>
                <TableColumn>
                  1) Енерго-ринок 2) Виплата коштів волонтерам Корпуса Миру 3)
                  Взаємодія з філіями по передачі виробів з БМ 4) LOT –
                  Фронт-операції, Розрахунки, Звітність по розповсюдженню
                  лотерей 5) AVKAS – Сервіс оплати документів
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>NU</TableColumn>
                <TableColumn>Податковий облік</TableColumn>
                <TableColumn>
                  NU – Податковий облік Ведення та відображення в системі
                  податкового обліку даних фінансового обліку
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  Група модулів "Звітність"
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>NBUR</TableColumn>
                <TableColumn>Звітність НБУ</TableColumn>
                <TableColumn>
                  NSI – Ведення класифікаторів звітності НБУ Довідники,
                  класифікатори та кодифікатори НБУ та внутрішні довідники для
                  потреб звітності. Надано можливість перегляду та редагування
                  даних в ручному режимі, а також .Доступна функція "Редагування
                  синхронізованих таблиць", що дозволяє завантажувати оновлені
                  довідники в пакетному режимі чи окремо по кожному довіднику,
                  попередньо переглянувши перелік змінених записів. OTC –
                  Звітність НБУ для ком. банків АРМ для формування файлів
                  звітності НБУ та внутрішньої звітності . Надає можливість
                  формування файлів, перегляд показників, перегляд детального
                  протоколу, редагування показників та збереження даних, а також
                  вивантаження файлу в текстовий файл спеціального формату для
                  відправлення в НБУ AUD – Аудит спецпараметрів НБУ Функція
                  перевірки параметрів рахунків та клієнтів . Перевіряється
                  правильність заповнення (чи проставлені значення для
                  обов'язкових параметрів та відповідність цих значень
                  класифікаторам та кодифікаторам НБУ) та узгодженість
                  параметрів між собою.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INTG_DPA</TableColumn>
                <TableColumn>Звітність до органів</TableColumn>
                <TableColumn>
                  @F – Звітність до ДПА по відкритих рахунках Обмін файлами
                  (формування файлів, прийом квитанцій) з ДПА. NU – Податковий
                  облік КБ. Звітність до ДПА
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DELOIT</TableColumn>
                <TableColumn>Звіти для аудиторів (з АБС)</TableColumn>
                <TableColumn />
              </TableRow>
              <TableRow>
                <TableColumn>ANI</TableColumn>
                <TableColumn>Аналітичні звіти</TableColumn>
                <TableColumn>
                  1) Аналіз балансу 2) Концентрація ресурсів 3) Залучення та
                  резерв на кор.рах 4) Аналіз оборотів по кор.рахунку 5) Аналіз
                  відповідності АКТ та ПАС 6) Var-аналіз 7) Аналіз
                  фін.результату за період по бранчам, клієнтам, угодам ANB –
                  Аналіз банків (розрахунок лімітів на активні операції) ANL –
                  Аналіз клієнтів Відстеження роботи клієнтів по ряду
                  статистичних показників, що розраховуються Підрахунок
                  загальних доходів-витрат банку в результаті роботи з клієнтами
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  Група модулів "Інтеграційні"
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>MGR</TableColumn>
                <TableColumn>Міграція даних з інших систем</TableColumn>
                <TableColumn>Міграція даних з інших систем</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DEBREG</TableColumn>
                <TableColumn>Інтерфейс з "Реєстром боржників"</TableColumn>
                <TableColumn>
                  Моніторинг/поставка інформації по просрочених процентних
                  активах, загальна сума яких по одному клієнту-боржнику
                  перевищує 10 000.00 грн в еквіваленті, на задану дату.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>NSM</TableColumn>
                <TableColumn>Інтерфейс з НСМЕП</TableColumn>
                <TableColumn>Інтерфейс з НСМЕП</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CIG</TableColumn>
                <TableColumn>
                  Інтерфейс з ПВБКІ (Реєстр позичальників)
                </TableColumn>
                <TableColumn>
                  Інтерфейс з ПВБКІ Забезпечення можливості взаємодії АБС «БАРС»
                  з системою ПВБКІ. Предмет взаємодії – дані позичальників
                  банку: фізичних та юридичних осіб (в форматі ПВБКІ).
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>SWT</TableColumn>
                <TableColumn>Інтерфейс з системою SWIFT</TableColumn>
                <TableColumn>
                  Інтерфейс з системою SWIFT Обробка вихідних повідомлень:
                  Формування повідомлень: МТ103, МТ200, МТ202 Формування
                  повідомлень: МТ103 з покриттям Введення документів за
                  повідомленнями МТ103, МТ200, МТ202 Підбір коррахунку
                  Управління експортом повідомлень Журнал повідомлень Імпорт
                  повідомлень з SWIFT в АБС: Обробка вхідних повідомлень
                  Імпортовані повідомлення без аутентифікації Обробка/розподіл
                  повідомлень Формування повідомлень МТ940/МТ950 Обробка виписок
                  Імпорт довідника учасників
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>SSV</TableColumn>
                <TableColumn>Взаємодія СЕП-СВІФТ-ВПС</TableColumn>
                <TableColumn>
                  Автоматичне розпізнавання РУ отримувача вхідного
                  СВИФТ-повідомлення. Накопичення фільтрів розпізнавання.
                  Переформатування платіжних документів різних транспортних
                  систем СЕП-СВІФТ-ВПС-АБС(внутр). Лоро-рахунки.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>VMD</TableColumn>
                <TableColumn>
                  Приймання ВМД (валютно-митних декларацій)
                </TableColumn>
                <TableColumn>
                  Приймання ВМД (валютно-митних декларацій)
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>IBOX</TableColumn>
                <TableColumn>Взаємодія з платіжними терміналами</TableColumn>
                <TableColumn>Взаємодія з платіжними терміналами</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DCPN</TableColumn>
                <TableColumn>Інтеграція з депозитарієм ЦП (НБУ)</TableColumn>
                <TableColumn>
                  Інтеграція з депозитарієм ЦП (НБУ)
                  <em> </em>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>RBNBU</TableColumn>
                <TableColumn>
                  Інтеграція з розрахунковим банком (НБУ)
                </TableColumn>
                <TableColumn>
                  Інтеграція з розрахунковим банком (НБУ)
                  <em> </em>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>RI</TableColumn>
                <TableColumn>Інтерфейс з реєстром інсайдерів</TableColumn>
                <TableColumn>Інтерфейс з реєстром інсайдерів</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INTG_EA</TableColumn>
                <TableColumn>Інтеграція АБС з електронним архівом</TableColumn>
                <TableColumn>
                  Синхронізація з електронним архівом, передача інформації по
                  клієнтам та рахункам депозитного модулю (ФО/ЮО)
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INTG_GMSU</TableColumn>
                <TableColumn>Інтеграція АБС і GMSU</TableColumn>
                <TableColumn>
                  Інтеграція АБС - GMSU. Надсилання sms-повідомлень клієнтам про
                  зміни станів рахунків.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DCP</TableColumn>
                <TableColumn>
                  Інтерфейс з депозитарієм цінних паперів
                </TableColumn>
                <TableColumn>
                  Інтерфейс з депозитарієм цінних паперів Імпорт файлів з ДЦП,
                  формування платежів.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INTG_WB</TableColumn>
                <TableColumn>Інтеграція WAY4 web banking</TableColumn>
                <TableColumn>
                  Взаємодія АБС "БАРС Millennium" з системою Персонального
                  Банкінгу WAY4.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>NDRCRM</TableColumn>
                <TableColumn>Взаємодія з CRM BPMNOnline</TableColumn>
                <TableColumn>
                  Реєстрація клієнта, кредитної угоди в CRM системі BPMOnline з
                  подальшою передачею даних, реєстрацією клієнта, кредитної
                  угоди в АБС БАРС
                  <em> </em>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn />
                <TableColumn>Взаємодія з Microsoft CRM</TableColumn>
                <TableColumn>
                  Вивантаження даних з АБС у CRM систему на рівні файлового
                  обміну
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>BPK</TableColumn>
                <TableColumn>Інтеграція з ПЦ Way4</TableColumn>
                <TableColumn>
                  Реєстрація договорів БПК Взаємодія з системою CardMake
                  (синхронізація продуктів Way4, угод БПК) Взаємодія з ПЦ Way4
                  (обмін файлами по зарахуванню/списанню коштів, балансу
                  карткових рахунків)
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CARD</TableColumn>
                <TableColumn>Інтеграція з ПЦ УкрКард (УПБ)</TableColumn>
                <TableColumn>Інтеграція з ПЦ УкрКард (УПБ)</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FGV</TableColumn>
                <TableColumn>
                  Взаємодія з фондом гарантування вкладів
                </TableColumn>
                <TableColumn>
                  Взаємодія з фондом гарантування вкладів
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>SEP+VPS</TableColumn>
                <TableColumn>
                  Підтримка СЕП НБУ та Внутрішня платіжна система банку(за
                  наявності)
                </TableColumn>
                <TableColumn>
                  cистема термінових переказів (СТП) управління СЕП/ВПС
                  платежами управління корр. Рахунком управління нез'ясованими
                  платежами обробка інформаційних запитів управління файлами
                  оновлення ключів НБУ робота з системою
                  ІПС(інформаційно-пошукова система НБУ) розбір нез'ясованих
                  надходжень(розбір 3720) зарахування на рахунки по майбутній
                  даті зарахування на рахунки по альтернативному рахунку 3720
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CORP2</TableColumn>
                <TableColumn>Корпоративний Клієнт-Банк</TableColumn>
                <TableColumn>
                  CORP-2 – Корпоративний Клієнт-Банк CORP-2 – система з широким
                  переліком функціональних можливостей, що дозволяє Клієнтам
                  банку цілодобово управляти рахунками, не виходячи з офісу. В
                  системі виконуються: внутрішні та зовнішні перекази;
                  поповнення рахунків; платежі у SWIFT; заявки на купівлю/продаж
                  валюти; зарплатний проект.
                  <em> </em>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DWHEXP</TableColumn>
                <TableColumn>
                  Вивантаження даних у Сховище даних (DWH)
                </TableColumn>
                <TableColumn>
                  Вивантаження даних у Сховище даних (DWH)
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CLIM</TableColumn>
                <TableColumn>Моніторинг касових лімітів і залишків</TableColumn>
                <TableColumn>
                  Моніторинг касових лімітів і залишків в касі по географії
                  всього банку з центрального офісу, та можливість встановлювати
                  допустимі ліміти на зберігання готівки у касі та оповіщення
                  при їх порушенні
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CDM(CORP)</TableColumn>
                <TableColumn>Інтегрція з Єдиною базою клієнтів</TableColumn>
                <TableColumn>Інтегрція з Єдиною базою клієнтів</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>KFILE</TableColumn>
                <TableColumn>Консолідація К-файлів</TableColumn>
                <TableColumn>
                  Модуль призначений для формування консолідованих файлів
                  звітності та банківських технічних виписок на основі прийнятих
                  від банківських установ файлів К з даними про рух коштів по
                  рахункам корпоративних клієнтів банку.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CRCA</TableColumn>
                <TableColumn>
                  Централізований реєстр компенсаційних рахунків (ЦРКР)
                </TableColumn>
                <TableColumn>
                  Централізований реєстр компенсаційних рахунків (ЦРКР)
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>BICF</TableColumn>
                <TableColumn>
                  Інтеграція ПЗ АБС "БАРС" та модулю Card Managegement "Кредитна
                  фабрика"
                </TableColumn>
                <TableColumn>
                  Інтеграція ПЗ АБС "БАРС" та модулю Card Managegement "Кредитна
                  фабрика"
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INTG_CRNV</TableColumn>
                <TableColumn>ЦРНВ (нерухомі вклади)</TableColumn>
                <TableColumn>нерухомі вклади</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INTG_RRODB</TableColumn>
                <TableColumn>Реєстр вкладників Родовід банку</TableColumn>
                <TableColumn>Реєстр вкладників Родовід банку</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>INTG_CRV</TableColumn>
                <TableColumn>
                  ЦРВ (центральний реєстр вкладників СССР)
                </TableColumn>
                <TableColumn>
                  ЦРВ (центральний реєстр вкладників СССР)
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn heading colspan="3">
                  Група модулів "Управління/Моніторинг/Контроль"
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>KST</TableColumn>
                <TableColumn>Кошторис</TableColumn>
                <TableColumn>
                  KST – Кошторис Передавання та приймання даних за проводками по
                  рахункам, необхідних для контролю виконня кошторису.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>BUDG</TableColumn>
                <TableColumn>Бюджетування. План-факт</TableColumn>
                <TableColumn>
                  В розрізі символів (що визначено банком-замовником) та
                  Бранчів-2. Функції моделювання та вводу позицій "План" .
                  Розрахунок позицій "Факт" та "Відхилення" за різні звітні
                  періоди. Динаміка.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>CIM</TableColumn>
                <TableColumn>Валютний контроль</TableColumn>
                <TableColumn>
                  CIM – Валютний контроль Ведення контрактів по експортним і
                  імпортним операціям в розрізі клієнтів, валют контрактів,
                  типів контрактів.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>DBT</TableColumn>
                <TableColumn>Господарська дебіторка</TableColumn>
                <TableColumn>
                  XOZ – Автоматичне відслідковування фактів дебетування окремо
                  визначених котлових рахунків (тип XOZ). Контроль за їх
                  своєчасним та коректним закриттям . Розрахунок резерву на
                  звітну дату згідно 23 постанови НБУ.
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>LCS</TableColumn>
                <TableColumn>Контроль валютообмінних операцій</TableColumn>
                <TableColumn>
                  LCS – Контроль за валютообміннимим операціями Контроль за
                  переказами іноземної валюти, що здійснюються за дорученням ФО
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FINMON</TableColumn>
                <TableColumn>Фінансовий моніторинг - реєстр</TableColumn>
                <TableColumn>
                  1. Реєстр – Обслуговування реєстру операцій, щодо яких
                  здійснюється повідомлення органів СДФМ 2. Анкети: заповнення
                  детальної інформації щодо клієнта; заповнення інформації щодо
                  пов'язаних осіб; автоматичне формування електронних анкет
                  клієнтів. 3. Блокування операцій - Ведення реєстру осіб,
                  пов'язаних з тероризмом; здійснення призупинення та
                  повідмлення про операції, що є підозрілими для ФМ
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>MTV</TableColumn>
                <TableColumn>Система мотивації персоналу банку</TableColumn>
                <TableColumn>
                  Довідник "операцій банку" з поділом на: Автоматичні (такі, що
                  можна вичленити з АБС) Ручні (не можна вичленити з АБС,
                  інформація про них вноситься вручну) Бальна система оцінки
                  операцій різних типів. Набір звітів про кількість різних
                  операцій та їх бальна оцінка за період в розборі календарних
                  днів та Бранчів-3
                </TableColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
        <ImageContainer>
          <AbsImage src={absr} alt="abs-mockup" />
        </ImageContainer>
        <Container>
          <HeaderTitleParagraph>{t('Line1')}</HeaderTitleParagraph>
          <HeaderTitleParagraph>{t('Line2')}</HeaderTitleParagraph>
          <HeaderTitleParagraph>{t('Line3')}</HeaderTitleParagraph>
          <TestMargin />
        </Container>
      </Background>
    )
  }
}

export default translate('Absbars')(Absbars)
