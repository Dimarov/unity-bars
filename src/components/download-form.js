import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { CSSTransitionGroup } from 'react-transition-group'
import { withPrefix } from 'gatsby'
import { translate } from "react-i18next"

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
  margin-top: 2rem;

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
  color: #fff;
  border: .125rem solid #fff;
  opacity: .6;
  border-radius: .125rem;
  padding: 1rem 1rem;
  transition: all .1s ease-in;

  :focus,
  :active {
    opacity: 1;
  }
`

const StyledContactSubmit = styled.input`
  outline: none;
  background: #fff;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: .5rem 0;
  color: #000;
  border: .125rem solid #fff;
  border-radius: .25rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all .1s ease-in;

  :hover {
    background: none;
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
    const { t } = this.props

    return (
      <div>
        <InfoElementDownloadLink onClick={this.handleClick} >{t("Download")}</InfoElementDownloadLink>
        <StyledContactForm isOpened={this.state.isOpened} key={this.state.isOpened ? 'open' : 'closed'} name="contact" method="post">
          <StyledContactInput placeholder={t("Form.Name")} type="text" name="Name" id="Name"/>
          <StyledContactInput placeholder={t("Form.Email")} type="text" name="Email" id="Email"/>

          <StyledContactSubmit type="submit" value={t("Form.Download")} />

        </StyledContactForm>
      </div>
    );
  }
}

export default translate("DownloadForm")(DownloadForm)
