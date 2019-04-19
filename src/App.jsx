import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
// import PrimaryButton from './components/PrimaryButton.jsx';
// import SecondaryButton from './components/SecondaryButton.jsx';
// import Social from './components/Social.jsx';
// import UIButton from './components/UIButton.jsx';
import Kid from './components/Kid.jsx';
import Teacher from './components/Teacher.jsx';
import Judge from './components/Judge.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0
    };

    this.updateDanceSteps = this.updateDanceSteps.bind(this);
    this.getApplaud = this.getApplaud.bind(this);
    this.qualified = this.qualified.bind(this);
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

  render() {
    const { volume, furtherSteps, isApplauded, isQualified } = this.state;
    // console.log(isQualified);
    return (
      <div className="App App-header">
        <header className="App-header">
          <Kid
            dressColor="green"
            furtherSteps={furtherSteps}
            isApplauded={isApplauded}
            isQualified={isQualified}
          />
          <br />
          <Teacher updateDanceSteps={this.updateDanceSteps} />
          <br />
          <br />
          <Judge getApplaud={this.getApplaud} qualified={this.qualified} />
        </header>
      </div>
    );
  }
}

export default App;
