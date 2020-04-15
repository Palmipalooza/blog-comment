import React, { Component } from 'react';

export default class App extends Component {
  const mySampleVariable = ['one', 'two']
  render() {
    return (
      <div>
        <label className="label" for="first">
          Enter some text:
        </label>
        <input type="text" id="first" />
        <button style={{ backgroundColor: 'red', color: 'blue' }}>
          Submit
        </button>
      </div>
    );
  }
}
