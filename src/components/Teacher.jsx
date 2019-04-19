import React, { Component } from 'react';
import PrimaryButton from './PrimaryButton.jsx';

class Teacher extends React.Component {
  sendDataToKid() {
    const furtherSteps = ['step3', 'step4', 'step5'];
    //Send this data to Kid.js
  }

  render() {
    return <button onClick={this.sendDataToKid}>Get Help From Teacher</button>;
  }
}

export default Teacher;
