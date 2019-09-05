import React from 'react';

export default class Bomb extends React.Component {
state = {
  count: 0
}

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('tick')}, 1000)
    }
    
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}