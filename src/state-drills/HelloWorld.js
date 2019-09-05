import React from 'react';


class HelloWorld extends React.Component {
  state = {
    who: null, 
  };

  handleClick = who => {
    this.setState ({
      who: who
    });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who} </p>
        <div>
          <button onClick= {() => this.handleClick('Friend')}>Friend</button>
          <button onClick = {() => this.handleClick('React')}>React</button>
          <button onClick = {() => this.handleClick('World')}>World</button>
         </div>
      </div>
    );
  }
}

export default HelloWorld;