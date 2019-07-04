import React from 'react';

import './App.css';

// function App() {
//   return (
//     <React.Fragment>
//       <header>Match!</header>
//     </React.Fragment>
//   );
// }

class App extends React.Component {
state = {
  score: 0,
  bestScore: 0
}

handleIncrement = () => {
  this.setState({ score: this.state.score + 1})
}

  render(){
    return (
    <React.Fragment>
      <span>Score: {this.state.score}</span>
      
      <span>Best Score: {this.state.bestScore}</span>
    </React.Fragment>
    )
  }
}



export default App;
