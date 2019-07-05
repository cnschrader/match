import React from 'react';

import Wrapper from "./components/Wrapper";

import './App.css';
import Images from "./components/Cards";
import pictures from '../src/images.json'



class App extends React.Component {

  state = {
    pictures,
    score: 0,
    bestScore: 0
  }

  shuffle = pictures => {
   
    let i,
        j,
        temp;
    for (i = pictures.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = pictures[i];
        pictures[i] = pictures[j];
        pictures[j] = temp;
    }
    return this.setState({ pictures: this.state.pictures})
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

          
            id={picture.id}
            image={picture.image}
            
          />
        ))}

        </Wrapper>


      </React.Fragment>




    )
  }
}



export default App;
