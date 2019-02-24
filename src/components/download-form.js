import React from 'react'
import styled from "styled-components"
import Modal from 'react-responsive-modal';
import { translate } from "react-i18next"
import { withPrefix } from 'gatsby'
import { Formik, Form, Field } from 'formik';


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

const ContactInput = styled(Field)`
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


const DownloadLink = styled.a`
  font-family: myriad-pro, sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  width: 100%;
  text-align: center;
  color: #3EC4E1;
  margin: 2rem 0 1rem;
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;
  display: ${props => props.enabled ? "static" : "none"};

  @media (min-width: 40rem) {
  }

  @media (min-width: 80rem) {
    font-size: 1.5rem;
  }
`

const Span = styled.span`
  font-family: myriad-pro, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class DownloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: localStorage.getItem('open') || 0,
      enabled: localStorage.getItem('enabled') || 0
    };
  }

  onOpenModal = () => {
    this.setState({ open: true }, () => {
      localStorage.setItem('open', this.state.open)
    });
  };

  onCloseModal = () => {
    this.setState({ open: false }, () => {
      localStorage.removeItem('open')
    });
  };

  enableLink = () => {
    this.setState({ enabled: true }, () => {
      localStorage.setItem('enabled', this.state.enabled)
    });
  }

  disableLink = () => {
    this.setState({ enabled: false }, () => {
      localStorage.removeItem('enabled');
    });
  }

  handleSubmit = (e, values, { props = this.props, setSubmitting }) => {

    const form = e.target;
    fetch("/", {
      method: "POST",
      action: `${this.props.fileURL}`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values
      })
    })
      .then(() => console.log(JSON.stringify(values)))
      .catch(error => alert(error));

    setSubmitting(false);

    return;
  }

  validateEmail = (value) => {
    let error;
    if (!value) {
      error = `${this.props.t("Form.Required")}`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value)) {
      error = `${this.props.t("Form.InvalidEmail")}`;
    } else error = 'OK';

    return error;
  }

  validateName = (value) => {
    let error;
    if (!value) {
      error = `${this.props.t("Form.Required")}`;
    } else if (/[.\-1-9_/§!@#$%^&*()+={}`~]/.test(value)) {
      error = `${this.props.t("Form.InvalidName")}`
    } else error = 'OK';

    return error;
  }

  render() {
    
    const { t } = this.props;

    return (
      <ModalContainer>
        <InfoElementDownloadLink onClick={this.onOpenModal} >{t("Download")}</InfoElementDownloadLink>
        <FormModal className="modal" open={this.state.open} onClose={this.onCloseModal} center showCloseIcon={false}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              product: `${this.props.pdfFile}`
            }}
          >
            {({ errors, touched }) => (
              <ContactForm 
                name="download" 
                method="POST" 
                action={this.props.pageURL}
              >
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
                  validate={this.validateName}
                />
                {errors.name && touched.name && <Span>{(errors.name == 'OK') ? '' : errors.name}</Span>}

                <ContactInput 
                  placeholder={t("Form.Email")} 
                  type="text"
                  name="email" 
                  id="Email"  
                  validate={this.validateEmail}
                />
                {errors.email && touched.email && <Span>{(errors.email == 'OK') ? '' : errors.email}</Span>}
                <ContactSubmit 
                  disabled={(errors.email != 'OK' || errors.name != 'OK')} 
                  type="submit" 
                  onClick={(errors.email != 'OK' || errors.name != 'OK') ? null : this.enableLink}>
                    {t("Form.Download")}
                </ContactSubmit>
                <DownloadLink onClick={this.disableLink} enabled={this.state.enabled} href={withPrefix(`${this.props.pdfURL}`)} download={this.props.pdfFile}>
                  {t("Link")}
                </DownloadLink>
              </ContactForm>
            )}
          </Formik>

        </FormModal>
        
      </ModalContainer>
    );
  }
}

export default translate("DownloadForm")(DownloadForm)
