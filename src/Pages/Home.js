import React, {Component} from "react";
import '../App.css';
import projects from "../projects.json";
// import NavBar from '../components/NavBar';
import About from '../components/About';
// import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Header from '../components/Header';

class App extends Component {

state = {
  projects
};

  render() {
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
        {this.state.projects.map(project => (
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
       
        <button className="profile btn-lg">SEE FULL PORTFOLIO</button>
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
