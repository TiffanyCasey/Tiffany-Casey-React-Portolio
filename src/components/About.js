import React from "react";
import tiffany from "../Images/Tiffany.jpg";

function About() {
    return (
    <div className="App">
      <div className="App-header">
        <span className="about-container">
          <div className="row">
            <div className="col-sm-3">
              <img src={tiffany} className="Tiffany-Image" alt="Tiffany headshot" />
            </div>   

            <div className="col-sm-9">
              <div className="about-container-text">
                <h2 id="about-header">Hello!!</h2>
                <p id="about-text">
                My name is Tiffany Casey and I’m a <strong>full stack web developer</strong> leveraging a successful career in tech sales and account management as well as the e-commerce space. I have a certificate in full stack development from the University of North Carolina-Chapel Hill, with skills in HTML, CSS, JavaScript, React.js, and responsive web design.</p>
            
                <p id="about-text">
                My curiosity for web development began in 2015 when I launched my e-commerce business, <strong><a id="link" href="https://FairSeasSupplyCo.com" rel="noopener noreferrer" target="_blank">Fair Seas Supply Co.</a></strong>, where I sell organic Turkish towels. I designed the brand and built my website on Shopify. As a solopreneur I wear many hats which also include managing all social channels, email campaigns and product developmentfor the brand.</p>
              
                <p id="about-text">
                I am passionate about creating seamless user experiences that delight customers and elevate brands. I am well positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging my background in digital marketing and online sales.</p>

                <p id="about-text">
                Feel free to browse my page to see some of the projects I've worked on as well as my skills and work history. 
                </p>
              </div>
            </div>

          </div>
        </span>
      </div>
    </div>
  );
}

export default About