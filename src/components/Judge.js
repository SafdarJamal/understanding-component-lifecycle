import React, { Component } from 'react';

class Judge extends Component {
  constructor(props) {
    super(props);

    this.state = { stars: 0, available: false };
  }

  applaud() {
    //Send this applaud status to Kid.js
    this.props.getApplaud();
  }

  provideStars() {
    const { stars } = this.state;

    if (stars + 1 === 5) {
      this.props.qualified();
    }

    this.setState({ stars: stars + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.stars > 5) {
      return false;
    }

    return true;
  }
  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <br />
        <button type="button" onClick={this.applaud.bind(this)}>
          Appreciate performance
        </button>
        <br />
        <br />
        <button type="button" onClick={this.provideStars.bind(this)}>
          Provide stars
        </button>
        <br />
        Kid is available: {available}
        Stars gained: {stars}
      </div>
    );
  }
}

export default Judge;
