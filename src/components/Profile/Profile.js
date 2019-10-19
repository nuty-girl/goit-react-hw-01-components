import React from 'react';
import T from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt="user_avatar" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: T.string.isRequired,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  avatar: T.string.isRequired,
  stats: T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
  }).isRequired,
};

export default Profile;
