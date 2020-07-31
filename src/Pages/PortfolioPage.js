import React, { Component } from 'react';

import Portfolio from '../components/Portfolio'
import projects from "../projects.json";

class PortfolioPage extends Component {

state = {
    projects
 };

render () {
return (
    <main>
        <div className ="grid-container">
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
        </div>
    </main>
  );
}
}

export default PortfolioPage