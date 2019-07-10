import React, { Component } from 'react';
import UserItem from './UserItem';
class Users extends Component {
  state = {
    users: [
      {
        id: 'id',
        login: 'hshockney',
        avatar_url:
          'https://avatars2.githubusercontent.com/u/13931446?s=400&u=3076f2240f225b4853ea750de68c62fc0af32c5a&v=4',
        html_url: 'https://github.com/hshockney'
      },
      {
        login: 'defunkt',
        id: 2,
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt'
      },
      {
        login: 'pjhyett',
        id: 3,
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
export default Users;
