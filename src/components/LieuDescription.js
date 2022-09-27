import React from "react";
// import obscuraAxios from "../obscuraAxios";
import { Link } from "react-router-dom";

export const LieuDescription = () => {
    
    // recup descs du local storage
    let descStocked = JSON.parse(localStorage.getItem("descriptionValues"));
    if(descStocked != null){
        console.log("------ desc code local storage ------")
        console.log(descStocked)

        return(
        <div>
            <h1>BRAVO !</h1>
            <div>LIEU : <br/>{descStocked.lieu}</div><br/>
            <div>DESCRIPTION : <br/>{descStocked.description}</div><br/>
            <div>Bonus : <br/>{descStocked.bonus}</div>
            <br/><br/><br/><br/><br/>
            <Link to="/"><button>HOME</button></Link>
        </div>)
    } else {
        return( 
        <div>
            <h1>Mauvais code...</h1>
            <Link to="/"><button>RETRY</button></Link>
        </div>)
    } 
};