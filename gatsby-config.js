module.exports = {
  siteMetadata: {
    title: 'De Palma',
    author: 'Gianpierangelo De Palma'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `${__dirname}/src/projects`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
