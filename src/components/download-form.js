import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { CSSTransitionGroup } from 'react-transition-group'
import { withPrefix } from 'gatsby'

import logo from "../images/unitybarsheaderlogo.svg"

const InfoElementDownloadLink = styled.button`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3EC4E1;
  margin: .5rem 0;
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const StyledContactForm = styled.form`
  display: ${props => props.isOpened ? 'none' : 'flex'};
  width: 20rem;
  flex-direction: column;

  @media screen and (max-width: 60rem) {
    width: 90%;
    margin-left: 5%;
  }
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

class DownloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  }

  render() {
    return (
      <div>
        <InfoElementDownloadLink onClick={this.handleClick} >Завантажити Презентацію</InfoElementDownloadLink>
        <StyledContactForm isOpened={this.state.isOpened} key={this.state.isOpened ? 'open' : 'closed'} name="contact" method="post">
          <StyledContactInput placeholder="Ваше Ім'я" type="text" name="Name" id="Name"/>
          <StyledContactInput placeholder="Ваш Email" type="text" name="Email" id="Email"/>
          <a href={withPrefix('/documents/BONE.pdf')} download="BONE.pdf">
            <StyledContactSubmit type="submit" value="Заванатжити" />
          </a>
        </StyledContactForm>
      </div>
    );
  }
}

export default DownloadForm
