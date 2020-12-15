import React from 'react';

import { GithubContext } from '../context/context';

function Followers() {
  const { followers } = React.useContext(GithubContext);

  return (
    <div className='fllw'>
      <div className='follow'>
        {console.log(followers)}
        {followers.map((item) => {
          const { avatar_url, html_url, login, id } = item;
          return (
            <div className='single-follow' key={id}>
              <img src={avatar_url} alt='' />
              <div className='followers-name'>
                <h1>{login}</h1>
                <a href={html_url} target='_blank'>
                  {html_url}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Followers;
