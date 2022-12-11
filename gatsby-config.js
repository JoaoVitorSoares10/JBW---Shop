module.exports = {
  siteMetadata: {
    title: `JBW E-commerce`,
    description: `JBW E-commerce`,
    author: `Joao Vitor Soares`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-polished`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {       
          placeholder: `tracedSVG`,       
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JBW E-commerce`,
        short_name: `JBW`,
        start_url: `/`,
        background_color: `#D6EFFB`,
        theme_color: `#1ba6e9`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/icon-path*']
         }
      }
   }
  ],
}
