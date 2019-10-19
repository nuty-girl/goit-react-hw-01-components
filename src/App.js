import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Stats from './components/Stats/Stats';
import stats from './components/Stats/statsDB';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <hr />
    <Stats title="Upload stats" stats={stats} />
    <hr />
    <FriendList friends={friends} />
    <hr />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
