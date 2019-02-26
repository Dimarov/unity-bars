import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { CSSTransitionGroup } from 'react-transition-group'

import LanguageSwitcher from './language-switcher'
import Header from './header'
import Footer from './footer'
import i18n from '../i18n'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Компанія UNITY-BARS успішно працює на ринку 25 років в сфері розробки банківського програмного забезпечення. Більше 90 професійних фахівців різних напрямків.' },
            { name: 'keywords', content: 'IT, FinTech, ПЗ, банкінг' },
          ]}>
          <html lang="uk" />
        </Helmet>
        
        <Header siteTitle={data.site.siteMetadata.title}/>
        <form name="download" data-netlify="true" action="/success" hidden>
          <input type="text" name="name" />
          <input type="text" name="email" />
          <input type="hidden" name="product" />
        </form>
        <form name="contact" data-netlify="true" action="/success" hidden>
          <input type="text" name="username" />
          <input type="text" name="useremail" />
          <input type="text" name="phone" />
          <input type="text" name="message" />
        </form>


        <div>


            {children}

        </div>

        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
