import React from "react";
import "./skills.css";
import mongo from '../../images/mongo.png'

const MySkills = () => {
  return (
    <>
      
      <section class="section-about">
        <div class="container">
          <h2 class="section-common-heading">Skillset</h2>
        </div>
        <div class="container grid grid-five--cols">

          <div class="about-div">
            
            <i className="fa-brands fa-html5"></i>
            
            <h3 class="section-common--title">HTML5</h3>
            <p>
              
            </p>
          </div>


          <div class="about-div">
            
            <i class="fa-brands fa-css3-alt"></i>
          
            <h3 class="section-common--title">CSS3</h3>
            <p>
              
            </p>
          </div>


          <div class="about-div">
            
            <i class="fa-brands fa-js"></i>
            
            <h3 class="section-common--title">JAVASCRIPT</h3>
            <p>
              
            </p>
          </div>


          <div class="about-div">
            
            <i class="fa-brands fa-bootstrap"></i>
        
            <h3 class="section-common--title">BOOTSTRAP</h3>
            <p>
              
            </p>
          </div>


          <div class="about-div">

            <i class="fa-brands fa-github"></i>
            <h3 class="section-common--title">GITHUB</h3>
            <p>
              
            </p>
          </div>


          <div class="about-div">
            <i class="fa-brands fa-node"></i>
            <h3 class="section-common--title">NODEJS</h3>
            <p>
              
            </p>
          </div>



          <div class="about-div">
           
            <i class="fa-brands fa-react"></i>
            
            <h3 class="section-common--title">REACTJS</h3>
            <p>
              
            </p>
          </div>


          <div class="about-div">
            
            <i class="fa-brands fa-java"></i>
           
            <h3 class="section-common--title">JAVA</h3>
            <p>
              
            </p>
          </div>



          <div class="about-div">
            
            <i class="fa-brands fa-npm"></i>
          
            <h3 class="section-common--title">NPM</h3>
            <p>
              
            </p>
          </div>


          <div class="about-div">
            
            <img src={mongo} alt="mongodb" />
           
            <h3 class="section-common--title  mongo">MONGODB</h3>
            <p>
              
            </p>
          </div>




          {/* <div class="about-div">
            <div class="icon">
            <i class="fa-brands fa-java"></i>
            </div>
            <h3 class="section-common--title">JAVA</h3>
            <p>
              
            </p>
          </div> */}


        </div>
      </section>
    </>
  );
};

export default MySkills;
