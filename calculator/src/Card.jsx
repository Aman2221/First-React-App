import React from 'react';
import './App.css'
import './App.js'
function Card(props){
    return(
        <>
            <div id='cards'>
                <div id="card">
                    <img id='' src={props.imgsrc} alt=''/>
                    <p id="card-desc"></p>
                    <h2 id='card_name'>{props.para}</h2>
                    <a href={props.anchor}>WATCH NOW</a>
                </div>
            </div>
        </>
    )
}
export default Card;