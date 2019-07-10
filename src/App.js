import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <Navbar title='Github Finder' icon='fab fa-github icon' />
      </nav>
    );
  }
}

export default App;
