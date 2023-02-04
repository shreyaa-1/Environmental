import React from "react";
import "../css/footer.css";
import Fb from "../images/fb.png";
import Ig from "../images/ig.png";
import Lin from "../images/link.png";
import Twt from "../images/twt.png";
import  Logo  from "../images/logo.png";
function UncontrolledExample() {
    return (
        <div id="footer" class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li class="item"><a href="#">Web design</a></li>
                            <li class="item"><a href="#">Development</a></li>
                            <li class="item"><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>

                            <li class="item"><a href="#">Company</a></li>
                            <li class="item"><a href="#">Team</a></li>
                            <li class="item"><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-3 item">
                        <h3>Copy</h3>
                        <ul>

                            <li class="item"><a href="#">Company</a></li>
                            <li class="item"><a href="#">Team</a></li>
                            <li class="item"><a href="#">Careers</a></li>
                        </ul>
                    </div>
                   
                    <div class="col item social"><a href="#"><img src={Fb} /></a><a href="#"><img src={Ig} /></a><a href="#"><img src={Lin} /></a><a href="#"><img src={Twt} /></a>
                   </div>
                  
                </div>
                <p class="copyright">Company Name © 2018</p>
           
            </div>
        </footer>
    </div>

    )};

    export default UncontrolledExample;