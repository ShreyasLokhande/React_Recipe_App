import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';
const Recipe = ({title,calories,image,ingredients}) => {
    return(
     <center> 
        <div className="recipes">
             <center><h1>{title}</h1>
               <h3> <p><b>Calories : </b>{calories}</p></h3>
            <ol className="order"><h2> Ingredients </h2>
                {ingredients.map(ingredients =>(
                    <center><ol>{ingredients.text}</ol></center>
                ))}
            </ol>
            <img classname="image" src= {image} alt=""/>
            </center>
        </div>
     </center> 
    
    )
}

export default Recipe;