import React from 'react'
import Lorem from 'react-lorem-component'
import dictionary from './dictionary'
import './App.css'

const App = () => {
  return <div className="App">
    <header className="App-header">
      <h1 className="App-title">Seattle Ipsum</h1>
    </header>
    <Lorem words={dictionary} seed={Math.random() * 10} className="App-content" />
    Photo by MILKOVÍ on Unsplash
  </div>
}

export default App
