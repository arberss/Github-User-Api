import React from 'react';

import { GithubContext } from '../context/context';

function Repos() {
  const { githubUser } = React.useContext(GithubContext);
  const { followers, following, public_repos, public_gists } = githubUser;
  return (
    <div className='user-info'>
      <div className='info'>
        <h1>{public_repos}</h1>
        <p className='info-title'>Repos</p>
      </div>
      <div className='info'>
        <h1>{followers}</h1>
        <p className='info-title'>Followers</p>
      </div>
      <div className='info'>
        <h1>{following}</h1>
        <p className='info-title'>Following</p>
      </div>
      <div className='info'>
        <h1>{public_gists}</h1>
        <p className='info-title'>Gists</p>
      </div>
    </div>
  );
}

export default Repos;
