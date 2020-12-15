import React, { useState } from 'react';

import { GithubContext } from '../context/context';

function Search() {
  const [user, setUser] = useState('');

  const { getUser, error } = React.useContext(GithubContext);

  const searchUser = (e) => {
    e.preventDefault();

    if (user) {
      getUser(user);
    }
    setUser('');
  };

  return (
    <>
      {error.show && <p className='error'>{error.msg}</p>}
      <form className='form' onSubmit={searchUser}>
        <input
          type='text'
          placeholder='Github user'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button className='btn'>Search</button>
      </form>
    </>
  );
}

export default Search;
