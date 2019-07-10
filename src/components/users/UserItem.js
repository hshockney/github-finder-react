import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'hshockney',
    avatar_url:
      'https://avatars2.githubusercontent.com/u/13931446?s=400&u=3076f2240f225b4853ea750de68c62fc0af32c5a&v=4',
    html_url: 'https://github.com/hshockney'
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          className='round-img'
          style={{ width: '100px' }}
          alt='avatar of github user'
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
