import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { CSSTransitionGroup } from 'react-transition-group'

import Header from './header-ru'
import Footer from './footer-ru'
import './layout.css'
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
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
        <CSSTransitionGroup
          transitionName="content"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

            {children}

        </CSSTransitionGroup>
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
