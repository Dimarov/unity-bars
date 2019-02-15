import React, { Component } from "react"
import classNames from "classnames"
import { translate } from "react-i18next"
import styled from "styled-components"

const LanguageButton = styled.button`
  font-family: myriad-pro, sans-serif;
  height: 1.75rem;
  width: 1.75rem;
  padding: 0;
  margin: 0 .5rem;
  background: ${props => props.selected ? "#FFF" : "none"};
  color: ${props => props.selected ? "#1A1A1A" : "#FFF"};
  border: 2px solid #fff;
  border-radius: .5rem;
  font-size: .625rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s ease-out;

  :focus,
  :hover {
    border: 2px solid #a1a1a1;
    background: ${props => props.selected ? "#a1a1a1" : "none"};
    color: ${props => props.selected ? "#1A1A1A" : "#a1a1a1"};
  }
`;

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  renderLanguageChoice({ code, label }) {
    const buttonClass = classNames("LanguageSwitcher__button", {
      "LanguageSwitcher__button--selected": this.state.language === code,
    })

    return (
      <button
        key={code}
        className={buttonClass}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    )
  }

  render() {
    const languages = [
      { code: "uk", label: "Ukrainian" },
      { code: "en", label: "English" },
    ]

    return (
      <div className="LanguageSwitcher">
        {languages.map(language => this.renderLanguageChoice(language))}
      </div>
    )
  }
}

export default translate("LanguageSwitcher")(LanguageSwitcher)
