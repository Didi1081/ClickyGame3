import React from 'react';
import './Header.css';


function Header(props){
    return(
    <div className="header">
        <div>Score: {props.score}</div>
        <div>{props.title}</div>
    </div>
    )
}



export default Header;