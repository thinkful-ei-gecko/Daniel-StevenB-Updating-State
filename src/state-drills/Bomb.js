import React from 'react';

export default class Bomb extends React.Component {
state = {
  count: 0
}

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
         count: this.state.count + 1
        })
      }, 1000)
    }
    
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let display = null;
    if (this.state.count % 2 === 0 && this.state.count < 8) {
        display = (
         <div>
          <p>tick</p>
        </div>
       )
      }
        
    else if (this.state.count >= 8 ) {
      display = (
        <div>
         <p>BOOM!!!</p>
       </div>)
      }

     else { display =(
      <div>
        <p>tock</p>
      </div>
    )};
    
    return display
  }
}