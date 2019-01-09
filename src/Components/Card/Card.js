import React from 'react';
import './Card.css';



function Card(props) {
    return(
    <div onClick={()=> props.handleClick(props.id)} className="card">

        <div>{props.name}</div>
        <div> <img className="image" src={props.img}></img></div>

    
    </div>
    )
}




export default Card;