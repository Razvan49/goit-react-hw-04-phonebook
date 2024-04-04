import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <div className={styles.name}>Name:</div>
          <input
            autoComplete="off"
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Z\s]{1,32}$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          <div className={styles.number}>Number:</div>
          <input
            autoComplete="off"
            className={styles.input}
            type="tel"
            name="number"
            pattern="^\+?\d{1,3}\(?\d{1,4}\)?(?:[0-9]-?.?){6,14}[0-9]$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={styles.add__button}>
          {' '}
          Add contact{' '}
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
