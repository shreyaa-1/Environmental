
import './App.css';
import Navbarone from './components/navbarone.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import Front from './components/front.js';
import Carousel from './components/carousel.js';
import Testimonial from './components/testimonial.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div className="app">
     
<Navbarone />
<Front />
<Carousel />
<Testimonial />

<Footer />


    </div>
 
  );
}

export default App;
