module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "YODAWEAR",
    description: "YODAWEAR"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YODAWEAR`,
        short_name: `YODAWEAR`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: './src/images/favicon.png',
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-G1G6346R0K",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,400`
        ],
        display: 'swap'
      }
    }
  ],
};
