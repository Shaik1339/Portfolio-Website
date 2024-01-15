import React from "react";
import hot from '../../images/hot.PNG';
import drum from '../../images/drum.PNG';
import dice from '../../images/dice.PNG';
import edu from '../../images/edu.PNG';
import portfolio from '../../images/portfolio.PNG';
import { Link } from 'react-router-dom';

import './project.css'

const Projects = () => {
  return (
    <>
      <div className="section-blog">
        <div className="container">
          <h1 className="section-common-heading">My Projects</h1>
        </div>
        <div className="container grid grid-four--cols">

        <div className="blog">
            <figure>
            <Link to="https://shaik1339.github.io/Hotstarclone/"  target="_blank">
              <img src={hot} alt="normal one" />
            </Link>
            </figure>
            <div className="blog-content">
            <h3 class="section-common--title">Disney+ Hotstar Clone</h3>
              <p className="blog-para"> 
              Disney+ Hotstar is an Indian subscription video-on-demand 
              over-the-top streaming service owned by Disney India.
              </p>
            </div>
              
        </div>

        <div className="blog">
            <figure>
            <Link to="https://shaik1339.github.io/Drum-kit/"  target="_blank">
              <img src={drum} alt="drum kit image" />
            </Link>
            </figure>
            <div className="blog-content">
            <h3 class="section-common--title">Drum Music Kit </h3>
              <p className="blog-para"> 
               For music lovers it will heplful
               we can play Music with keyboard  by pressing keys mentioned on drums.
              </p>
            </div>
              
        </div>


        <div className="blog">
            <figure>
            <Link to="https://shaikeducation.netlify.app/"  target="_blank">
              <img src={edu} alt="normal one" />
            </Link>
            </figure>
            <div className="blog-content">
            <h3 class="section-common--title">SMM Education Website</h3>
              <p className="blog-para"> 
              Here you can learn latest trending Technologies and Courses efficiently,at anytime and anywhere.
              </p>
        </div>

        <div className="blog">
            <figure>
            <Link to="https://shaikdev.netlify.app/"  target="_blank">
              <img src={portfolio} alt="normal one" />
            </Link>
            </figure>
            <div className="blog-content">
            <h3 class="section-common--title">Personal Portfolio</h3>
              <p className="blog-para"> 
               This is Personal Portfolio website , where you can find My Projects , skills and Contact details 
               you can reach me at anytime for any Query.
              </p>
            </div>
              
        </div>

        <div className="blog">
            <figure>
            <Link to="https://shaik1339.github.io/Dicegame.github-io/ "  target="_blank">
              <img src={dice} alt="normal one" />
            </Link>
            </figure>
            <div className="blog-content">
            <h3 class="section-common--title">Dice Game</h3>
              <p className="blog-para"> 
               It is simple mini project we can play dice game with computer .
              </p>
            </div>
              
        </div>

        
              
        </div>

        <div className="blog">
            <figure>
            <Link to="https://shaik1339.github.io/Hotstarclone/"  target="_blank">
              <img src={hot} alt="normal one" />
            </Link>
            </figure>
            <div className="blog-content">
            <h3 class="section-common--title">Disney+ Hotstar Clone</h3>
              <p className="blog-para"> 
              Disney+ Hotstar is an Indian subscription video-on-demand 
              over-the-top streaming service owned by Disney India.
              </p>
            </div>
              
        </div>

      
        

        
        
        
        
         
        


         

        


          
        </div>
      </div>
    </>
  );
};

export default Projects;
