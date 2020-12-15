import React, { useState, useEffect } from 'react';
import mockFollowers from './defaultData/mockFollowers';
import mockUser from './defaultData/mockUser';
import axios from 'axios';

const url = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  let getUser = async (user) => {
    setIsLoading(true);

    let response = await axios(`${url}/users/${user}`).catch((err) =>
      console.log(err)
    );

    if (response) {
      setGithubUser(response.data);
      const { followers_url } = response.data;

      let fllw = await axios(`${followers_url}?per_page=100`);
      setFollowers(fllw.data);
    } else {
      toggleError(true, 'There is no user with that username');

      setTimeout(() => {
        toggleError();
      }, 3000);
    }
    setIsLoading(false);
  };

  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }

  useEffect(() => {
    getUser('BrendanEich');
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        followers,
        getUser,
        error,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
