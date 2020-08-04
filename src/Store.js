import SteelersBigBen from "./assets/steelers-quiz/big-ben.jpeg";
import SteelersOpeningPage from "./assets/steelers-quiz/opening page.jpeg";
import SteelersQuestions from "./assets/steelers-quiz/questions.jpeg";
import EducatorHomePage from "./assets/educator-locator/education-home.jpeg";
import EducatorLevel from "./assets/educator-locator/education-level.jpeg";
import EducatorResults from "./assets/educator-locator/education-results.jpeg";
import DoggyLandingPage from "./assets/doggy-dialogue/doggy-landing-page.jpeg";
import DoggyNewPost from "./assets/doggy-dialogue/doggy-new-post.jpeg";
import DoggyPost from "./assets/doggy-dialogue/doggy-posts.jpeg";
import CocktailLandingPage from "./assets/cocktail-critic/cocktail-landing-page.jpeg";
import CocktailReviews from "./assets/cocktail-critic/cocktail-reviews.jpeg";
import CocktailSearch from "./assets/cocktail-critic/cocktail-search.jpeg";

export default {
  titleCarousel: [
    'fullstack developer',
    'front end developer',
    'master debugger',
    'tech geek',
    'JavaScript fanatic',
    'visual artist',
    'beach lover',
    'martial artist',
    'dog owner',
    'fitness enthusiast',
    'California native'
  ],

  projects: [
    {
      id: 1,
      title: "Steelers Quiz App",
      description:
        "Interactive quiz on the Pittsburgh Steelers football team where users can answer 10 multiple choice questions and receive a final score at the end and can choose to retake the quiz. I built this app as my first submission to my portfolio because it highlights what I have learned so far in regards to HTML, CSS and JavaScript. Go Steelers!",
      tech: "JavaScript, jQuery, HTML5, CSS3, GitHub",
      img1: SteelersOpeningPage,
      img2: SteelersQuestions,
      img3: SteelersBigBen,
      clientRepo: "https://github.com/navin1551/steelers-quiz-app",
      app: "https://navin1551.github.io/steelers-quiz-app/"
    },

    {
      id: 2,
      title: "Educator Locator",
      description:
        "Web app that allows users to search elementary, middle, and highschools as well as colleges and universities in a given city and state. Once users has searched a given location, they are given the chance to start a new search. I built this app to demonstrate my ability to use an API to fetch external data and display it to the DOM",
      tech: "JavaScript, jQuery, AJAX, HTML5, CSS3, GitHub",
      img1: EducatorHomePage,
      img2: EducatorLevel,
      img3: EducatorResults,
      clientRepo: "https://github.com/navin1551/Educator-Locator",
      app: "https://navin1551.github.io/Educator-Locator/"
    },

    {
      id: 3,
      title: "Doggy Dialogue",
      description:
        "Doggy Dialogue is a forum for dog lovers to ask and answer any questions related to dogs. Users are required to register for a user name and password and once signed up and logged in, can make new posts and reply to existing posts from other users. Users are also given the opportunity to edit or delete any posts or replies they have previously created. This is my first full stack app I've created and the main purpose behind it was to demonstrate my ability to develop a server and database which I can connect to a front end client which I built as well. My client was deployed with Zeit and my server and database were deployed to Heroku.",
      tech:
        "React, Node/Express, PostgreSQL, HTML5, CSS3,Jest, Mocha/Chai testing, JWT auth, Zeit, Heroku, GitHub",
      img1: DoggyLandingPage,
      img2: DoggyNewPost,
      img3: DoggyPost,
      clientRepo: "https://github.com/navin1551/doggy-dialogue-app",
      apiRepo: "https://github.com/navin1551/doggy-dialogue-server",
      app: "https://doggy-dialogue-app.now.sh/"
    },

    {
      id: 4,
      title: "Cocktail Critic",
      description:
        "App that allows users to create a user name and password to login and search for popular alcoholic drinks and leave reviews and ratings. Users can choose to view a list of their own reviews in their profile page or can view other users reviews in the posted reviews page. I decided to build this app to showcase my ability implement a third part AJAX request into a full stack app that I created using React, Node/Express.js and PostgreSQL. I also thought it would be a fun idea as I'm sure everyone has ordered a drink they wanted to make sure they did or didn't order a second time.",
      tech:
        "React, Node/Express, PostgreSQL, AJAX, HTML5, CSS3,Jest, Mocha/Chai testing, JWT auth, Zeit, Heroku, GitHub",
      img1: CocktailLandingPage,
      img2: CocktailReviews,
      img3: CocktailSearch,
      clientRepo: "https://github.com/navin1551/cocktail-critic",
      apiRepo: "https://github.com/navin1551/cocktail-critic-api",
      app: "https://cocktail-critic.now.sh/"
    }
  ],

  skills: [
    {
      id: 1,
      name: 'HTML5',
      icon: 'https://image.flaticon.com/icons/svg/1216/1216909.svg'
    },
    {
      id: 2,
      name: 'CSS3',
      icon: 'https://image.flaticon.com/icons/svg/732/732007.svg'
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFgOmP-VhsCFa_9om9fI-SBqZ-0qa26FCasw&usqp=CAU'
    },
    {
      id: 4,
      name: 'TypeScript',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAwMDCtra3q6uqenp6Wlpbg4OD09PQsLCw7Ozv5+fnl5eXw8PBJSUkgICDBwcERERFVVVW0tLSXl5eoqKjS0tLDw8Ovr6/Kysp9fX2KioqPj490dHQaGho1NTVkZGRmZmbZ2dlERER3d3dSUlIWFhbtwzl/AAAEN0lEQVR4nO2d7XqiMBBGjVUrqIgiFkUr6tr7v8Sl3e7WTD7pPrvO8LznZ0NCjikhmSQ6GAAAAAAAAAAAAAAAAAAAAAggS4YSSLJvGyZKBsm3DYePrnokQxjCkD0whCF/YAhD/sAQhvyBIQz5A0MY8geGMOQPDGHIHxjCkD8whCF/YAhD/sAQhvyBIQz5A0MY8geGMOQPDGHIHxjCkD8whCF/YAhD/sAQhvyBIQz5A0MY8geGMOQPDGHIHxgyNVyl2XqdRX1xxX8zLKuneKqNp8aHfPRVi0txXDIxnHUqfO6q7uTZvPiyX3EwnHYq/NlaxrJwfE4LX5sLMjx4MizW8g1fL/4spXTDbBHKs5NteI3oqbaSDVdRXbG1FYUYWt4RNmzPogzDcWy+s1DDU3S+mVDDIj7ji0jDZYeM5pMoYVxqGctMd+WkzI0xwNwysnnQ3IK26Lb0zC3MjrT+TDnp/79j240fND8ckcI8I2el6J1Hd/Ol69dnNb9aczMxtH76nzT0zul9arIIFCHAkD6GT3py+vHHeebKLsCwJNemJP2HP78AQ/o2NC7YuhtQhmEeMvQHpAQYBtvQjwDDilzr+5eUaUgnFlXvDI1BG+1MxRuu6Z1Hrz0zNEZtg1nTM0NLCKMIhPKFGdpiGLMnXw5pho46FnE9jgRDtXNUYXvui2HjrMR84lt2kmPobMSWWcVl/fCvDJfeKE9+km+ojv665J5OR4hhMOrtfnlIMTRm+pTpUbpheO1iZ+9W5RiqfahG9pVuQYbqOg/VaS/cUKlNqFIH6YZq+BKoVW1mkWWo1G3rr9ZZvKFSmWcM1741aABAoKFSSeUZxdE1UpGGSq1q996FWy8MW86uB5Jsq5FrqNSJxvs/0dcRJRu2D6R1D4O+li/bUKnU0rHqm1OlGypVGzWbaTNi+YZmTHxw7pnhxyKwhjZ064OhERTXJvy9MKQzR20XphzDycWZlJLStHe+FMNjm2PiSqQ/NSrQMP01Qrs5kqmEPMPfK/mLN3t6Q0qT9hzWX1Ml+0ETRSf+2rCNvWGjvQoutla80qppASnmhks67FyYe01ejZMY2iI4b0NzQDYYVKQZG2O+P9VCw7wNlS1COivuIr+NZW6hT4GZGzb2ey+25aGuD+XWelRIjwszNzS27UVATiRwN1TBA10GZEc1e8POP28/JQWwNwwt/xrQdUT+huFVNY2CZhdg2EnRPIMowVCdow/cWAauIgzVMPL8oe2IpQzDyBOI1pM3UgxVGnz3X+wbwMUYtm9G7/rvs/zdJi1vE5rvN7nzCwdkGb7Xt85H+tG+6bx0NZ9Iw3eS9bEeV/lLUY33x5sjdvMHiYbdgOE/MqRzov4Z1pvJPZsuByg6IvR7ojoAQxjyB4Yw5M/3DaO+0o8BdIE4niwZSiDpHHAFAAAAAAAAAAAAAAAAAAB4BD8BuG5+Gd7ei9UAAAAASUVORK5CYII='
    },
    {
      id: 5,
      name: 'React',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png'
    },
    {
      id: 6,
      name: 'jQuery',
      icon: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/jquery-512.png'
    },
    {
      id: 7,
      name: 'Node',
      icon: 'https://cdn.onlinewebfonts.com/svg/img_411896.png'
    },
    {
      id: 8,
      name: 'SQL',
      icon: 'https://w7.pngwing.com/pngs/897/968/png-transparent-computer-icons-database-computer-data-storage-others.png'
    },
    {
      id: 9,
      name: 'NoSQL',
      icon: 'https://getdrawings.com/free-icon-bw/mongodb-icon-12.png'
    },
    {
      id: 10,
      name: 'SASS',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/288_Sass_logo-512.png'
    },
    {
      id: 11,
      name: 'GitHub',
      icon: 'https://image.flaticon.com/icons/svg/25/25231.svg'
    },
    {
      id: 12,
      name: 'AWS',
      icon: 'https://cdn.worldvectorlogo.com/logos/amazon-icon.svg'
    },
  ]
};
