import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import  Logo  from "../images/logo.png";
import "../css/carousel.css";
function UncontrolledExample() {
  return (
<div id="gallery" style={{backgroundColor:"#88FF8A"}}>
    <p className="about">ABOUT US</p>
    <Carousel>
      <Carousel.Item>
       
        <Carousel.Caption>
        <h3>First slide label</h3><br></br>
          <p className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit pretium felis, at posuere ex mollis vitae. Curabitur euismod fermentum ex id tristique. Donec facilisis lectus non ligula lacinia sodales. Cras vitae ex hendrerit, varius massa sed, euismod orci. Orci varius natoque penatibus et magnis dis  parturient montes, nascetur ridiculus mus. Aenean blandit mauris arcu, non cursus arcu convallis sed. Etiam.</p>

        </Carousel.Caption>
        <img
          src={Logo} className="plant-carousel"
        />
      </Carousel.Item>
      <Carousel.Item>
       

        <Carousel.Caption>
          <h3>Second slide label</h3><br></br>
          <p className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit pretium felis, at posuere ex mollis vitae. Curabitur euismod fermentum ex id tristique. Donec facilisis lectus non ligula lacinia sodales. Cras vitae ex hendrerit, varius massa sed, euismod orci. Orci varius natoque penatibus et magnis dis  parturient montes, nascetur ridiculus mus. Aenean blandit mauris arcu, non cursus arcu convallis sed. Etiam.</p>

        </Carousel.Caption>
        <img
          src={Logo} className="plant-carousel" style={{alignContent:"center"}}
        />
      </Carousel.Item>
      <Carousel.Item>
       

        <Carousel.Caption>
          <h3>Third slide label</h3><br></br>
          <p className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit pretium felis, at posuere ex mollis vitae. Curabitur euismod fermentum ex id tristique. Donec facilisis lectus non ligula lacinia sodales. Cras vitae ex hendrerit, varius massa sed, euismod orci. Orci varius natoque penatibus et magnis dis  parturient montes, nascetur ridiculus mus. Aenean blandit mauris arcu, non cursus arcu convallis sed. Etiam.</p>

        </Carousel.Caption>
        <img
          src={Logo} className="plant-carousel"
        />
      </Carousel.Item>
    </Carousel>
    </div>
 
  );
}

export default UncontrolledExample;