import React, {Component} from "react";
import '../App.css';
import projects from "../projects.json";
import About from '../components/About';
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

class App extends Component {


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

        <Wrapper>
          <Portfolio
            key={projects[0].id}
            id={projects[0].id}
            picture={projects[0].image}
            name={projects[0].name}
            description={projects[0].description}
            tech={projects[0].tech}
            github={projects[0].github}
            site={projects[0].site}
          />

          <Portfolio
            key={projects[1].id}
            id={projects[1].id}
            picture={projects[1].image}
            name={projects[1].name}
            description={projects[1].description}
            tech={projects[1].tech}
            github={projects[1].github}
            site={projects[1].site}
          />
        </Wrapper>
        
       
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
