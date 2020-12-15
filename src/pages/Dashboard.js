import React from 'react';

import User from '../components/User';
import Header from '../components/Header';
import Repos from '../components/Repos';
import Search from '../components/Search';

import spinner from '../preloader.gif';

import { GithubContext } from '../context/context';

function Dashboard() {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className='container'>
          <Search />
          <img src={spinner} className='spinner' />
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className='container'>
        <Search />
        <Repos />
        <User />
      </div>
    </>
  );
}

export default Dashboard;
