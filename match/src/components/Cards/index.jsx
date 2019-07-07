import React from "react";
import "./style.css"
// import pictures from '../src/images.json'

function Images(props) {
  return (


    <div className="card">
      

        <div className="img-container">
        <button onClick={() => props.handleClick(props.name)}>



          <img alt={props.name} src={props.image} />
          </button>
        </div>
        
      
    </div>






  )
}




export default Images;