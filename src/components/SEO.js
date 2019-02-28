import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, image, description, keywords }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    titleTemplate,
                    defaultImage,
                    defaultKeywords,
                    defaultDescription,
                    siteUrl
                },
            },
        }) => {
            const seo = {
                title: title || defaultTitle,
                image: `${siteUrl}${image || defaultImage}`,
                description: description || defaultDescription,
                keywords: keywords || defaultKeywords,
            }

            return (
                <>
                    <Helmet title={seo.title} titleTemplate={titleTemplate}>
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta name='viewport' content="width=device-width, initial-scale=1" />
                        <meta name="description" content={seo.description} />
                        <meta name="keywords" content={seo.keywords} />
                        <meta name="image" content={seo.image} />
                        {seo.title && <meta property="og:title" content={seo.title} />}
                        {seo.description && (
                            <meta property="og:description" content={seo.description} />
                        )}
                        {seo.image && <meta property="og:image" content={seo.image} />}
                        <html lang="uk" />
                    </Helmet>
                </>
            )
        }}
    />
)

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    keywords: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultKeywords: keywords
        defaultDescription: description
        defaultImage: image
        siteUrl: url
      }
    }
  }
`