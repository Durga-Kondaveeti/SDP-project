import React,{useEffect,useState} from "react";
import {getSigns} from '../services/api';


export const SelectSign=({onSignSelected})=>{
    const [signs,setSigns]=useState([]);
    useEffect(() => {
        getSigns().then(setSigns);
       }, []);
    
    return(
        <div className="grid">
        {signs.map ((sign)=>
        (
            <center> <button className="signsbutton" 
            style={{backgroundColor:"transparent", border:"none",color:"white",fontStyle:"bold" }}
           className="sign" 
          key={sign}
          onClick={()=> onSignSelected(sign)}>
             <img src={"./img/"+sign+".jpg"} alt="my image"   width="150px"height="100px"/>

            {sign.charAt(0).toUpperCase() + sign.slice(1)}
            </button></center>
        ))}
        </div>
    )
}
