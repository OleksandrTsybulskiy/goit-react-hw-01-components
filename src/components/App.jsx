import { AppWrapper } from './AppWrapper/AppWrapper';
import { Statistics } from './Statistics/Statisctics';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';

import user from '../user.json'
import stats from '../data.json'
import friends from '../friends.json'
import items from '../transactions.json'

export const App = () => {
  return (
    <AppWrapper>
      <Profile user={user}/>
      <Statistics stats={stats} title="Upload Stats"/>
      <FriendList friends={friends}/>
      <TransactionHistory items={items}/>
    </AppWrapper>
  );
};