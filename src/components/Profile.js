import React from 'react';

import { VscPerson } from 'react-icons/vsc';
import { VscLocation } from 'react-icons/vsc';
import { VscLink } from 'react-icons/vsc';

import { GithubContext } from '../context/context';

function Profile() {
  const { githubUser } = React.useContext(GithubContext);
  const { avatar_url, name, login, location, blog, html_url } = githubUser;

  return (
    <div className='user'>
      <div className='user-header'>
        <div className='user-header-info'>
          <img src={avatar_url} alt='' />
          <div className='user-header-name'>
            <h1>{name}</h1>
            <p>@{login}</p>
          </div>
        </div>
        <a href={html_url} className='button' target='_blank'>
          Follow
        </a>
      </div>
      <p className='user-name'>
        <VscPerson className='p-icon' />
        {name}
      </p>
      {location !== null ? (
        <p className='user-city'>
          <VscLocation className='p-icon' />
          {location}
        </p>
      ) : null}
      {blog !== null ? (
        <p className='user-mail'>
          <VscLink className='p-icon' />
          {blog}
        </p>
      ) : null}
    </div>
  );
}

export default Profile;
