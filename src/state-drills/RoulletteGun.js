import React from 'react';

class RoulletteGun extends React.Component {
  static defaultProps = {bulletInChamber: 8}
 state = {
   chamber: null, 
   spinningTheChamber: false
 }

handleClick = e => {
  this.setState({
    spinningTheChamber: true,
  })
  this.timeout = setTimeout(() => {
    this.setState({chamber: Math.ceil(Math.random() * 8), spinningTheChamber: false})
  }, 2000);
}

componentWillUnmount() {
  clearTimeout(this.timeout);
}

  displayRender() {
    if (!this.state.chamber) {
      return (
        <p>Step Right Up!</p>
      )
    }
    else if (this.state.spinningTheChamber === true ) {
      return (
        <p>Chamber is spinning...</p>
      )
    }
    else if (this.state.chamber === this.props.bulletInChamber) {
      return (
        <p>Bang!!!</p>
      )
    }
    else {
      return (
      <p>You're safe</p>
      )
    }
  }

  render() {
    return (
    <div>
      {this.displayRender()}
      <button onClick={this.handleClick}>Pull the trigger!</button>
    </div>
    )
  }
}
export default RoulletteGun