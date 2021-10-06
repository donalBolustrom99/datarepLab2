import React, { Component } from 'react';//import react

class Content extends Component {
  render() {
    return (
      //content contents
      <div className="App">
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//import for app.js
export default Content;