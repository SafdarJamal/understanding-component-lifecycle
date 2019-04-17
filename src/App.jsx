import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimaryButton from './components/PrimaryButton.jsx';
import Social from './components/Social.jsx';
import UIButton from './components/UIButton.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'world', inputV: 's' };
    this.search = this.search.bind(this);
  }
  search(event) {
    this.setState({ inputV: event.target.value });
    console.log(event.target.value, this.state);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PrimaryButton />
          <br />
          <br />
          <Social />
          <br />
          <br />
          <UIButton />
          <br />
          <br />
          <div>
            <input
              type="text"
              onChange={this.search}
              value={this.state.inputV}
              style={{ backgroundColor: 'grey', color: 'aliceblue' }}
            />
            <button>Search</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
