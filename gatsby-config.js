module.exports = {
  siteMetadata: {
    title: "lawrence hebia",
    headTitle: "Lawrence Hebia",
    author: "Lawrence Hebia",
    desc: "Lawrence Web Developer",
    hero: {
      title: "Hi 👋, I'm Lawrence",
      subTitle: "< Front-End Web Developer />",
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
        title: "TravelAsk",
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
    skills: [
      { icon: '<i class="fab fa-html5"></i>', skillName: "HTML5" },
      { icon: '<i class="fab fa-css3-alt"></i>', skillName: "CSS3" },
      { icon: '<i class="fab fa-js-square"></i>', skillName: "JavaScript" },
      { icon: '<i class="fab fa-react"></i>', skillName: "React" },
      {
        icon:
          '<img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt="JQuery Logo"/>',
        skillName: "JQuery",
      },
      { icon: '<i class="fab fa-sass"></i>', skillName: "SASS" },
      { icon: '<i class="fab fa-git-alt"></i>', skillName: "Git" },
      { icon: '<i class="fab fa-github"></i>', skillName: "Github" },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 172 172"
                style=" fill:#000000;" > <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M28.66667,132.58333l54.5885,-102.35433c1.15025,-2.15717 4.26058,-2.11775 5.3535,0.07167l18.89133,37.78267z" fill="#000000"></path><path d="M28.66667,132.55467l19.87317,-122.54642c0.51958,-3.20708 4.82675,-3.90225 6.33175,-1.02125l38.29508,73.401z" fill="#666666"></path><path d="M28.69533,132.53317l0.71667,-0.56258l62.81225,-51.38858l-17.716,-33.95567z" fill="#95a5a6"></path><path d="M28.66667,132.58333l95.55317,-92.13825c2.00308,-1.93142 5.34633,-0.79192 5.75483,1.96008l13.35867,90.17817l-53.75,31.32908c-2.18225,1.2255 -4.84467,1.2255 -7.02692,0z" fill="#cccccc"></path></g></g></svg>`,
        skillName: "Firebase",
      },
      { icon: '<i class="fas fa-universal-access"></i>', skillName: "WCAG" },
      {
        icon: `<img src="https://img.icons8.com/material-rounded/96/000000/typescript.png" alt="TypeScript logo"/>`,
        skillName: "TypeScript",
      },
      { icon: '<i class="fab fa-python"></i>', skillName: "Python" },
    ],
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Poppins\:400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
