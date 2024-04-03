import PropTypes from 'prop-types';
import styles from './List.module.css';

export const List = ({ contacts, removeContact }) => {
  return (
    <ul className={styles.contact__list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contact__item}>
          {contact.name
            .split(' ')
            .map(n => n.charAt(0).toUpperCase() + n.slice(1))
            .join(' ')}{' '}
          : {contact.number}
          <button
            className={styles.delete__button}
            type="button"
            onClick={() => {
              removeContact(contact.id);
            }}
          >
            {' '}
            Delete{' '}
          </button>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
