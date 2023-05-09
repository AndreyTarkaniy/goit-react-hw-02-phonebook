import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/container/container';
import Form from 'components/form/form';
import Contacts from 'components/contacts/contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formContact = contactData => {
    console.log(contactData);
    // console.log(dataFromForm.number);

    const { name, number } = contactData;
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  render() {
    return (
      <Container>
        <Form onSubmitForm={this.formContact} />
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}
