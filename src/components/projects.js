import React from 'react'
import styled from "styled-components"

import bg from "../images/products.jpg"
import office from '../images/fix/office4.jpg'
import bankid from "../images/projects/bankid.png"
import prozorro from "../images/projects/prozorro.png"
import edata from "../images/projects/edata.png"
import eauction from "../images/projects/eauction.png"

const Background = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 960px;
  margin: 0 auto;
`

const Header = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${office});
  background-size: cover;
  background-attachment: fixed;
  padding: 8rem 1rem;
`

const Title = styled.h1`
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

const Grid = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Project = styled.div`
  width: 100%;
  height: auto;
  border-radius: .125rem;
  background: #F0F0F0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 2rem 0;
  margin-bottom: 1.5rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 20rem;
    padding: 1rem;
  }
`

const ProjectPhoto = styled.div`
  height: 6rem;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  flex: 0 0 100%;
  margin: 1rem 0;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    height: 16rem;
    flex: 0 0 20%;
  }
`

 const ProjectInfo = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    flex: 0 0 80%;
  }
 `

const ProjectTitle = styled.a`
  text-decoration: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: 1rem 2rem .5rem;
  cursor: pointer;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 2rem;
  }
`

const ProjectSubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #1A1A1A;
  opacity: .8;
  margin: .5rem 2rem .5rem;
`

const ProjectText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #1A1A1A;
  margin: .25rem 2rem;
  opacity: .6;
`

const Projects = (props) => (
  <Background>
    <Header>
      <Container>
        <Title>Проекти</Title>
        <Subtitle>Unity-Bars приймає участь у новітніх проектах України</Subtitle>
      </Container>
    </Header>
    <Grid>
      <Project>
        <ProjectPhoto image={bankid} />
        <ProjectInfo>
          <ProjectTitle href="https://id.bank.gov.ua/" >BANKID</ProjectTitle>
          <ProjectSubtitle>
            Спосіб електронної ідентифікації громадян через українські банки для надання адміністративних послуг через Інтернет
          </ProjectSubtitle>
          <ProjectText>
            Надійна та зручна верифікація користувача через його власний інтернет-банкінг на порталах адміністративних послуг. Станом на сьогодні, на полігоні Ощадбанку, розгорнуто робочий екземпляр системи BankID з повним циклом проходження даних (враховуючи отримання даних по клієнту з банківської бази даних по номеру банківської картки ). Наразі очікується підключення системи до провайдера SMS розсилок (дотепер підключено у тестовому режимі), після чого полігон буде запущено у дослідну експлуатацію на порталі Львівської міської ради Особистий кабінет львів’янина. У інтерфейсі сайту буде доступна кнопка «BankID Ощадбанк», за допомогою якої користувачі матимуть змогу авторизуватися у системі та оформити довідку та звернення з доступного переліку інформації. Також у відкритий доступ на ресурсі GitHub, викладено актуальні схеми та документація по роботі системи BankID з можливістю коментування та редагування.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={prozorro} />
        <ProjectInfo>
          <ProjectTitle href="https://prozorro.gov.ua/">Prozorro</ProjectTitle>
          <ProjectSubtitle>
            Системна реформа тендерного процесу в електронних публічних і державних закупівлях
          </ProjectSubtitle>
          <ProjectText>
            Реформу у сфері публічних закупівель можна вважати прикладом успішних змін в країні. Основана мета реформи – суттєве зниження корупції під час закупівель за публічні кошти, досягнення максимальної ефективності та економії. Успішна реалізація проекту має повернути довіру бізнесу до держави та стимулювати його до участі в держаних тендерах. Головний принцип системи ProZorro – «всі бачать все». Тепер бажаючий може дізнатися хто, що і як закуповує за кошти платників податків. Пересічний громадянин можете відслідкувати, що саме закуповує районна поліклініка чи школа, до якої ходять його діти.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={edata} />
        <ProjectInfo>
          <ProjectTitle href="https://e-data.gov.ua/">E-DATA</ProjectTitle>
          <ProjectSubtitle>
            Єдиний веб-портал використання публічних коштів є офіційним державним інформаційним ресурсом у мережі Інтернет, на якому оприлюднюється інформація згідно з Законом «Про відкритість використання публічних коштів»
          </ProjectSubtitle>
          <ProjectText>
            Доступ до інформації, оприлюдненої на єдиному веб-порталі використання публічних коштів, є вільним та безоплатним, що надає можливість задоволення публічного інтересу щодо процесів контролю, утворення, розподілу та використання публічних коштів розпорядниками та одержувачами коштів Державного бюджету України, бюджету Автономної Республіки Крим і місцевих бюджетів, органами Пенсійного фонду, підприємствами, а також фондами загальнообов’язкового державного соціального страхування.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={eauction} />
        <ProjectInfo>
          <ProjectTitle href="https://www.eauction.idf.solutions/">EAUCTION</ProjectTitle>
          <ProjectSubtitle>
            Автоматизована система проведення електронних аукціонів з оренди та продажу державного майна
          </ProjectSubtitle>
          <ProjectText>
            Після Революції Гідності в українського суспільства з’явились великі сподівання на докорінне перетворення країни. Нові глобальні технологічні зміни та перспективи євроінтеграції відкривають перед українцями нові можливості, якими ми зобов’язані скористатись. Паралельно Україна воює на двох фронтах: проти військової агресії з боку РФ і проти корупцієї, що виснажує країну. Однією з головних сфер, де процвітає корупція, є продаж та оренда держмайна, а також інших прав через «паперові» аукціони. Це негативно впливає на розвиток бізнесу і в цілому на економіку, а держава втрачає величезні гроші. Міжнародний досвід показує, що перехід від "паперових", закритих процедур до відкритих онлайн-систем підвищує ефективність держуправління і поповнює держбюджет на 15-20%, а використання розподілених систем (Blockchain) мінімізує маніпуляції чиновників, що створює позитивний фінансовий і моральний ефект. Іплементація «е-Auction 3.0» створить прозорі умови для проведення державних аукціонів на всіх рівнях та унеможливить існування корупції в цій сфері. UNITY-BARS приєднується до мети ефективного та швидкого реформування, імплементації та розвитку відповідних механізмів!
          </ProjectText>
        </ProjectInfo>
      </Project>
    </Grid>
  </Background>
)

export default Projects
