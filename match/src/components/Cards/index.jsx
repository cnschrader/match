import React from "react";
import "./style.css"
// import pictures from '../src/images.json'

class Images extends React.Component{

  // state = {
  //   pictures,
    
  // }

  render(props) {
    return (

    
      <div className="card">
        
        
          <div className="img-container">
          <button>
           <img alt={props.name} src={props.image} />
            
          </button>
          </div>
          
      </div>
      
  
  
  
  
  
  
    )
  }
}




export default Images;