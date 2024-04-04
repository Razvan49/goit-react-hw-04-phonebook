import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ onFilter }) => {
  const [filterTerm, setfilterTerm] = useState('');
  const handleChange = evt => {
    const { value } = evt.target;
    setfilterTerm(value);
    onFilter(value);
  };
  return (
    <>
      <h3 className={styles.info}>Find contacts by name</h3>
      <label className={styles.filter}>
        <input
          autoComplete="off"
          type="text"
          className={styles.input}
          value={filterTerm}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
