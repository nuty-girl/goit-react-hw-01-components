import React from 'react';
import T from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
