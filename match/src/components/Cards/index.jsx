import React from "react";
import "./style.css"
// import pictures from '../src/images.json'

function Images(props) {
  return (


    <div className="card">
      <div className="img-container">

        <div className="img-container">
        <button onClick={props.shuffle}>
          <img alt={props.name} src={props.image} />
          </button>
        </div>
        
      </div>
    </div>






  )
}




export default Images;