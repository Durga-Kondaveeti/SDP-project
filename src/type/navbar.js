import React from "react";
import {Link} from "react-router-dom"
function navbar() {
    return (
        <div className="homes">
            
           
            <ul >
                <Link to="/home"><li >home</li></Link>
               <Link to="/dashboard" ><li>dashboard</li></Link>
               <Link to="/about" ><li>about</li></Link>
              
            </ul>
           
        </div>
    )
}

export default navbar
