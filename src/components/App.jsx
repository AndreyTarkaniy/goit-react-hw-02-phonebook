import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/container/container';
import Form from 'components/form/form';
import Contacts from 'components/contacts/contacts';
import Filter from 'components/filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contactDataForm => {
    const { name, number } = contactDataForm;

    const existContact = this.state.contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    const { value } = event.target;

    this.setState({ filter: value });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const contacts = this.filterContact();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmitForm={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Contacts contacts={contacts} />
      </Container>
    );
  }
}
