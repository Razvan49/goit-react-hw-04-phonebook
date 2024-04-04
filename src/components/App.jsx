import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';

import styles from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          { id: 'id-5', name: 'Dobby Potter', number: '327-61-55' },
        ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = newContact => {
    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      };
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const handleFilter = term => {
    setFilter(term);
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form onSubmit={handleSubmit} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter onFilter={handleFilter} />
      <List contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
}
