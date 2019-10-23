import React from 'react';
import T from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline && '#4eae53' }}
    />
    <img
      className={styles.avatar}
      src={avatar}
      alt={`${name}-avatar`}
      width="48"
    />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  isOnline: T.bool.isRequired,
};

export default FriendListItem;
