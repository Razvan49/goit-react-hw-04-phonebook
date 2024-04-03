import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <div className={styles.name}>Name:</div>
            <input
              autoComplete="off"
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Z\s]{1,32}$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
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
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
