import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
// import PrimaryButton from './components/PrimaryButton.jsx';
// import SecondaryButton from './components/SecondaryButton.jsx';
// import Social from './components/Social.jsx';
// import UIButton from './components/UIButton.jsx';
import Kid from './components/Kid.jsx';
import Teacher from './components/Teacher.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0
    };

    this.updateDanceSteps = this.updateDanceSteps.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return { volume: 5 };
  }

  updateDanceSteps(furtherSteps) {
    this.setState({ furtherSteps });
  }
  render() {
    const { volume, furtherSteps } = this.state;
    console.log(furtherSteps);
    return (
      <div className="App App-header">
        <header className="App-header">
          <Kid dressColor="green" furtherSteps={furtherSteps} />
          <br />
          <Teacher updateDanceSteps={this.updateDanceSteps} />
        </header>
      </div>
    );
  }
}

export default App;
