import React from 'react'
import styled from "styled-components"
import Modal from 'react-responsive-modal';
import { translate } from "react-i18next"
import { withPrefix } from 'gatsby'


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

const FormModal = styled(Modal)`
  padding: 6rem 10rem;
  background: red;
`

const ModalContainer = styled.div`

`


const DownloadLink = styled.a`
  width: 100%;
  margin: 0 auto;
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
  display: ${props => props.enabled ? "static" : "static"};

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`


class DownloadForm extends React.Component {

  state = {
    open: false,
    enabled: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  enableLink = () => {
    this.setState({ enabled: true })
  }

  render() {
    
    const { t } = this.props;
    const { open } = this.state;
    const { enabled } = this.state;

    return (
      <ModalContainer>
        <InfoElementDownloadLink onClick={this.onOpenModal} >{t("Download")}</InfoElementDownloadLink>
        <FormModal open={open} onClose={this.onCloseModal} center showCloseIcon={false}>
          <ContactForm isOpened={this.state.isOpened} key={this.state.isOpened ? 'open' : 'closed'} name="contact" method="post">
            <ContactInput placeholder={t("Form.Name")} type="text" name="Name" id="Name"/>
            <ContactInput placeholder={t("Form.Email")} type="text" name="Email" id="Email"/>

            
            <DownloadLink enabled={enabled} href={withPrefix('/documents/BONE.pdf')} download="BONE.pdf">
              <ContactSubmit type="submit" value={t("Form.Download")} onClick={this.enableLink} />
            </DownloadLink>
          </ContactForm>
        </FormModal>
      </ModalContainer>
    );
  }
}

export default translate("DownloadForm")(DownloadForm)
