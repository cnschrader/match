import React from 'react';

class Header extends React.Component{

    state = {
        score: 0,
        bestScore: 0
      }
      

render() {
    return(<React.Fragment>
<nav class="navbar navbar-light bg-light">
  <span className="navbar-brand mb-0 h1">Score: {this.state.score}</span>
  <span className="navbar-brand mb-0 h1"> Best Score: {this.state.bestScore}</span>
</nav>
</React.Fragment>)
}
}

export default Header;