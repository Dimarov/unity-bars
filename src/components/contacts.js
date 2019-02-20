import React from 'react'
import styled from "styled-components"
import office from '../images/fix/office3.jpg'
import bg from "../images/products.jpg"
import { translate } from 'react-i18next'
import axios from 'axios';

const StyledBackground = styled.div`
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

const StyledHeader = styled.div`
  width: 100%;
  height: 32rem;
  background-image: url(${office});
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
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

const StyledGrid = styled.div`
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

const StyledContactTitle = styled.h2`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem 2rem;
`

const StyledContactSubtitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 1rem 2rem;
`

const StyledContactText = styled.p`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #1A1A1A;
  margin: .25rem 2rem;
`

const StyledContact = styled.div`
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

const StyledContactForm = styled.form`
  width: 60%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 60rem) {
    width: 90%;
    margin-left: 5%;
  }
`

const StyledContactFormTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1A1A1A;
  margin: 1rem;
`

const StyledContactInput = styled.input`
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

const StyledContactTextarea = styled.textarea`
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

const StyledContactSubmit = styled.button`
  outline: none;
  background: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: .5rem 0;
  color: #3EC4E1;
  border: .125rem solid #3EC4E1;
  border-radius: .25rem;
  padding: .5rem 2rem;
  cursor: pointer;
  transition: all .1s ease-in;

  :hover {
    background: #3EC4E1;
    color: #fff;
  }
`

class Contacts extends React.Component {

  state = {
    name: '',
    message: '',
    email: '',
    sent: false
  }

  formSubmit = (e) => {
    e.preventDefault()

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('API_URI', data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch(() => {
        console.log('Message not sent')
      })
  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }

  render() {
    const { t } = this.props

    return(
      <StyledBackground>
        <StyledHeader>
          <Container>
            <StyledTitle>{t("Contacts")}</StyledTitle>
            <StyledSubtitle>
              {t("Contact us and find out how we can help your business achieve high results")}
            </StyledSubtitle>
          </Container>
        </StyledHeader>
        <StyledGrid>
          <StyledContact>
            <StyledContactTitle>{t("Contacts")}</StyledContactTitle>
            <StyledContactText>{t("Adress")}</StyledContactText>
            <StyledContactSubtitle>(044) 568-52-11</StyledContactSubtitle>
            <StyledContactText>bars@unity-bars.com</StyledContactText>
          </StyledContact>
          <StyledContact>
            <StyledContactForm name="contact" onSubmit={(e) => this.formSubmit(e)}>
              <StyledContactFormTitle>{t("Send Message")}</StyledContactFormTitle>
              <StyledContactInput onChange={e => this.setState({ name: e.target.value })} placeholder={t("Form.Name")} type="text" name="Name" id="Name" value={this.state.name}/>
              <StyledContactInput onChange={(e) => this.setState({ email: e.target.value })} placeholder={t("Form.Email")} type="text" name="Email" id="Email" value={this.state.email}/>
              <StyledContactInput onChange={e => this.setState({ phone: e.target.value })} placeholder={t("Form.Number")} type="text" name="Phone" id="Phone" value={this.state.number}/>
              <StyledContactTextarea onChange={e => this.setState({ message: e.target.value })} placeholder={t("Form.Message")} type="text" name="Message" id="Message" value={this.state.message}/>
              <StyledContactSubmit type="submit" value={t("Form.Send")} />
            </StyledContactForm>
          </StyledContact>
        </StyledGrid>
      </StyledBackground>
    )
  }
}

export default translate("Contacts")(Contacts)
