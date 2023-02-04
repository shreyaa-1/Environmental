import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import People from "../images/people.jpg";
import "../css/card.css";

import Fb from "../images/fb.png";
import Ig from "../images/ig.png";
import Lin from "../images/link.png";
import Twt from "../images/twt.png";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GroupExample() {
  return (
    <div id="team">
  





<Container>
     
      <Row >
        
      <p className="about">OUR TEAM</p>


        <Col className="p-1">
        <Card>
        <div class="container">
      <Card.Img variant="top" src={People} style={{width:"18rem", height:"15rem", borderRadius:"40rem" }} className="mx-auto"/>
        <Card.Body>
          <Card.Title style={{textAlign:"center", color:"green"}}>CT LS</Card.Title>
         <Card.Text style={{fontFamily:"monospace"}}>
         This card has supporting text below as a natural lead-in to
            additional content.wider card with supporting text below as a natural lead-in
            to additional content. This content is a lit 
          </Card.Text>

          <div class="overlay">
    <div class="text">
        <div class="list">
          <div class="list-item"><img src={Fb} /></div>
          <div class="list-item"><img src={Ig} /></div>
          <div class="list-item"><img src={Twt} /></div>
        </div>
    </div>
    </div> 
        </Card.Body>
       </div>
        
       </Card>
        </Col>




        <Col className="p-1">
          <Card>
        <div class="container">
      <Card.Img variant="top" src={People} style={{width:"18rem", height:"15rem", borderRadius:"40rem" }} className="mx-auto"/>
        <Card.Body>
          <Card.Title style={{textAlign:"center", color:"darkgreen"}}>PQ LS</Card.Title>
         <Card.Text style={{fontFamily:"monospace"}}>
         This card has supporting text below as a natural lead-in to
            additional content.wider card with supporting text below as a natural lead-in
            to additional content. This content is a lit 
          </Card.Text>

          <div class="overlay">
    <div class="text">
        <div class="list">
          <div class="list-item"><img src={Fb} /></div>
          <div class="list-item"><img src={Ig} /></div>
          <div class="list-item"><img src={Twt} /></div>
        </div>
    </div>
    </div> 
        </Card.Body>
       </div>
        
       </Card>
        </Col>
        <Col className="p-1">
        <Card>
        <div class="container">
          
      <Card.Img variant="top" src={People} style={{width:"18rem", height:"15rem", borderRadius:"40rem"}} className="mx-auto"/>
        <Card.Body>
          <Card.Title style={{textAlign:"center" , color:"darkgreen"}}>AB LS</Card.Title>
         <Card.Text style={{fontFamily:"monospace"}}>
         This card has supporting text below as a natural lead-in to
            additional content.wider card with supporting text below as a natural lead-in
            to additional content. This content is a lit 
          </Card.Text>

          <div class="overlay">
    <div class="text">
        <div class="list">
          <div class="list-item"><img src={Fb} /></div>
          <div class="list-item"><img src={Ig} /></div>
          <div class="list-item"><img src={Twt} /></div>
        </div>
    </div>
    </div> 
        </Card.Body>
       </div>
       </Card>
        </Col>
      </Row>
    </Container>










    </div>
  );
}

export default GroupExample;