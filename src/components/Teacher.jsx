import React, { Component } from 'react';
import PrimaryButton from './PrimaryButton.jsx';

class Teacher extends Component {
  constructor() {
    super();
    this.sendDataToKid = this.sendDataToKid.bind(this);
  }
  sendDataToKid() {
    const furtherSteps = ['step3', 'step4', 'step5'];
    // console.log(this);
    this.props.updateDanceSteps(furtherSteps);
  }

  render() {
    return (
      <PrimaryButton func={this.sendDataToKid} text="Get Help From Teacher" />
    );
  }
}

export default Teacher;
