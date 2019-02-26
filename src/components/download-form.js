import React from 'react'
import styled from "styled-components"
import Modal from 'react-responsive-modal';
import { translate } from "react-i18next"
import { withPrefix } from 'gatsby'


const InfoElementDownloadLink = styled.button`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
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
  display: flex;
  width: 14rem;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: 40rem) {

  }

  @media (min-width: 80rem) {
    width: 32rem;
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

const ContactSubmit = styled.button`
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

  :disabled {
    background: none;
    color: ${props => props.themeDark ? "#fff" : "#000"};
  }
`

const FormModal = styled(Modal)`
`

const ModalContainer = styled.div`

`

const ContactFormTitle = styled.h3`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1A1A1A;
  margin: 1rem 0;
`

class DownloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: localStorage.getItem('open') || 0
    };
  }

  onOpenModal = () => {
    this.setState({ open: true })
  };

  onCloseModal = () => {
    this.setState({ open: false })
  };

  render() {
    
    const { t } = this.props;

    return (
      <ModalContainer>
        <InfoElementDownloadLink onClick={this.onOpenModal} >{t("Download")}</InfoElementDownloadLink>
        <FormModal className="modal" open={this.state.open} onClose={this.onCloseModal} center showCloseIcon={false}>
              <ContactForm 
                name="download" 
                method="POST"
                action="/success"
              >
                <ContactFormTitle>{t("Send Message")}</ContactFormTitle>
                <ContactInput 
                  type="hidden" 
                  name="form-name" 
                  value="download" 
                />
                <ContactInput
                  type="hidden"
                  name="product"
                  value={this.props.pdfFile}
                />
                <ContactInput 
                  placeholder={t("Form.Name")} 
                  type="text" 
                  name="name" 
                  id="Name" 
                />

                <ContactInput 
                  placeholder={t("Form.Email")} 
                  type="text"
                  name="email" 
                  id="Email"  
                />
                <ContactSubmit 
                  type="submit"
                >
                    {t("Form.Download")}
                </ContactSubmit>
              </ContactForm>
        </FormModal>
      </ModalContainer>
    );
  }
}

export default translate("DownloadForm")(DownloadForm)
