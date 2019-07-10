import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = { users: [], loading: false };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github icon' />
        <div className='container'>
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
