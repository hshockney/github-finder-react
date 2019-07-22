import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');
  const { users } = githubContext;
  const onChange = event => setText(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter a search term', 'light');
    } else if (users.length === 0) {
      alertContext.setAlert(
        'Sorry, your search did not return any results',
        'light'
      );
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
