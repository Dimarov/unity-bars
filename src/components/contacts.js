import React from 'react'
import styled from "styled-components"
import { translate } from 'react-i18next'

import office from '../images/fix/office3.jpg'

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
  background-position: bottom;
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
  font-size: 1.5rem;
  font-weight: 200;
  color: #fff;
`

const Grid = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 1rem;
  @media screen and (max-width: 60rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
`

const ContactTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem 2rem;
`

const ContactSubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem 2rem;
`

const ContactText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #1A1A1A;
  margin: .25rem 2rem;
`

const Contact = styled.div`
  width: 100%;
  height: 32rem;
  border-radius: .125rem;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 60rem) {
    height: 32rem;
  }
`

const ContactForm = styled.form`
  width: 60%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 60rem) {
    width: 90%;
    margin-left: 5%;
  }
`

const ContactFormTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1A1A1A;
  margin: 1rem;
`

const ContactInput = styled.input`
  outline: none;
  background: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: .5rem 0;
  color: #1A1A1A;
  border: .125rem solid #1a1a1a;
  opacity: .4;
  border-radius: .25rem;
  padding: 1rem 1rem;
  transition: all .1s ease-in;
  :focus,
  :active {
    opacity: .6;
  }
`

const ContactTextarea = styled.textarea`
  outline: none;
  background: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: .5rem 0;
  color: #1A1A1A;
  opacity: .4;
  border: .125rem solid #1a1a1a;
  border-radius: .25rem;
  padding: 1rem 1rem;
  resize: none;
  transition: all .1s ease-in;
  :focus,
  :active {
    opacity: .6;
  }
`

const ContactSubmit = styled.button`
  outline: none;
  background: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: .5rem 0;
  color: #3EC4E1;
  border: .125rem solid #3EC4E1;
  border-radius: .25rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all .1s ease-in;
  :hover {
    background: #3EC4E1;
    color: #fff;
  }
`

class Contacts extends React.Component {

  render() {
    const { t } = this.props

    return (
      <Background>
        <Header>
          <Container>
            <Title>{t("Contacts")}</Title>
            <Subtitle>
              {t("Contact us and find out how we can help your business achieve high results")}
            </Subtitle>
          </Container>
        </Header>
        <Grid>
          <Contact>
            <ContactTitle>{t("Contacts")}</ContactTitle>
            <ContactText>{t("Adress")}</ContactText>
            <ContactSubtitle>(044) 568-52-11</ContactSubtitle>
            <ContactText>bars@unity-bars.com</ContactText>
          </Contact>
          <Contact>
            
            <ContactForm 
              name="contact" 
              method="POST"
              action="/success-contact/"
            >
              <ContactFormTitle>{t("Send Message")}</ContactFormTitle>
              <ContactInput 
                type="hidden" 
                name="form-name" 
                value="contact"  
              />      
              <ContactInput 
                placeholder={t("Form.Name")} 
                type="text" 
                name="username" 
                id="username" 
              />
              <ContactInput 
                placeholder={t("Form.Email")} 
                type="text" 
                name="useremail" 
                id="useremail" 
              />
              <ContactInput 
                placeholder={t("Form.Number")} 
                type="text" 
                name="phone" 
                id="phone" 
              />
              <ContactTextarea 
                placeholder={t("Form.Message")} 
                type="text" 
                name="message" 
                id="message" 
              />
              <ContactSubmit 
                type="submit">
                {t("Form.Send")}
              </ContactSubmit>
            </ContactForm>
          </Contact>
        </Grid>
      </Background>
    )
  }
}

export default translate("Contacts")(Contacts)