import React, {Component} from "react";
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";

import projects from "../src/projects.json";

import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';

// import ContactPage from '../src/Pages/Contact';
// import PorfolioPage from '../src/Pages/Portfolio';

class App extends Component {

state = {
  projects
};

  render() {
  return (
  <div className="App"> 
      <BrowserRouter>
     
        <div className="Nav">
          <NavBar>
            <Route exact path="/" component={App} />
            {/* <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/portfolio" component={PorfolioPage} /> */}
          </NavBar>
        </div>
    
      </BrowserRouter>

      <div className='About'>
        <About></About>
      </div>

      <div className='Projects'>
        <Header></Header>
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
        <button className="btn-lg">SEE FULL PORTFOLIO</button>
      </div>

      <div className='Skills'>
        <Header></Header>
        <Skills></Skills>
      </div>

      <div className='Resume'>
        <Resume></Resume>
      </div>

      <div className='Contact'>
        <Contact></Contact>
      </div>

      <div className='Footer'>
        <Footer></Footer>
      </div>

  </div>

  );
}
}
export default App;
