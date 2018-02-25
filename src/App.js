import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Lorem from 'react-lorem-component'
import dictionary from './dictionary'
import './App.css'

class App extends Component {
  componentWillMount() {
    console.log(dictionary)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Seattle Ipsum</h1>
        </header>
        <Lorem words={dictionary} seed={Math.random() * 10} className="App-content" />
        Photo by MILKOVÍ on Unsplash
      </div>
    );
  }
}

export default App
