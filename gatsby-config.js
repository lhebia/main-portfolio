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
        imgName: "dc.jpg",
        tech: ["React", "API", "Firebase"],
        desc:
          "A social feed for developers to view and save content from the Dev.to API.",
        shortDesc: "A social feed for developers.",
        liveUrl: "https://lhebia.github.io/lawrence-hebia-project-five/",
        githubUrl: "https://github.com/lhebia/lawrence-hebia-project-five",
      },
      {
        title: "Noah's Ark",
        imgName: "na.jpg",
        tech: ["HTML5", "CSS3", "JQuery"],
        desc:
          "A fully accessible memory matching game using unicode and JQuery.",
        shortDesc: "Test your memory with emojis.",
        liveUrl: "https://lhebia.github.io/lawrenceHebiaProjectThree/",
        githubUrl: "https://github.com/lhebia/lawrenceHebiaProjectThree",
      },
      {
        title: "Password Generator",
        imgName: "pg.jpg",
        tech: ["TypeScript", "HTML5", "CSS3"],
        desc:
          "A password generator to help you generate complex, secure passwords.",
        shortDesc: "Generate complex passwords.",
        liveUrl: "https://lhebia.github.io/Password-generator/",
        githubUrl: "https://github.com/lhebia/Password-generator",
      },
      {
        title: "Travel Ask",
        imgName: "ta.jpg",
        tech: ["JQuery", "SASS", "API"],
        desc:
          "A one-stop shop for travel data from the DarkSky and Rest Countries API.",
        shortDesc: "Travel data in one place.",
        liveUrl: "https://yuliana-lawrence.github.io/travelAsk/",
        githubUrl: "https://github.com/Yuliana-Lawrence/travelAsk",
      },
      {
        title: "My Watchlist",
        imgName: "mw.jpg",
        tech: ["React", "API", "Firebase"],
        desc:
          "A TV Amaze API browser that allows you to build and save lists of your next TV show binge.",
        shortDesc: "Find your next TV Show binge.",
        liveUrl: "https://tobikoberalphandnull.github.io/project-six/",
        githubUrl: "https://github.com/TobiKobeRalphAndNull/project-six",
      },
      {
        title: "Fun Place",
        imgName: "fp.jpg",
        tech: ["HTML5", "CSS3", "Responsive"],
        desc:
          "A multipage, fully responsive PSD conversion of the Fun Place design.",
        shortDesc: "Fun Place PSD conversion.",
        liveUrl: "https://lhebia.github.io/lawrence-hebia-project-two/",
        githubUrl: "https://github.com/lhebia/lawrence-hebia-project-two",
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
