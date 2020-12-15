import React from 'react';

import { GithubContext } from '../context/context';

function Header() {
  const { githubUser } = React.useContext(GithubContext);
  return (
    <header>
      <h1>You searched for: {githubUser.name}</h1>
    </header>
  );
}

export default Header;
