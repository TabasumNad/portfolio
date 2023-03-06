import React from "react";
import { Link ,NavLink} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
            <Link className="navbar-brand me-5 ms-3 " href="#">TN</Link>
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
        
                <li className="nav-item ">
                    <NavLink className="nav-link active know_Page" 
                  aria-current="page" exact to="/">About Me</NavLink>

                </li>
        
                <li className="nav-item ">
                  <NavLink className="nav-link active" 
                  aria-current="page" exact to="/skills">Skills</NavLink>
                </li>

                <li className="nav-item know_Page">
                  <NavLink className="nav-link active" 
                  aria-current="page" exact to="/projects">Project</NavLink>
                </li>


                <li className="nav-item know_Page">
                  <NavLink className="nav-link active" 
                  aria-current="page" exact to="/experience">Experience</NavLink>
                </li>

                <li className="nav-item know_Page">
                <NavLink className="nav-link active"
                 aria-current="page" exact to="/contact">Contact</NavLink>
                </li>

                {/* <li className="nav-item">
                  <NavLink className="nav-link active" 
                  aria-current="page" exact to="/achievement">Achievement</NavLink>
                </li> */}
               
              </ul>
            </div>
            
          </div>
        </nav>
            );
        }

   export default Navbar;     

