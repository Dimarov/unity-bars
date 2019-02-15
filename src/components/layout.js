import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { CSSTransitionGroup } from 'react-transition-group'

import LanguageSwitcher from './language-switcher'
import Header from './header'
import Footer from './footer'

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
            { name: 'keywords', content: 'IT, FinTech, ПО, банкинг' },
          ]}>
          <html lang="uk" />
        </Helmet>
        <script src="//instant.page/1.1.0" type="module" integrity="sha384-EwBObn5QAxP8f09iemwAJljc+sU+eUXeL9vSBw1eNmVarwhKk2F9vBEpaN9rsrtp"></script>
        <Header siteTitle={data.site.siteMetadata.title}/>

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
