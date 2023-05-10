import React from 'react';
import css from 'components/filter/filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
