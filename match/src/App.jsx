import React from 'react';
// import Header from './components/header';

import './App.css';
import Images from "./components/Cards/images";
import pictures from '../src/images.json'



class App extends React.Component {

  state = {
    pictures,
    score: 0,
    bestScore: 0
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

        {this.state.pictures.map(picture => (
          <Images
          id={pictures.id}
          image={pictures.image}
           />
        ))}

      </React.Fragment>



    )
  }
}



export default App;
