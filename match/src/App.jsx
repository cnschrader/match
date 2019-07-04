import React from 'react';
import Header from './components/header'

import './App.css';

// function App() {
//   return (
//     <React.Fragment>
//       <header>Match!</header>
//     </React.Fragment>
//   );
// }

class App extends React.Component {
 
handleIncrement = () => {
  this.setState({ score: this.state.score + 1})
}

  render(){
    return (
    <React.Fragment>
      <Header>
    
      </Header>
    </React.Fragment>
    )
  }
}



export default App;
