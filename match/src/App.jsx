import React from 'react';
import Header from './components/header';

import './App.css';
import Images from "./components/Cards/images";
import pictures from '..src/images.json'



class App extends React.Component {

  state = {
    
  }
 


  render(){
    return (
    <React.Fragment>
      <Header />
    
<Images></Images>
      
    </React.Fragment>

    
    
    )
  }
}



export default App;
