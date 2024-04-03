import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export class Filter extends Component {
  state = {
    searchTerm: '',
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchTerm: value });
    this.props.onFilter(value);
  };
  render = () => {
    return (
      <>
        <h3 className={styles.info}>Find contacts by name</h3>
        <label className={styles.filter}>
          <input
            autoComplete="off"
            type="text"
            className={styles.input}
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  };
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
