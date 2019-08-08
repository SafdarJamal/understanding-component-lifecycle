import React, { Component } from 'react';

import Kid from './Kid';
import Teacher from './Teacher';
import Judge from './Judge';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0,
      isKidUnmount: false,
      isJudgeUnmount: false
    };

    this.updateDanceSteps = this.updateDanceSteps.bind(this);
    this.getApplaud = this.getApplaud.bind(this);
    this.qualified = this.qualified.bind(this);
    this.unmountKid = this.unmountKid.bind(this);
    this.unmountJudge = this.unmountJudge.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return { volume: 5 };
  }

  updateDanceSteps(furtherSteps) {
    this.setState({ furtherSteps });
  }

  getApplaud() {
    this.setState({ isApplauded: true });
  }

  qualified() {
    this.setState({ isQualified: true });
  }

  unmountKid() {
    this.setState({ isKidUnmount: true });
  }

  unmountJudge() {
    this.setState({ isJudgeUnmount: true });
  }

  render() {
    const {
      furtherSteps,
      isApplauded,
      isQualified,
      isKidUnmount,
      isJudgeUnmount
    } = this.state;

    // console.log(isQualified);

    return (
      <div>
        {!isKidUnmount && (
          <Kid
            dressColor="green"
            furtherSteps={furtherSteps}
            isApplauded={isApplauded}
            isQualified={isQualified}
            unmountJudge={this.unmountJudge}
          />
        )}
        <br />
        <Teacher updateDanceSteps={this.updateDanceSteps} />
        <br />
        {!isJudgeUnmount && (
          <Judge getApplaud={this.getApplaud} qualified={this.qualified} />
        )}
        <br />
        <button onClick={this.unmountKid}>Ask the Kid to Leave the Show</button>
      </div>
    );
  }
}

export default App;
