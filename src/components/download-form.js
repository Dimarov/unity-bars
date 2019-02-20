import React from 'react'
import styled from "styled-components"
import { translate } from "react-i18next"


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

const ContactForm = styled.form`
  display: ${props => props.isOpened ? 'none' : 'flex'};
  width: 20rem;
  flex-direction: column;
  margin-top: 2rem;

  @media screen and (max-width: 60rem) {
    width: 90%;
    margin-left: 5%;
  }
`

const ContactInput = styled.input`
  outline: none;
  background: none;
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin: .5rem 0;
  color: ${props => props.themeDark ? "#fff" : "#000"};
  border: ${props => props.themeDark ? ".125rem solid #fff" : ".125rem solid #000"};
  opacity: .6;
  border-radius: .125rem;
  padding: 1rem 1rem;
  transition: all .1s ease-in;

  :focus,
  :active {
    opacity: 1;
  }
`

const ContactSubmit = styled.input`
  outline: none;
  background: ${props => props.themeDark ? "#fff" : "#000"};
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: .5rem 0;
  color: ${props => props.themeDark ? "#000" : "#fff"};
  border: ${props => props.themeDark ? ".125rem solid #fff" : ".125rem solid #000"};
  border-radius: .25rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all .1s ease-in;

  :hover {
    background: none;
    color: ${props => props.themeDark ? "#fff" : "#000"};
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
        <ContactForm themeDark={this.props.dark} isOpened={this.state.isOpened} key={this.state.isOpened ? 'open' : 'closed'} name="contact" method="post">
          <ContactInput themeDark={this.props.dark} placeholder={t("Form.Name")} type="text" name="Name" id="Name"/>
          <ContactInput themeDark={this.props.dark} placeholder={t("Form.Email")} type="text" name="Email" id="Email"/>

          <ContactSubmit themeDark={this.props.dark} type="submit" value={t("Form.Download")} />

        </ContactForm>
      </div>
    );
  }
}

export default translate("DownloadForm")(DownloadForm)
