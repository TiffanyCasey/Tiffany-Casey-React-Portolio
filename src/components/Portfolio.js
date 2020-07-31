import React from "react";
import {Card, Button, CardImg, CardTitle, CardText,CardBody
} from 'reactstrap';


function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <Card>
          <Button id="project-button" block>{props.name}</Button>
          <CardImg top width="100%" src={props.picture} alt="website image"/>
            <CardBody className="content">
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>DESCRIPTION:</CardTitle>
              <CardText style={{fontSize:"18px"}}> {props.description} </CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>TECHNOLOGIES USED:</CardTitle>
              <CardText> {props.tech }</CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832", textAlign:"center"}}> GITHUB | DEPLOYED SITE</CardTitle>
            </CardBody>
        </Card>
      </div>
    </div> 
  );
};
  
  export default Projects