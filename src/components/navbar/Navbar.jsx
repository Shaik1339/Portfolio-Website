import React from 'react'
import { Link } from 'react-router-dom';
import hero from '../section-hero/Hero'
import './navbar.css';

const Navbar = () => {

 return(
  <>
  <header className="section-navbar">
  <div className="container">
      <div className="navbar-brand">
        <Link to={hero}>
          <h3>Port<span>folio</span></h3>
        </Link>
      </div>
      <div>
          <nav className="navbar">
              <ul>
                  <li className="nav-item"><Link to='/' className="nav-link" >Home</Link></li>
                  {/* <li className="nav-item"><Link to={about} className="nav-link" >About</Link></li> */}
                  <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
                  <li className="nav-item"><Link to="/skills" className="nav-link" >Skills</Link></li>
                  <li className="nav-item"><Link to="/contact" className="nav-link" >Contact</Link></li>
                  
              </ul>
          </nav>

      </div>
  </div>
</header>
  </>
  
 );
}

export default Navbar