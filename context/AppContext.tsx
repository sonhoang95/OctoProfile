import React, { useState, useEffect } from 'react';
import { mockFollowers } from '../assets/constants/mockFollowers';
import { mockRepos } from '../assets/constants/mockRepos';
import { mockUser } from '../assets/constants/mockUser';
import { Repo, GithubUser, Follower } from '../type';
import axios from 'axios';

const url = 'https://api.github.com';

export interface GlobalContext {
  githubUser: GithubUser;
  repos: Repo[];
  followers: Follower[];
  requests: number;
  error: { show: boolean; msg: string };
}

export const AppContext = React.createContext({} as GlobalContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // request & loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // error
  const [error, setError] = useState({ show: false, msg: '' });

  const toggleError = (show: boolean = false, msg: string = '') => {
    setError({ show, msg });
  };

  // check rates
  const checkRequests = () => {
    axios(`${url}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          // throw an error
          toggleError(true, 'Sorry, you have exceeded your hourly rate limit!');
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <AppContext.Provider
      value={{ githubUser, repos, followers, requests, error }}
    >
      {children}
    </AppContext.Provider>
  );
};
