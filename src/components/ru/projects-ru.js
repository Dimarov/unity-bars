import React from 'react'
import styled from "styled-components"

import bg from "../../images/products.jpg"

import bankid from "../../images/projects/bankid.png"
import prozorro from "../../images/projects/prozorro.png"
import edata from "../../images/projects/edata.png"
import eauction from "../../images/projects/eauction.png"

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
  background-image: url(${bg});
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

const ProjectTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
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
  opacity: .8;../
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
        <Title>Проекты</Title>
        <Subtitle>Unity-Bars принимает участие в новейших проектах Украины</Subtitle>
      </Container>
    </Header>
    <Grid>
      <Project>
        <ProjectPhoto image={bankid} />
        <ProjectInfo>
          <ProjectTitle>BANKID</ProjectTitle>
          <ProjectSubtitle>
            Способ электронной идентификации граждан через украинские банки для предоставления административных услуг через Интернет
          </ProjectSubtitle>
          <ProjectText>
            Надежная и удобная верификация пользователя через его собственный интернет-банкинг на порталах административных услуг. На сегодня, на полигоне Ощадбанка, развернуто рабочий экземпляр системы BankID с полным циклом прохождения данных (включая получение данных по клиенту с банковской базы данных по номеру банковской карты). Сейчас ожидается подключение системы к провайдеру SMS рассылок (до сих пор подключены в тестовом режиме), после чего полигон будет запущен в опытную эксплуатацию на портале Львовского городского совета Личный кабинет львовянина. В интерфейсе сайта будет доступна кнопка «BankID Ощадбанк», с помощью которой пользователи смогут авторизоваться в системе и оформить справку и обращения с доступного перечня информации. Также в открытый доступ на ресурсе GitHub, изложены актуальные схемы и документация по работе системы BankID с возможностью комментирования и редактирования.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={prozorro} />
        <ProjectInfo>
          <ProjectTitle>Prozorro</ProjectTitle>
          <ProjectSubtitle>
            Системная реформа тендерного процесса в электронных публичных и государственных закупках
          </ProjectSubtitle>
          <ProjectText>
            Реформу в сфере публичных закупок можно считать примером успешных изменений в стране. Основанная цель реформы - существенное снижение коррупции при закупках за публичные средства, достижение максимальной эффективности и экономии. Успешная реализация проекта должна вернуть доверие бизнеса к государству и стимулировать его к участию в государственных тендерах. Главный принцип системы ProZorro - «все видят все». Теперь желающий может узнать кто, что и как закупает за средства налогоплательщиков. Рядовой гражданин можете отследить, что именно закупает районная поликлиника или школа, в которую ходят его дети.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={edata} />
        <ProjectInfo>
          <ProjectTitle>E-DATA</ProjectTitle>
          <ProjectSubtitle>
            Единственный веб-портал использования публичных средств является официальным государственным информационным ресурсом в сети Интернет, на котором публикуется информация в соответствии с Законом «Об открытости использования публичных средств»
          </ProjectSubtitle>
          <ProjectText>
            Доступ к информации, обнародованной на едином веб-портале использования публичных средств, является свободным и бесплатным, что дает возможность удовлетворения публичного интереса относительно процессов контроля, образования, распределения и использования публичных средств распорядителями и получателями средств Государственного бюджета Украины, бюджета Автономной Республики Крым и местных бюджетов, органами Пенсионного фонда, предприятиями, а также фондами общеобязательного государственного социального страхования.
          </ProjectText>
        </ProjectInfo>
      </Project>
      <Project>
        <ProjectPhoto image={eauction} />
        <ProjectInfo>
          <ProjectTitle>EAUCTION</ProjectTitle>
          <ProjectSubtitle>
            Автоматизированная система проведения электронных аукционов по аренде и продаже государственного имущества
          </ProjectSubtitle>
          <ProjectText>
            После Революции Достоинства у украинского общества появились большие надежды на коренное преобразование страны. Новые глобальные технологические изменения и перспективы евроинтеграции открывают перед Украинской новые возможности, которыми мы обязаны воспользоваться. Параллельно Украина воюет на двух фронтах: против военной агрессии со стороны РФ и против корупции, что истощает страну. Одной из главных сфер, где процветает коррупция, является продажа и аренда госимущества, а также других прав за «бумажные» аукционы. Это негативно влияет на развитие бизнеса и в целом на экономику, а государство теряет огромные деньги. Международный опыт показывает, что переход от "бумажных", закрытых процедур в открытых онлайн-систем повышает эффективность госуправления и пополняет госбюджет на 15-20%, а использование распределенных систем (Blockchain) минимизирует манипуляции чиновников, создает положительный финансовый и моральный эффект. Иплементация «е-Auction 3.0» создаст прозрачные условия для проведения государственных аукционов на всех уровнях и сделает невозможным существование коррупции в этой сфере. UNITY-BARS присоединяется к цели эффективного и быстрого реформирования, внедрения и развития соответствующих механизмов!
          </ProjectText>
        </ProjectInfo>
      </Project>
    </Grid>
  </Background>
)

export default Projects
