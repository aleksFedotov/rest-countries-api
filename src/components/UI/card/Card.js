import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
  const clickHandler = () => {
    if (!props.onClick) return;
    props.onClick();
  };
  return (
    <div onClick={clickHandler} className={`${styles.card} ${props.className}`}>
      {props.children}{' '}
    </div>
  );
};

export default Card;
