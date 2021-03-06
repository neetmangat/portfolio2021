import conspira from "./images/projects/conspira.png";
import pyramid from "./images/projects/pyramid.png";
import grammable from "./images/projects/grammable.png";
import mindshift from "./images/projects/mindshift.png";
import nota from "./images/projects/nota.png";
import tacoloco from "./images/projects/tacoloco.png";
import todos from "./images/projects/todoster.png";
import mello from "./images/projects/mello.png";
import portfolio from "./images/projects/portfolio.png";
import flixer from "./images/projects/flixer.png";

export const projectData = [
  {
    title: "Flixer",
    description: `Flixer is a clone of Netflix's web interface. This app was created using React 
    functional components, Redux state management, axios async/await requests, and deployed on Google Firebase. 
    Firebase Authentication allows user account creation, and Firebase Firestore is the database used to store 
    customer and product records. Additional functionality includes customer subscription checkout powered by 
    the Stripe Firebase Extension and Stripe API integration. Once a user is subscribed, movie data is pulled 
    from The Movie Database (TMDB) for trending movies and movie poster images. Movie trailers are integrated 
    from YouTube if one is successfully found.`,
    technologies:
      "React, Redux, Stripe API, Firebase Authentication, Firebase Firestore, JavaScript, HTML, CSS, GitHub",
    image: flixer,
    date_created: "February 2021",
    link: "https://flix-97e6f.web.app/profile",
    github: "https://github.com/neetmangat/flixer",
    test_user: "test@test.com",
    test_password: "abc123",
    cc: {
      number: "4242 4242 4242 4242",
      expiration: "04/24",
      cvv: "424",
      billing: "Anything",
    },
  },
  {
    title: "Pyramid",
    description: `Pyramid was designed and built for a cryptocurrency hedge fund startup.
        It is a single-page web app which pulls live data from the Ethereum blockchain, 
        using the Web3 JS library, to feed the statistics featured on each asset's page. 
        Additional functionality includes the ability to chart and buy assets directly 
        on the site.`,
    technologies:
      "React, Web3, Infura.io, JavaScript, HTML, CSS, GitHub, Netlify",
    image: pyramid,
    date_created: "November 2020",
    link: "https://pyramid-nm.netlify.app",
    github: "https://github.com/neetmangat/pyramid",
  },
  {
    title: "Portfolio",
    description: `This portfolio was created using React. The inspiration for the theme 
        was based on 80's retro arcade games. The site is mobile and desktop responsive, with 
        additional functionality including an app-wide music player that is saved in the app state. `,
    technologies: "React, JavaScript, HTML, CSS, GitHub, Netlify",
    image: portfolio,
    date_created: "January 2021",
    link: "https://www.neetmangat.com",
    github: "https://github.com/neetmangat/portfolio",
  },
  {
    title: "Nota",
    description: `Nota is a single-page post-it note application with ReactJS
        powering the front-end and a back-end API driven by Ruby on Rails. 
        Users can create notes, add tags, and update fields while having a
        fluid experience.`,
    technologies:
      "React, Ruby on Rails, PostgresDB, JavaScript, HTML, CSS, GitHub, Firebase",
    image: nota,
    date_created: "August 2020",
    link: "https://nota-41938.web.app",
    github: "https://github.com/neetmangat/nota",
  },
  {
    title: "MiNDSHiFT",
    description: `MindShift is a video-streaming marketplace platform, centered 
        around learning, that features credit card payment capabilities, 
        user role management, complex user interfaces, and advanced
        database relationship. Users can create courses as teachers
        or enroll in courses as students, as inspired by Coursera.`,
    technologies:
      "Ruby on Rails, Stripe API, PostgresDB, HTML, CSS, GitHub, Heroku",
    image: mindshift,
    date_created: "July 2020",
    link: "https://mindshift-nm.herokuapp.com",
    github: "https://github.com/neetmangat/mindshift",
    test_user: "test2@test.com",
    test_password: "abc123",
    cc: {
      number: "4242 4242 4242 4242",
      expiration: "04/24",
      cvv: "424",
    },
  },
  {
    title: "Tacoloco",
    description: `Tacoloco is a taco-themed Yelp clone that integrates with the 
        Google Maps API and includes features such as user commenting, star ratings, 
        image uploading, and user authentication.`,
    technologies:
      "Ruby on Rails, Google Maps API, PostgresDB, HTML, CSS, GitHub, Heroku",
    image: tacoloco,
    date_created: "June 2020",
    link: "https://tacolocos.herokuapp.com",
    github: "https://github.com/neetmangat/tacoloco",
    test_user: "test@test.com",
    test_password: "password",
  },
  {
    title: "Grammable",
    description: `Grammable is an Instagram clone that was built using industry-standard, test-driven
        development following numerous red/green/refactor cycles. The purpose of this project was to create 
        tests to confirm the site's functionality was working properly prior to implementing a design.`,
    technologies: "Ruby on Rails, PostgresDB, HTML, CSS, GitHub, Heroku",
    image: grammable,
    date_created: "July 2020",
    link: "https://grammable-nm.herokuapp.com",
    github: "https://github.com/neetmangat/grammable",
    test_user: "test@test.com",
    test_password: "password",
  },
  {
    title: "Conspira",
    description: `Conspira is a database-powered conspiracy theory generator, inspired by 
        Twitter, with a mobile-first design. It was inspired by the vast amount of conspiracy 
        theories present on Twitter. Users can anonymously submit a conspiracy theory of their own.`,
    technologies: "Ruby on Rails, PostgresDB, HTML, CSS, GitHub, Heroku",
    image: conspira,
    date_created: "May 2020",
    link: "https://conspira.herokuapp.com",
    github: "https://github.com/neetmangat/conspira",
  },
  {
    title: "Todos",
    description: `This single-page to-do application features a
        fluid user interface that allows users to rapidly add dynamic content
        and create to-do lists.`,
    technologies:
      "React, Ruby on Rails, PostgresDB, JavaScript, CSS, HTML, GitHub, Heroku",
    image: todos,
    date_created: "August 2020",
    link: "https://todoster-nm.herokuapp.com",
    github: "https://github.com/neetmangat/todo",
  },
  {
    title: "Mello",
    description: `Mello is single-page web application inspired by the popular 
        productivity app Trello. The front-end is powered by React with Ruby on Rails 
        powering the back-end API.`,
    technologies:
      "React, Ruby on Rails, PostgresDB, JavaScript, CSS, HTML, GitHub, Heroku",
    image: mello,
    date_created: "September 2020",
    link: "https://mello-nm.herokuapp.com",
    github: "https://github.com/neetmangat/mello",
    test_user: "test@test.com",
    test_password: "password",
  },
];
