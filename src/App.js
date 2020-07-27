import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {
  return (
  <div className="App"> 

      <div className="Nav">
        <NavBar></NavBar>
      </div>

      <div className='About'>
        <About></About>
      </div>

      <div className='Projects'>
        <Header></Header>
        <Projects></Projects>
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

export default App;
