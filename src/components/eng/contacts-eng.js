import React from 'react'
import styled from "styled-components"

import bg from "../../images/products.jpg"

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
  border: .125rem solid #DDD;
  border-radius: .25rem;
  padding: 1rem 1rem;
`

const StyledContactTextarea = styled.textarea`
  outline: none;
  background: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: .5rem 0;
  color: #1A1A1A;
  border: .125rem solid #DDD;
  border-radius: .25rem;
  padding: 1rem 1rem;
  resize: none;
`

const StyledContactSubmit = styled.input`
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

const Contacts = (props) => (
  <StyledBackground>
    <StyledHeader>
      <Container>
        <StyledTitle>Contacts</StyledTitle>
        <StyledSubtitle>Contact us and find out how we can help your business achieve high results
        </StyledSubtitle>
      </Container>
    </StyledHeader>
    <StyledGrid>
      <StyledContact>
        <StyledContactTitle>Contacts</StyledContactTitle>
        <StyledContactText>02152, Kyiv, Pavel Tychyna ave., 1B, office A.</StyledContactText>
        <StyledContactSubtitle>(044) 568-52-11</StyledContactSubtitle>
        <StyledContactText>bars@unity-bars.com</StyledContactText>
      </StyledContact>
      <StyledContact>
        <StyledContactForm name="contact" method="POST" netlify-honeypot="bot-field" netlify>
          <StyledContactFormTitle>Send Message</StyledContactFormTitle>
          <StyledContactInput placeholder="Your name" />
          <StyledContactInput placeholder="Your Email" />
          <StyledContactInput placeholder="Your Phone number" />
          <StyledContactTextarea placeholder="Your Message" />
          <StyledContactSubmit type="submit" value="Send" />
        </StyledContactForm>
      </StyledContact>
    </StyledGrid>
  </StyledBackground>
)

export default Contacts
