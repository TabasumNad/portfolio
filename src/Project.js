import React from "react";
import { Link } from "react-router-dom";

function Project()
{
    return(
        <div>
            <div>
            <h2 className="connect"><u>Projects worked on</u></h2>
            
            </div>
            <div className="project_container">
                <div className="project_box">
                    <img src="https://miro.medium.com/max/945/1*hT0650uAynINJMeIftDj-g.png" alt="project_pic" className="project_image"/>
                    <hr className="hrcol"></hr>
                    <p className="project_description">In computer programming, create, read, <br></br> update, and delete (often referred to <br></br>via the acronym CRUD) are the four<br></br> basic operations of persistent storage</p>
            
                    <a href=" https://github.com/TabasumNad/crudui"  target="_blank" className="link">Github</a>
                    <a href="https://aquamarine-wisp-72ce4d.netlify.app/"  target="_blank" className="link">Deploy</a>



                </div>
                <div className="project_box">
                    <img src="https://miro.medium.com/max/945/1*hT0650uAynINJMeIftDj-g.png" alt="project_pic" className="project_image"/>
                    <hr className="hrcol"></hr>
                    <p className="project_description">In computer programming, create, read, <br></br> update, and delete (often referred to <br></br>via the acronym CRUD) are the four<br></br> basic operations of persistent storage</p>

                    <a href=""  target="_blank" className="link">Github</a>
                    <a href=""  target="_blank" className="link">Deploy</a>

                </div>

            </div>
            
            </div>
        
    )
}

export default Project;