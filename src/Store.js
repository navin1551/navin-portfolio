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
  projects: [
    {
      id: 1,
      title: "Steelers Quiz App",
      description:
        "Interactive quiz on the Pittsburgh Steelers football team where users can answer 10 multiple choice questions and receive a final score at the end and can choose to retake the quiz. I built this app as my first submission to my portfolio because it highlights what I have learned so far in regards to HTML, CSS and JavaScript. Go Steelers!",
      tech: "JavaScript, jQuery, HTML5, CSS3, GitHub",
      img1: SteelersOpeningPage,
      img2: SteelersQuestions,
      img3: SteelersBigBen
    },

    {
      id: 2,
      title: "Educator Locator",
      description:
        "Web app that allows users to search elementary, middle, and highschools as well as colleges and universities in a given city and state. Once users has searched a given location, they are given the chance to start a new search. I built this app to demonstrate my ability to use an API to fetch external data and display it to the DOM",
      tech: "JavaScript, jQuery, AJAX, HTML5, CSS3, GitHub",
      img1: EducatorHomePage,
      img2: EducatorLevel,
      img3: EducatorResults
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
      img3: DoggyPost
    },

    {
      id: 4,
      title: "Cocktail Critic",
      description:
        "App that allows users to create a user name and\
      password to login and search for popular alcoholic drinks and leave\
      reviews and ratings. Users can choose to view a list of their own\
      reviews in their profile page or can view other users reviews in the\
      posted reviews page. I decided to build this app to showcase my\
      ability implement a third part AJAX request into a full stack app\
      that I created using React, Node/Express.js and PostgreSQL. I also\
      thought it would be a fun idea as I'm sure everyone has ordered a\
      drink they wanted to make sure they did or didn't order a second\
      time.",
      tech:
        "React, Node/Express, PostgreSQL, AJAX, HTML5, CSS3,Jest, Mocha/Chai testing, JWT auth, Zeit, Heroku, GitHub",
      img1: CocktailLandingPage,
      img2: CocktailReviews,
      img3: CocktailSearch
    }
  ]
};
