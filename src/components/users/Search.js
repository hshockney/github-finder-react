import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' className='btn btn-dark btn-block' />
        </form>
      </div>
    );
  }
}

export default Search;
