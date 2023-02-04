import React from "react";
import Button from 'react-bootstrap/Button';
import Plant from "../images/plant.png";
import Tree from "../images/tree.jpg";
import Nature from "../images/nature.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ColorSchemesExample() {
    const mystyle = {
        color: "black",
        fontSize:"4rem",
        color:"green",
        fontFamily:"Times New Roman",
        wordSpacing:"0.7rem",
        fontWeight:"bold"
    };

 
    return (
      


<div id="home" style={{paddingLeft:"3vh", paddingTop:"20vh"}}>

<Row>
        <Col sm={8} >


       
 <h1 style={mystyle}>Let Us Step For <br /> GREEN and CLEAN</h1>
 <h1 style={{color:"orange" ,fontSize:"4rem", fontFamily:"sans-serif"}}>INDIA <img src={Plant} className="plant" style={{width:"5rem",height:"5rem"}}/></h1>
 <p style={{color:"green" , fontFamily:"monospace"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit pretium felis, at posuere ex mollis vitae. Curabitur euismod fermentum ex id tristique. Donec facilisis lectus non ligula lacinia sodales. Cras vitae ex hendrerit, varius massa sed, euismod orci. Orci varius natoque penatibus et magnis dis  parturient montes, nascetur ridiculus mus. Aenean blandit mauris arcu, non cursus arcu convallis sed. Etiam.</p>
 <br></br>
 <Button variant="success" size="sm" className="px-5 py-2 button">SignUp</Button>
 







        </Col>

        <br></br>
        <Col sm={4}>

   <p style={{alignItems:"center"}}>   
<img src={Tree} className="plant" style={{width:"20rem",height:"20rem", borderRadius:"30vw", border:"2px solid white", alignSelf:"center"}}/></p> 
 <p style={{alignContent:"center"}}><img src={Nature} className="plant" style={{width:"15rem",height:"15rem", borderRadius:"30vw", border:"2px solid white", alignSelf:"center" }}/></p>
 {/* <img src={Plant} className="plant" style={{width:"15rem",height:"15rem", borderRadius:"30rem", border:"1px solid green" ,marginRight:"10rem"}}/> */}






        </Col>
      </Row>


</div>


        );}

        export default ColorSchemesExample;