import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'
import i18n from '../i18n'

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
    render={({
      site: {
        siteMetadata: { title },
      },
    }) => (
      <>
        <Helmet
          defaultTitle={title} titleTemplate={`%s | ${title}`}
          meta={[
            { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
            { name: 'viewport', content: "width=device-width, initial-scale=1" },
            { name: 'description', content: 'Компанія UNITY-BARS успішно працює на ринку 25 років в сфері розробки банківського програмного забезпечення. Більше 90 професійних фахівців різних напрямків.' },
            { name: 'keywords', content: 'IT, FinTech, ПЗ, банкінг' },
          ]}>
          <html lang="uk" />
        </Helmet>
        
        <Header siteTitle={title}/>
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

        <Footer siteTitle={title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
