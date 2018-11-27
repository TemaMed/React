import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './scratch';

class App extends Component {
  render() {
    return (
      <div className="App" >
          <div className="Form">
              <NameForm/>
          </div>
      </div>
    );
  }
}


export default App;
