import React from "react";
import {Card, Button, CardImg, CardTitle, CardText,CardBody
} from 'reactstrap';
import bookclub from "../Images/BookClub.png"

const Projects = (props) => {
  return (
    <div className="featured-projects">
      <div class="row">
        <div class="col col-md-6">
          <Card>
            <Button id="project-button" block>BOOK CLUB</Button>
            <CardImg top width="100%" src={bookclub} alt="Card image cap" />
            <CardBody>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>DESCRIPTION:</CardTitle>
              <CardText style={{fontSize:"18px"}}>My Bookclub is a way for you to find ideas for what book to read next. Join an online bookclub and read along with the chosen book or add your own suggestions for what you think the club should read next. You can also create you own bookclub and keep track of all of the books on your reading wishlist. If you’re looking for book recommendations check out our list of top books that users are enjoying this month.</CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>TECHNOLOGIES USED:</CardTitle>
              <CardText> HTML5, CSS3, Materialize, Handlebars, JavaScript, jQuery, NY Times API, Google Books API</CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832"}}> GITHUB | DEPLOYED SITE</CardTitle>
            </CardBody>
          </Card>
        </div>
     
        <div class="col col-md-6">
          <Card>
            <Button id="project-button" block>BOOK CLUB</Button>
            <CardImg top width="100%" src={bookclub} alt="Card image cap" />
            <CardBody>
            <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>DESCRIPTION:</CardTitle>
            <CardText style={{fontSize:"18px"}}>My Bookclub is a way for you to find ideas for what book to read next. Join an online bookclub and read along with the chosen book or add your own suggestions for what you think the club should read next. You can also create you own bookclub and keep track of all of the books on your reading wishlist. If you’re looking for book recommendations check out our list of top books that users are enjoying this month.</CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold"}}>TECHNOLOGIES USED:</CardTitle>
              <CardText style={{fontSize:"18px"}}> HTML5, CSS3, Materialize, Handlebars, JavaScript, jQuery, NY Times API, Google Books API</CardText>
              <CardTitle style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832"}}> GITHUB | DEPLOYED SITE</CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
        <button className="btn-lg">SEE FULL PORTFOLIO</button>
      </div> 
  );
};
  
  export default Projects