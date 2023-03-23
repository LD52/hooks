import './App.css';
import React from 'react';


function Card(props){
    return (
        <div className="racine"> 
         <div className="box">
         <div className='movie'>
            {props.film.video}  
            </div></div>  
            <div className="bottom"> 
            <div className="profile"> <div className='img'>{props.film.profile}</div>   </div>
            <div className="text">
                <div className='haut'><h3>{props.film.title}</h3>  </div>
                <div className='bas'> {props.film.author}  </div>
                <div className='out'> {props.film.date} </div>
            </div>
              </div>
        </div>
    )
}

export default Card;