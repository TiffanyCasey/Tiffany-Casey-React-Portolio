import React from "react";

function Skills() {
    return (
      <div className="table-responsive">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th>HTML</th>
                <th>MySQL</th>
                <th>jQuery</th>
                <th>APIs</th>
              </tr>
              <tr>
                <th>CSS</th>
                <th>SQL</th>
                <th>Node.JS</th>
                <th>Tests</th>
              </tr>
              <tr>
                <th>JavaScript</th>
                <th>MongoDB</th>
                <th>React</th>
                <th>Adobe XD</th>
              </tr>
            </tbody>
          </table>
      

      <div className="resumeWrapper">
          <a
            type="submit"
            className="Resume"
            // onClick={(event) => (window.location.href = "contact")}
            href="https://drive.google.com/file/d/1lQ0DFKXlFZPcc_YD1DdXwwkFqTnORYoc/view?usp=sharing" 
            rel="noopener noreferrer" 
            target="_blank"
            >
            VIEW MY RESUME
            </a>
      </div>
      </div> 
     
    );
  }
  
  export default Skills