module.exports = {
  siteMetadata: {
    title: `CraftProducts - Craft awesome products`,
    author: {
      name: `Team CraftProducts`,
    },
    description: `CraftProducts provides tools for product teams to clearly understand customers, map user experience journeys, communicate consistent vision across the board and conceptualize & design better products collaboratively.`,

    sections: [
      `hero`,
      `features`,
      // `pricing`,
      `call-to-action`,
      // `screenshots`,
      // `testimonials`,
      // `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      { path: 'features', label: 'Features' },
      // {path: 'pricing', label: 'Pricing'},
      // { path: 'screenshots', label: 'Screenshots' },
      // { path: 'testimonials', label: 'Testimonials' },
      // {path: 'subscribe', label: 'Subscribe'},
    ],

    social: [
      {
        service: `Facebook`,
        url: `https://www.facebook.com/CraftProductz`,
        fa: `facebook`
      },
      {
        service: `Twitter`,
        url: `https://twitter.com/craftproductz`,
        fa: `twitter`
      },
      {
        service: `GitHub`,
        url: `https://github.com/craftproducts`,
        fa: `github`
      },
    ],

    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    footer: {
      logo: `/images/logo.png`,
      text: `CraftProducts provides tools for product teams to clearly understand customers, map user experience journeys, communicate consistent vision across the board and conceptualize & design better products collaboratively.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `647.343.8234`, url: `tel:6473438234` },
      { text: `123.456.7890`, url: `tel:1234567890` },
      { text: `someone@woosite.com`, url: `mailto:someone@woo.com` },
    ],
  },
  plugins: [`gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy`],
}
