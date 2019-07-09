import React from 'react';

import Wrapper from "./components/Wrapper";

import './App.css';
import Images from "./components/Cards";
import pictures from '../src/images.json'



class App extends React.Component {

  state = {
    pictures,
    score: 0,
    bestScore: 0,
    images: []

  }

  shuffle = () => {
    console.log('shuffling');
    const pictures = this.state.pictures;
    let i,
      j,
      temp;
    for (i = pictures.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = pictures[i];
      pictures[i] = pictures[j];
      pictures[j] = temp;
    }
    console.log(pictures)
    return this.setState({ pictures })
  }

  handleClick = (clickedImage) => {

    const images = this.state.images
    // const bestScore = this.state.bestScore
    const pictures = this.state.pictures
    
    console.log(pictures.id)
    
    
    
    
    
    for(let i = 0; i < images.length; i++)
    {
       
        if(images.includes(clickedImage)){
          this.gameReset()
          this.setState({ score: 0 })
       
        }
       
      
      }
       
  
  
    
    // if (images.find(function(clickedImage){
    //     return clickedImage
    //   })) {
    //       this.setState({ score: 0 })
    //       if (score > bestScore) {
    //           this.setState({ bestScore: score })
    //         }
    //       }
          
          images.push(clickedImage)
          console.log(clickedImage)
          this.setState({  images  })
    this.setState({ score: this.state.score + 1 })
    this.shuffle();
    console.log(images)

    

  }

  gameReset = () => {
    let score = this.state.score
    let bestScore = this.state.bestScore
    // this.setState({ score: 0 })
    if(score > bestScore){
      this.setState({ bestScore: score})
    }
  }

  


  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <nav class="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Score: {this.state.score}</span>
            <span className="navbar-brand mb-0 h1"> Best Score: {this.state.bestScore}</span>
          </nav>
        </React.Fragment>

        <Wrapper>{this.state.pictures.map(picture => (

          <Images


            key={picture.id}
            id={picture.id}
            image={picture.image}
            shuffle={this.shuffle}
            handleClick={this.handleClick}

          />
        ))}

        </Wrapper>


      </React.Fragment>




    )
  }
}



export default App;


// handleClick method
// -- make hc a prop = this.handleclick
// -- pass into the onClick on image component. 

// Handleclick
// empty array in state called images. ==> all images user clicks on. 
// 1.Check if what the users clicked on is already in the images array array.find. or looping. 
// 2. if its true, games over.
// 3. check if current score, better than best. 
// - if it is, set current score to best score.
// 4. push to image array if its not in the array.
// 5. increment score by 1. 
// 6. call this.shuffle. 
