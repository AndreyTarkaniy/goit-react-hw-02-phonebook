import React from 'react';
import css from 'components/container/container.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
