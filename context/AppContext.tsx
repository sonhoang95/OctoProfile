import React, { useState } from 'react';
import { mockFollowers } from '../assets/constants/mockFollowers';
import { mockRepos } from '../assets/constants/mockRepos';
import { mockUser } from '../assets/constants/mockUser';
import { Repo, GithubUser, Follower } from '../type';

const url = 'https://api.github.com';

export interface GlobalContext {
  githubUser: GithubUser;
  repos: Repo[];
  followers: Follower[];
}

export const AppContext = React.createContext({} as GlobalContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <AppContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </AppContext.Provider>
  );
};
