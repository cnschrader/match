import React from "react";


function Images(props) {
    return (
        <div className="card">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      </div>

    )
}

export default Images;