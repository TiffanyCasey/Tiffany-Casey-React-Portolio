import React from "react";
import {Card, Button, CardImg, CardTitle, CardText,CardBody
} from 'reactstrap';

// // import bookclub from "../Images/bookclub.jpg"
// import codequiz from "../images/codequiz.jpg"

function Projects(props) {
  return (
    // <main>
    <div className="featured-projects">
      <div className="row">
        <div className="col col-md-6">
          <Card>
            <Button id="project-button" block>{props.name}</Button>
            <CardImg top width="100%" src={props.picture} alt="website image"/>
            <CardBody>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>DESCRIPTION:</CardTitle>
              <CardText style={{fontSize:"18px"}}> {props.description} </CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>TECHNOLOGIES USED:</CardTitle>
              <CardText> {props.tech }</CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832"}}> GITHUB | DEPLOYED SITE</CardTitle>
            </CardBody>
          </Card>
        </div>
     
        {/* <div className="col col-md-6">
          <Card>
            <Button id="project-button" block>{props.name}</Button>
            <CardImg top width="100%" src={props.picture} alt="website image"/>
            <CardBody>
            <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>DESCRIPTION:</CardTitle>
            <CardText style={{fontSize:"18px"}}>{props.description }</CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>TECHNOLOGIES USED:</CardTitle>
              <CardText style={{fontSize:"18px"}}> {props.tech} </CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832"}}> GITHUB | DEPLOYED SITE</CardTitle>
            </CardBody>
          </Card>
        </div> */}
      </div>
      </div> 
      // </main>
  );
};
  
  export default Projects