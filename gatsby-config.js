module.exports = {
  siteMetadata: {
    title: "lawrence hebia",
    author: "Lawrence Hebia",
    desc: "Lawrence Web Developer",
    hero: {
      title: "Hi 👋🏻, I'm Lawrence Hebia.",
      subTitle: "A Front-End Web Developer based in Toronto, Canada",
      desc:
        "I am a passionate and dedicated Front-End Web Developer who loves to build things that help to make the world a better place. I believe in code that humans can easily read and interfaces we can easily interpret. I love working with people and I believe in doing great work by doing what you love.",
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Poppins\:400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
