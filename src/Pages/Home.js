import React, {Component} from "react";
import '../App.css';
// import projects from "../projects.json";
// import NavBar from '../components/NavBar';
import About from '../components/About';
// import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Header from '../components/Header';

const projects = [
  {
      "id": "home1",
      "image": "images/bookclub.jpg",
      "name":"Book Club",
      "description": "My Bookclub is a way for you to find ideas for whabook to read next. Join an online bookclub and read along with thchosen book or add your own suggestions for what you think the clushould read next. You can also create you own bookclub and keetrack of all of the books on your reading wishlist. If you'rlooking for book reccomendations check out our list of top bookthat users are enjoying this month.",
      "tech": "HTML5, CSS3, Materialize, Handlebars, JavaScript, jQueryNY Times API, Google Books API",
      "github": "https://github.com/TiffanyCasey/BookClub",
      "site": "https://book-club-application.herokuapp.com/"
      },
      {
      "id": "home2",
      "image": "images/dineindineout.jpg",
      "name":"Dine In. Dine out.",
      "description": "We’ve all been there before. You’re hungry, but ydon’t quite know what you want to eat. Should you use what you hain your fridge, or is there something close by you can pick uWith “What’s for Dinner” you can quickly navigate between the toptions and see what’s at your fingertips before you start to ghangry.",
      "tech": "HTML5, CSS3, Materialize, JavaScript, jQuery, SpoonaculAPI, Zomato API",
      "github": "https://github.com/TiffanyCasey/wineAndDine",
          "site": "https://jvernot.github.io/wineAndDine/"
      }
  ]

class App extends Component {

  render() {
    console.log("PROJECTS", projects)
  return (
  <main>
    <div className="App"> 

      {/* ABOUT SECTION */}
      <div className='About'>
        <About />
      </div>

      {/* PROJECTS SECTION */}
      <div className='Projects'>
        <Header
          header="projects."
        />
        {projects.map(project => (
        <Portfolio
          key={project.id}
          id={project.id}
          picture={project.image}
          name={project.name}
          description={project.description}
          tech={project.tech}
          github={project.github}
          site={project.site}
        />
        ))}
       
        <button 
          type="submit"
          className="profile btn-lg"
          onClick={(event) => (window.location.href = "portfolio")}
          >
          SEE FULL PORTFOLIO
          </button>
        </div>
 

      {/* SKILLS SECTION */}
      <div className='Skills'>
        <Header
          header="skills."
        />
        <Skills />
        </div>

      {/* RESUME SECTION */}
      <div className='Resume'>
        <Resume />
      </div>

      {/* CONTACT SECTION */}
      <div className='Contact'>
        <Contact />

      </div>
    </div>
  </main>
  );
}
}
export default App;
