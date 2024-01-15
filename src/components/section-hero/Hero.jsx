import React from 'react';
import hero from '../../images/me.png';
import { Link } from 'react-router-dom';
import './hero.css'

const Hero = () => {
  return (
    <>
        <main>
        <div className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="section-hero--content">
                    <p className="hero-subheading">
                        Hello world, I'm Shaik 
                    </p>
                    <h1 className="hero-heading">
                        FullStack Webdeveloper
                    </h1>
                    <p className="hero-para">
                    I'm a passionate and responsible  specializing in frontend technologies like HTML, CSS, Javascript, and frameworks like React.js
                    and Specializing in Backend technologies NodeJs,expressJs and mongoDB, to Create realtime web applications with elegant and
                    efficent code. 
                    </p>
                    <div className="hero-button">
                        <Link to="/contact" className="btn btn-white">Contact Me</Link>
                    </div>
                </div>

                <div className="section-hero--image">
                    <figure>
                        <img src={hero} alt="hero 3d pic"/>
                    </figure>

                </div>

            </div>

        </div>
        </main> 
    </>
  )
}

export default Hero