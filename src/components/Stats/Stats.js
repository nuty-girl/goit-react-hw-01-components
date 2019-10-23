import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const getRandomColor = () => {
  // eslint-disable-next-line no-bitwise
  const color = `#${((Math.random() * 0xffffff) | 0).toString(16)}`;
  return color;
};
const Stats = ({ title, stats }) => (
  <section className={styles.stats_section}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
