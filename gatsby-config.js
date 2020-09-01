module.exports = {
  siteMetadata: {
    title: "lawrence hebia",
    author: "Lawrence Hebia",
    desc: "Lawrence Web Developer",
    hero: {
      title: "Hi 👋, I'm Lawrence.",
      subTitle: "Front-End Web Developer",
      desc:
        "I am a passionate and dedicated Front-End Web Developer who loves to build things that help to make the world a better place. I believe in code that humans can easily read and interfaces we can easily interpret. I love working with people and I believe in doing great work by doing what you love.",
    },
    projects: [
      {
        title: "Devcompile",
        imgName: 'dc',
        tech: ["React", "API", "Firebase"],
        desc:
          "A social feed for developers to view and save content from the Dev.to API.",
        shortDesc: "A social feed for developers.",
        liveUrl: "https://lhebia.github.io/lawrence-hebia-project-five/",
        githubUrl: "https://github.com/lhebia/lawrence-hebia-project-five",
      },
      {
        title: "Noah's Ark",
        imgName: 'na',
        tech: ["HTML5", "CSS3", "JQuery"],
        desc:
          "A fully accessible memory matching game using unicode and JQuery.",
        shortDesc: "Test your memory with emojis.",
        liveUrl: "https://lhebia.github.io/lawrenceHebiaProjectThree/",
        githubUrl: "https://github.com/lhebia/lawrenceHebiaProjectThree",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Poppins\:400`],
        display: "swap",
      },
    },
  ],
}
