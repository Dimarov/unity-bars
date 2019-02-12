import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { CSSTransitionGroup } from 'react-transition-group'

import Header from './header-eng'
import Footer from './footer-eng'
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
            { name: 'description', content: 'UNITY-BARS successfully works on the market for 25 years in the field of development of banking software. More than 90 professionals of different directions.' },
            { name: 'keywords', content: 'IT, FinTech, Software, banking' },
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
