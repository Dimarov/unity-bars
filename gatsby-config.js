module.exports = {
  siteMetadata: {
    title: 'Розробка програмного забезпечення, IT тестування та консалтінг',
    titleTemplate: 'UNITY-BARS | %s ',
    url: "https://www.unity-bars.com",
    description: 'Компанія UNITY-BARS успішно працює на ринку 25 років в сфері розробки банківського програмного забезпечення. Ми надаємо послуги розробки, тестування та консалтингу у сфері банківського обслуговування.',
    image: '/og-image.jpg',
    keywords: 'Unity Bars, IT, FinTech, Software, Development, Testing, Consulting, banking, ФінТех, банкінг, ПЗ, розробка, тестування, консалтинг, ПО, банкинг, разработка'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'unity-bars',
        short_name: 'ub',
        start_url: '/',
        background_color: '#1A1A1A',
        theme_color: '#1A1A1A',
        display: 'minimal-ui',
        icon: 'src/images/unity-bars-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135191475-1",
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    }
  ],
}
