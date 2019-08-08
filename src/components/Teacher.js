import React, { Component } from 'react';

class Teacher extends Component {
  constructor(props) {
    super(props);

    this.sendDataToKid = this.sendDataToKid.bind(this);
  }

  sendDataToKid() {
    const furtherSteps = ['step3', 'step4', 'step5'];
    // console.log(this);

    this.props.updateDanceSteps(furtherSteps);
  }

  render() {
    return <button onClick={this.sendDataToKid}>Get Help From Teacher</button>;
  }
}

export default Teacher;
