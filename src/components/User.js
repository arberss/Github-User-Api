import React from 'react';
import Profile from './Profile';
import Followers from './Followers';

function User() {
  return (
    <div className='user-profile'>
      <Profile />
      <Followers />
    </div>
  );
}

export default User;
