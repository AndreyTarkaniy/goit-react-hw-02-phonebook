import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/container/container';
import Form from 'components/form/form';
import ContactsList from 'components/contactsList/contactsList';
import Filter from 'components/filter/filter';
import ContactsData from 'components/data/contacts.json';

export class App extends Component {
  state = {
    contacts: ContactsData,
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
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
        <ContactsList contacts={contacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}
